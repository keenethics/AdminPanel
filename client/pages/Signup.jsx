import React, { useCallback } from 'react';
import {
  useDispatch,
  useMappedState,
} from 'redux-react-hook';
import { Link } from 'react-router-dom';

import Container from 'Common/Container';
import {
  Form,
  Fieldset,
  Label,
  Textfield,
  Button,
} from 'Form';

import {
  changeEmail,
  changePassword,
} from 'Actions/signupForm';

import {
  signupUser,
} from 'Actions/auth';

const Signup = () => {
  const dispatch = useDispatch();
  const mapState = useCallback(({ signupForm }) => ({
    email: signupForm.email,
    password: signupForm.password,
  }), []);

  const {
    email,
    password,
  } = useMappedState(mapState);

  const onEmailChange = useCallback(({ target }) => {
    dispatch(changeEmail({
      value: target.value,
      error: null,
    }));
  }, []);
  const onPasswordChange = useCallback(({ target }) => {
    dispatch(changePassword({
      value: target.value,
      error: null,
    }));
  }, []);
  const onFormSubmit = useCallback((e) => {
    e.preventDefault();

    dispatch(signupUser());
  });

  return (
    <Container>
      <h1>Sign up</h1>
      <Form onSubmit={onFormSubmit}>
        <Fieldset>
          <Label htmlFor="textfield-email">
            Email
          </Label>
          <Textfield
            id="textfield-email"
            placeholder="sample@mail.com"
            name="email"
            value={email.value}
            onChange={onEmailChange}
          />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="textfield-password">
            Password
          </Label>
          <Textfield
            id="textfield-password"
            placeholder="Excellent password"
            type="password"
            name="password"
            value={password.value}
            onChange={onPasswordChange}
          />
        </Fieldset>
        <Fieldset>
          <Button
            text="Sign up"
            type="submit"
            className="green"
          />
        </Fieldset>
      </Form>
      <div className="form-switch">
        Already have an account yet?
        &nbsp;
        <Link to="/signin">
          Sign in now
        </Link>
      </div>
    </Container>
  );
};

export default Signup;
