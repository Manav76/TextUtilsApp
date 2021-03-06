import './App.css';
import React, { useState } from "react";
import Navbar from './components/Navbar';
// import About from './components/About';
import Textform from './components/textform';
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert , setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);

    },2500 );
  } 

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled" , "success");
    
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
     showAlert("Light Mode has been enabled" , "success");
    }
  }
  return (
    <>
    <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode} />
    <Alert  alert = {alert} />
    <div className = "container my-3">
      <Textform heading="Enter the text to analyze below" mode = {mode} toggleMode = {toggleMode}  />
    </div>
  </>
  );
}


export default App;
