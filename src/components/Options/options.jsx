import style from "./options.module.css";
// eslint-disable-next-line react/prop-types
export const Options = ({ close }) => {
  return (
    <section className={style.section_options}>
      <div onClick={close}>One</div>
      <div onClick={close}>Two</div>
      <div onClick={close}>Three</div>
      <div onClick={close}>Delete</div>
    </section>
  );
};
