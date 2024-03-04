import { useState } from "react";
import Form from "./Form";

import "./styles.css";

function Todos() {
  const [items, setItems] = useState([
    {
      name: "Learn Javascript",
      checked: true,
    },
    {
      name: "Learn React",
      checked: false,
    },
    {
      name: "Have a life",
      checked: false,
    },
  ]);
  return (
    <div>
      <Form items={items} addItem={setItems}/>
    </div>
  );
}

export default Todos;
