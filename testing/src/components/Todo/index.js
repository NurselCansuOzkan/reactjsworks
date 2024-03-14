import { useState } from "react";

const defaultItems = [
  { name: "Items A" },
  { name: "Items B" },
  { name: "Items C" },
];
function Todo() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(defaultItems);

  const addItem = () => {
    setItems((prevState) => [...prevState, { name: text }]);
    setText("");
  };
  return (
    <div>
    <label>
    Text
    <input value={text} onChange={(e) => setText(e.target.value)} />
    </label>
      <button onClick={addItem}>Add</button>

      <br />
      <br />
      {items.map((item, key) => (
        <div key={key}>{item.name}</div>
      ))}
    </div>
  );
}

export default Todo;
