import { useState } from "react";
import ConfirmBox from "./components/confirm/ConfirmBox";

function App() {
  const [confirm, setconfirm] = useState(false);

  const showConfirm = () => {
    setconfirm(true);
  };
  return (
    <>
      {confirm ? <ConfirmBox func={setconfirm} /> : ""}
      <button onClick={() => showConfirm()}>Delete</button>
    </>
  );
}

export default App;
