const base = require('./base.test');

const { request, cleanUsersExceptDefaultOne } = base;

describe('POST /user', () => {
  const apiBase = process.env.API_BASE || '/api';
  const newUser = {
    email: 'test-user@test.com',
    password: 'test',
  };

  it('should create new user and return right data without sensitive info', async () => {
    await cleanUsersExceptDefaultOne();

    return request
      .post(`${apiBase}/user`)
      .send(newUser)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .expect((res) => {
        if (res.body.email !== newUser.email) {
          throw new Error('Emails don\'t match!');
        }

        // sensitive fields: [password, refresh_token]
        if (res.body.password || res.body.refresh_token) {
          throw new Error('Sensitive user info is sent to client!');
        }
      });
  });

  it('should not create user without password', async () => {
    await cleanUsersExceptDefaultOne();

    return request
      .post(`${apiBase}/user`)
      .send({ email: newUser.email })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500);
  });
});
