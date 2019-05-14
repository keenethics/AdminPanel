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
} from 'Actions/signinForm';
import {
  signinUser,
} from 'Actions/auth';

const Signin = () => {
  const dispatch = useDispatch();
  const mapState = useCallback(({ signinForm }) => ({
    email: signinForm.email,
    password: signinForm.password,
    isLoading: signinForm.isLoading,
  }), []);

  const {
    email,
    password,
    isLoading,
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

    dispatch(signinUser());
  });

  return (
    <Container>
      <h1>Sign in</h1>
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
            isInvalid={!!email.error}
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
            text="Sign in"
            type="submit"
            className="green"
            isLoading={isLoading}
          />
        </Fieldset>
      </Form>
      <div className="form-switch">
        Do not have an account yet?
        &nbsp;
        <Link to="/signup">
          Sign up now
        </Link>
      </div>
    </Container>
  );
};

export default Signin;
