import { useState, useEffect } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  // const [name, setName] = useState("Nursel")

  // componentDidMount
  useEffect(() => {
    console.log("number state güncellendi");
  }, [number]);

  // useEffect(()=>{
  //   console.log("State güncellendi");
  // }, [name]);

  //[] dependency array
  useEffect(() => {
    console.log("Component mount edildi");

    const interval = setInterval(() => {
      setNumber((n) => n + 1);
    }, 1000);
    // return () => console.log("Component unmount edildi");
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>{number}</h1>
      <hr />
    </div>
  );
}

export default Counter;
