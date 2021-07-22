import React from "react";
import { Form, Button } from "react-bootstrap";

export default function TrackerForm({ handleInputChange, handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter the name of a country you want to see:</Form.Label>
        <Form.Control
          type="name"
          placeholder="Japan"
          onChange={(event) => handleInputChange(event.target.value)}
        />
        <Form.Text className="text-muted">Please enter in English.</Form.Text>
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}
