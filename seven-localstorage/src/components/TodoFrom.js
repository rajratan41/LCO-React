import React, { useState } from "react";
import {
  Form,
  FormGroup,
  InputGroup,
  Input,
  Button,
  Container,
} from "reactstrap";
import { v4 } from "uuid";

const TodoForm = ({ addTodos }) => {
  const [todoString, setTodoString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please Enter Todo");
    }

    const todo = {
      todoString,
      id: v4(),
    };

    addTodos(todo);

    setTodoString("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter Todo"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <Button color="warning">Add</Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
