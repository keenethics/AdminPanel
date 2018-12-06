import React, { Component } from 'react';

import {
  Form,
  Fieldset,
  Label,
  Textfield,
  Checkbox,
  Button,
  RadioButton,
} from 'Form';

class Components extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Designer',
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
            />
          </Fieldset>
          <Fieldset legend="User role" className="register-panel">
            <RadioButton name="role" text="Developer" />
            <RadioButton name="role" text="Designer" />
            <RadioButton name="role" text="Manager" />
          </Fieldset>
          <Fieldset>
            <div className="row">
              <div className="col-1-2">
                <Button value="Log in" />
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

export default Components;
