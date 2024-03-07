import {useState} from 'react';
import Todos from "./components/Todos";
import {ThemeProvider,Image,Button,Editor} from "onc-react-ui";
import 'onc-react-ui/dist/index.css'
import "./App.css";

function App() {
  const [value,setValue] = useState('');
  return (
    <ThemeProvider theme={{primaryColor:'green',secondaryColor:'red'}}>
    <div className="App">
      <Todos  />
      <Image bordered rounded style={{width:100,height:100}}/>
      <Button type="secondary" label="hey" onClick={() => alert('hey')} rounded size="lg"/>
      <Editor value={value} onChange={console.error}/>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
