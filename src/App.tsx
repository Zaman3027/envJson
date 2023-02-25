import React, { useState } from 'react';
import './App.css';
import {convertJsonToENV,convertENVtoJSON} from './helper/converter'

function App() {
  const[input,setInput] =  useState<string>("");
  const[output,setOutput] =  useState<string>("");

  const handelConvertJsonToEnv = ()=>{
    const convertedENV:string = convertJsonToENV(input);
    setOutput(convertedENV)
  }

  const handelConvertENVtoJSON= ()=>{
    const convertedENV:string = convertENVtoJSON(input);
    setOutput(convertedENV)
  }

  return (
    <div>
      <div className="codeEditorCon">
        <div className='textEditorCon'>
          <p>INPUT</p>
          <textarea className='codeEditor'
            value={input}
            onChange={(e)=>setInput(e.target.value)}
          />
        </div>
        <div className='textEditorCon'>
          <p>OUTPUT</p>
          <textarea className='codeEditor'
            value={output}
          />
        </div>
      </div>
      <div className='buttonCon' >
        <button className='funButton'
          onClick={handelConvertJsonToEnv}
        >Convert Json to ENV</button>
        <button className='funButton' 
          onClick={handelConvertENVtoJSON}
        >Convert ENV to JSON</button>
      </div>
      
    </div>
  );
}

export default App;
