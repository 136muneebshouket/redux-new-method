
import './App.css';
import React,{useState} from 'react'

import { BrowserRouter,Routes, Route } from "react-router-dom";
import Form from './component/Form'
import Parentcmponent from './component/Parentcmpnent';
import Liinks from './component/Liinks';
import Pajes from './component/Pajes';



function App() {

  const [VALUE, setVALUE] = useState("");

  const pull_data = (data) => {
    console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
    setVALUE(data)
  }
  

  return (
  <>
     <BrowserRouter> 
   <div>
    <Liinks   func={pull_data}/>
    </div>
   
  <Form/>

  <br />
  <br />
  <br />
  <br />
  <br />
  <Parentcmponent/>

  <Routes>
      <Route element={<Pajes value={VALUE}/>} path="/page"></Route>
  </Routes>

  </BrowserRouter>
  </>
  );
}

export default App;
