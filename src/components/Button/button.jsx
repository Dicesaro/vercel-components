import style from "./button.module.css";
import { useState, useEffect, useRef } from "react";
import { Options } from "../Options/options.jsx";

export const Button = () => {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const optionRef = useRef(null);

  const handleOpen = () => {
    if (open) {
      setClosing(true);
      setTimeout(() => {
        setOpen(false);
        setClosing(false);
      }, 500);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionRef.current && !optionRef.current.contains(event.target)) {
        if (open) {
          setClosing(true);
          setTimeout(() => {
            setOpen(false);
            setClosing(false);
          }, 500);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, optionRef]);

  return (
    <section className={style.section} ref={optionRef}>
      <button onClick={handleOpen} className={style.button}>
        Actions
      </button>
      {open && (
        <div
          className={
            closing
              ? `${style["options-exit"]} ${style["options-exit-active"]}`
              : `${style["options-enter"]} ${style["options-enter-active"]}`
          }
        >
          <Options close={handleOpen} />
        </div>
      )}
    </section>
  );
};
