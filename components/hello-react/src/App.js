import "./App.css";
import Header from "./components/Header";
import User from "./components/User";
import React from "react";

const name = "Nursel";
const surname = "Özkan";
const isLoggedIn = false;
// const friends = ["Sufle", "Hamur", "Lazy", "Mia"];
const friends = [
  { id: 1, name: "Sufle" },
  { id: 2, name: "Hamur" },
  { id: 3, name: "Lazy" },
];

function App() {
  // return React.createElement('div', null, 'HEllo');
  // return(
  //   <div>
  //     <h1>Hello React</h1>
  //     <Header />
  //     <Header ></Header>
  //   </div>
  // )

  return (
    <div>
      <User
        name="Nursel"
        surname="Asar"
        isLoggedIn={true}
        age={32}
        friends={friends}
        address={{ title: "Yenimahalle/Ankara", zip: 67560 }}
      />
    </div>
  );
}

export default App;
