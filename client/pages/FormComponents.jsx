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
    };
  }

  onChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name } = this.state;

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
            />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="textarea-comment">
              Comment
            </Label>
            <Textarea
              id="textarea-comment"
              placeholder="Perfect comment"
            />
          </Fieldset>
          <Fieldset legend="User role" legendId="userRole" className="register-panel">
            <RadioGroup id="userRole">
              <RadioButton name="role" text="Developer" isChecked />
              <RadioButton name="role" text="Designer" />
              <RadioButton name="role" text="Manager" />
            </RadioGroup>
          </Fieldset>
          <Fieldset>
            <div className="row">
              <div className="col-1-2">
                <Button text="Sign up" className="green" />
              </div>
              <div className="col-1-2">
                <Checkbox text="Remember me" />
              </div>
            </div>
          </Fieldset>
        </Form>
      </div>
    );
  }
}

export default FormComponents;
