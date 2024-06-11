import style from "./App.module.css";
import { Button } from "./components/Button/button.jsx";
import { Toast } from "./components/Toast/toast.jsx";

function App() {
  return (
    <>
      <section className={style.section}>
        <h1>Components Vercel</h1>
        <div className={style.components}>
          <Button />
          <Toast />
        </div>
      </section>
    </>
  );
}

export default App;
