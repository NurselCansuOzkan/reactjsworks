import { useState, useMemo, useCallback } from "react";

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
  // const data = useMemo(() => {
  //   return calculateObject(number);
  // }, [number]);

  // const data = calculateObject();

  //useCallback ile fonksiyonun aynı fonksiyon olduğu belirtiliyor, dependency array içerisindeki veri değişene kadar
  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1);
  }, []);

  return (
    <div className="App">
      <Header increment={increment} />
      <hr />
      <h1>{number}</h1>

      <br />
      <br />
      <input value={text} onChange={({ target }) => setText(target.value)} />
    </div>
  );
}

// function calculateObject(number) {
//   console.log("Calculating...");
//   for (let index = 0; index < 100000000; index++) {}
//   return { name: "Nursel" , number};
// }

export default App;
