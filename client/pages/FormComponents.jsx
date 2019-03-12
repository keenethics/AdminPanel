import React, { useState } from 'react';

import {
  Form,
  Fieldset,
  Label,
  Textfield,
  Textarea,
  Checkbox,
  Button,
  RadioGroup,
  RadioButton,
} from 'Form';

const FormComponents = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [comment, setComment] = useState('');
  const [role, setRole] = useState('developer');
  const [rememberMe, toggleRememberMe] = useState(false);

  return (
    <div className="container">
      <h1>
        Form components
      </h1>
      <Form onSubmit={() => {}}>
        <Fieldset>
          <Label htmlFor="textfield-username">
            Username
          </Label>
          <Textfield
            id="textfield-username"
            placeholder="Unique username"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
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
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="textarea-comment">
            Comment
          </Label>
          <Textarea
            id="textarea-comment"
            placeholder="Perfect comment"
            name="comment"
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
        </Fieldset>
        <Fieldset legend="User role" legendId="userRole" className="register-panel">
          <RadioGroup id="userRole">
            <RadioButton
              name="role"
              text="Developer"
              value="developer"
              isChecked={role === 'developer'}
              onChange={e => setRole(e.target.value)}
            />
            <RadioButton
              name="role"
              text="Designer"
              value="designer"
              isChecked={role === 'designer'}
              onChange={e => setRole(e.target.value)}
            />
            <RadioButton
              name="role"
              text="Manager"
              value="manager"
              isChecked={role === 'manager'}
              onChange={e => setRole(e.target.value)}
            />
          </RadioGroup>
        </Fieldset>
        <Fieldset>
          <div className="row">
            <div className="col-1-2">
              <Button text="Sign up" />
            </div>
            <div className="col-1-2">
              <Checkbox
                text="Remember me"
                name="rememberMe"
                onChange={() => toggleRememberMe(!rememberMe)}
                isChecked={rememberMe}
              />
            </div>
          </div>
        </Fieldset>
        <Fieldset />
      </Form>
    </div>
  );
};

export default FormComponents;
