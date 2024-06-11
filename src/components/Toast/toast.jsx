import style from "./toast.module.css";
import { Message } from "../Message/message";
import { useState } from "react";

export const Toast = () => {
  const [messages, setMessages] = useState([]);

  const handleToastMessage = () => {
    setMessages([
      ...messages,
      {
        id: crypto.randomUUID(),
        message: "The Evil Rabbit jumped over the fence.",
      },
    ]);
  };

  const handleClose = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  return (
    <section className={style.section}>
      <button className={style.toast} onClick={handleToastMessage}>
        Show Toast
      </button>
      <div className={style.toastContainer}>
        {messages.map((message) => (
          <Message
            key={message.id}
            id={message.id}
            message={message.message}
            onClose={handleClose}
          />
        ))}
      </div>
    </section>
  );
};
