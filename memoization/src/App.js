import { useState, useMemo } from "react";

import "./App.css";
import Header from "./components/Header";

//Componentin içerisinde yazılmadığında render işleminden kurtarabilir
//Object veriler bellekte referansları aynı tutulmadığı için render edilir
// const data = { name: "Nursel" };

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  //useMemo kullanılarak Header componenti içerisinde re-render edilmesi engellendi
  //eğer dependency array içerisindeki veri değişirse render olur
  const data = useMemo(() => {
    return calculateObject(number);
  }, [number]);

  // const data = calculateObject();
  return (
    <div className="App">
      <Header data={data} />
      <hr />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <br />
      <br />
      <input value={text} onChange={({ target }) => setText(target.value)} />
    </div>
  );
}

function calculateObject(number) {
  console.log("Calculating...");
  for (let index = 0; index < 100000000; index++) {}
  return { name: "Nursel" , number};
}

export default App;
