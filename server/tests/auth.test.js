const base = require('./base.test');

const {
  request,
  truncate,
  createDefaultUser,
  getDefaultUser,
} = base;

const apiBase = process.env.API_BASE || '/api';

describe('POST /user', () => {
  const newUser = {
    email: 'test-user@test.com',
    password: 'test',
  };

  before(() => truncate());
  after(() => truncate());

  it('should create new user and return right data without sensitive info', () => request
    .post(`${apiBase}/user`)
    .send(newUser)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(201)
    .expect((res) => {
      if (res.body.email !== newUser.email) {
        throw new Error('Emails don\'t match!');
      }

      // sensitive fields: [password, refreshToken]
      if (res.body.password || res.body.refreshToken) {
        throw new Error('Sensitive user info is sent to client!');
      }
    }));

  it('should not create user if email is already used', () => request
    .post(`${apiBase}/user`)
    .send(newUser)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(409)
    .expect((res) => {
      if (res.body.error !== 'This email already exists') {
        throw new Error('Error text is wrong');
      }
    }));

  it('should not create user without password', () => request
    .post(`${apiBase}/user`)
    .send({ email: newUser.email })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(403));
});

describe('POST /login', () => {
  before(async () => {
    await truncate();
    await createDefaultUser();
  });
  after(() => truncate());

  const user = getDefaultUser();

  it('should retrieve access and refresh tokens', () => request
    .post(`${apiBase}/auth/login`)
    .send(user)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(201)
    .expect((res) => {
      if (!(res.body.token && res.body.refreshToken)) {
        throw new Error('Access and refresh tokens aren\'t both retrieved');
      }
    }));

  it('should not login with invalid password', async () => {
    // check empty password
    await request
      .post(`${apiBase}/auth/login`)
      .send({ email: user.email, password: '' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        if (res.body.error !== 'Wrong email or password') {
          throw new Error('Error text is wrong');
        }
      })
      .expect(401);

    // check wrong password
    return request
      .post(`${apiBase}/auth/login`)
      .send({ email: user.email, password: 'wrong-password' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        if (res.body.error !== 'Wrong email or password') {
          throw new Error('Error text is wrong');
        }
      })
      .expect(401);
  });

  it('should not login with invalid email', () => request
    .post(`${apiBase}/auth/login`)
    .send({ email: 'wrong-email@wrong.net', password: user.password })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect((res) => {
      if (res.body.error !== 'Wrong email or password') {
        throw new Error('Error text is wrong');
      }
    })
    .expect(401));
});

describe('GET /user', () => {
  const user = getDefaultUser();
  let authToken = '';
  before(async () => {
    await truncate();
    await createDefaultUser();

    // Get auth token
    await request
      .post(`${apiBase}/auth/login`)
      .send(user)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .expect((res) => {
        authToken = `Bearer ${res.body.token}`;
      });
  });
  after(() => truncate());

  it('should get list of users with default user only', () => request
    .get(`${apiBase}/user`)
    .set('Authorization', authToken)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .expect((res) => {
      if (!Array.isArray(res.body)) {
        throw new Error('Data is not an array');
      }

      if (res.body.length !== 1) {
        throw new Error('Number of users is not one');
      }

      if (res.body[0].email !== user.email) {
        throw new Error('Retrieved user is not default one');
      }
    }));
});
