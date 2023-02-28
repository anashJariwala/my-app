import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import Textform from './Components/Textform';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import React, { useState } from 'react'

function App() {
  
  
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
    }

    const [mode, setmode] = useState('light');
  const toggleMode = ()=>{
    if (mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor ='grey';
      showAlert("Dark mode has been enabled", "success");

    }
    
    else{
      setmode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Lightmode has been enabled", "success");

      


    }
  }
  


  return (
    <>
    <Router>
<Navbar title="React Learn" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
  
  <Routes>
  <Route exact path="/about" element={< About/>}> </Route>
  <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter Your Name" mode={mode}/>
}> </Route>
          

         
        </Routes>
      </div>
      </Router>
      



    </>

  );
}

export default App;
