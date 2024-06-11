import style from "./message.module.css";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export const Message = ({ id, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 5000);

    return () => clearTimeout(timer);
  }, [id, onClose]);

  const handleClose = () => {
    onClose(id);
  };

  return (
    <div className={`${style.message} ${style.show}`}>
      <span className={style.text}>{message}</span>
      <button className={style.close} onClick={handleClose}>
        X
      </button>
    </div>
  );
};
