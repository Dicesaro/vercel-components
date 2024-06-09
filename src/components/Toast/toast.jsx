import style from "./toast.module.css";

export const Toast = () => {
  return (
    <section className={style.section}>
      <button className={style.toast}>Toast</button>
    </section>
  );
};
