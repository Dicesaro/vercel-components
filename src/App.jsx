import style from "./App.module.css";
import { Button } from "./components/Button/button.jsx";

function App() {
  return (
    <>
      <section className={style.section}>
        <h1>Components Vercel</h1>
        <div className={style.components}>
          <Button />
        </div>
      </section>
    </>
  );
}

export default App;
