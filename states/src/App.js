import { useState } from "react";
function App() {
  //state:değerinin değişme potansiyeli olan bütün verileri tutan yap
  const [name, setName] = useState("Nursel");
  const [age, setAge] = useState("32");
  const [friends, setFriends] = useState(["Nursel", "Osman"]);
  const [address, setAddress] = useState({ title: "Ankara", zip: 65066 });

  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Cansu")}>Change Name</button>
      <button onClick={() => setAge(27)}>Change Age</button>
      <hr />
      <br />
      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <br />
      //array içerisinde önceki verileri korumak istiyorsak ... (spread
      operatörü) kullanıyoruz
      <button onClick={() => setFriends(["Cansu", ...friends])}>
        Add new friend
      </button>
      <hr />
      <br />
      <br />
      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>
      <br />
      <button onClick={() => setAddress({ ...address, title: "Istanbul" })}>
        Change address
      </button>
    </div>
  );
}

export default App;
