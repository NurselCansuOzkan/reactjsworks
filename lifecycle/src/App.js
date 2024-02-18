import {useState, useEffect} from "react";

function App() {
  const [number,setNumber] = useState(0);
  const [name, setName] = useState("Nursel")

  // componentDidMount
  useEffect(()=>{
    console.log("State güncellendi");
  }, [number]);

  useEffect(()=>{
    console.log("State güncellendi");
  }, [name]);

  //[] dependency array
  useEffect(()=>{
    console.log("Component mount edildi");
  },[])
  return (
    <div >
      <h1>{number}</h1>
      <button onClick={()=>setNumber(number+1)}>Click</button>
      <hr/>
      <br/>
      {name}
      <button onClick={()=>setName("Cansu")}>Click</button>
    </div>
  );
}

export default App;
