import "./App.css";

import A from "./components/A";
import B from "./components/B";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{ color: "red", backgroundColor: "white" }}>
          Lorem ıpsum hecgsdwe
        </div>
        <div className="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
        <A />
        <B />
      </header>
    </div>
  );
}

export default App;
