import React from 'react';

import {
  Form,
  Fieldset,
  Label,
  Textfield,
  Checkbox,
  Button,
} from 'Form';

const Components = () => (
  <div className="container">
    <Form onSubmit={() => {}}>
      <Fieldset>
        <Label htmlFor="textfield-username">
          Username
        </Label>
        <Textfield
          id="textfield-username"
          placeholder="Unique username"
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

export default Components;
