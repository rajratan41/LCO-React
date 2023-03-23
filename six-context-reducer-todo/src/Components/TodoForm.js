import React, { useState, useContext } from "react";
import { FormGroup, Form, InputGroup, Input, Button } from "reactstrap";

import { v4 } from "uuid";

import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/action.types";

const TodoForm = () => {
  return (
    <Form className="form">
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your Next Todo" /*Todo: value, onClick*/
          />
          <Button color="warning" /**Todo: Onclick */>Add</Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
