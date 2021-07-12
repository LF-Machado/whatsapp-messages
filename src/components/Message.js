import React, { useState } from "react";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import "./Message.css";

function Message() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = ({ target }) => {
    const { id, value } = target;

    if (id === "phone") setPhone(value);
    else setMessage(value);
  };

  const transformMessage = () => {
    return message.replace(/\n/g, "%0a");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = transformMessage();
    window.location.href = `whatsapp://send?text=${newMessage}&phone=${phone}}`;
  };
  return (
    <div className="message__container">
      <Card className="message__form mt-5 p-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="form__phone">
            <Form.Label className="form__phone__label">Phone Number</Form.Label>
            <Form.Control
              className="form__phone__number mt-1 mb-4"
              id="phone"
              type="number"
              onChange={handleChange}
              value={phone}
            />
          </Form.Group>
          <Form.Label className="form__message__label">Message</Form.Label>
          <Form.Control
            className="mt-1 mb-4"
            as="textarea"
            rows={5}
            id="message"
            type="text"
            onChange={handleChange}
            value={message}
          />
          <Button className="form__button mb-1" type="submit">
            Send Message
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default Message;
