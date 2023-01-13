import { useState } from 'react';
import './App.css';
import TextEditor from './components/TextEditor';
import Header from './components/Header';

function App() {
  const [value, setValue] = useState('')
  return (
    <div className="App">
      <Header/>
      <div className="row">
        <div className="col-md-6" style={{margin: 'auto', marginTop: '50px'}}>
          <div style={{textAlign: 'center'}}>
            <h3>Type in the box</h3>
          </div>
          <TextEditor setValue={setValue}/>
          <br/>
          <div>{value}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
