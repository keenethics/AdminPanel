import React, { Component } from 'react';

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

class FormComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
      comment: '',
      role: 'developer',
      rememberMe: false,
    };
  }

  onChange = ({ target: { name, value } = {} } = {}) => {
    if (name) {
      this.setState({
        [name]: value,
      });
    }
  }

  onCheckboxToggle = ({ target: { name } = {} } = {}) => {
    if (name) {
      this.setState(state => ({
        [name]: !state[name],
      }));
    }
  }

  render() {
    const {
      name,
      password,
      comment,
      role,
      rememberMe,
    } = this.state;

    return (
      <div className="container">
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
              onChange={this.onChange}
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
              onChange={this.onChange}
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
              onChange={this.onChange}
            />
          </Fieldset>
          <Fieldset legend="User role" legendId="userRole" className="register-panel">
            <RadioGroup id="userRole">
              <RadioButton
                name="role"
                text="Developer"
                value="developer"
                isChecked={role === 'developer'}
                onChange={this.onChange}
              />
              <RadioButton
                name="role"
                text="Designer"
                value="designer"
                isChecked={role === 'designer'}
                onChange={this.onChange}
              />
              <RadioButton
                name="role"
                text="Manager"
                value="manager"
                isChecked={role === 'manager'}
                onChange={this.onChange}
              />
            </RadioGroup>
          </Fieldset>
          <Fieldset>
            <div className="row">
              <div className="col-1-2">
                <Button text="Sign up" className="green" />
              </div>
              <div className="col-1-2">
                <Checkbox
                  text="Remember me"
                  name="rememberMe"
                  onChange={this.onCheckboxToggle}
                  isChecked={rememberMe}
                />
              </div>
            </div>
          </Fieldset>
          <Fieldset />
        </Form>
      </div>
    );
  }
}

export default FormComponents;
