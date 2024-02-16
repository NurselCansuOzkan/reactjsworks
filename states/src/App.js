import { useState } from "react";
function App() {
 //state:değerinin değişme potansiyeli olan bütün verileri tutan yap
  const [name, setName] = useState('Nursel');
  const [age,setAge]= useState('32');
  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>
      <button onClick={()=>setName('Cansu')}>Change Name</button>
      <button onClick={()=>setAge(27)}>Change Age</button>
    </div>
  );
}

export default App;
