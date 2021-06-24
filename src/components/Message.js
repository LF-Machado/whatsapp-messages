import React, { useState } from "react";

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
    window.location.href = `whatsapp://send?text=${newMessage}&phone=57${phone}}`;
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="phone" type="number" onChange={handleChange} value={phone} />
        <textarea
          id="message"
          type="text"
          onChange={handleChange}
          value={message}
        />
        <button type="submit">Send Messagexxxxxx</button>
      </form>
    </div>
  );
}

export default Message;
