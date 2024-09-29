
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {  useState } from 'react'
import About from  './components/About';
import Alert from './components/Alert';
import{BrowserRouter as Router,Routes,Route,}from "react-router-dom";

 
function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type:type
     })       
     setTimeout(() => {
      setAlert(null)
     }, 2000);    
  }

  // const [searchText, setSearchText] = useState('');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")


    }
  }
//   const handleSearch = (text) => {
//     setSearchText(text);
// };

  return (
    <>
    <Router>
  <Navbar title="TextUtils2" aboutText="About textutils"  mode={mode} toggleMode={toggleMode}/>           { /*using this u can change the title of navbar and about text and u can  pass more */}
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>

        <Route path="/about"  element={  <About />}/>
        
        <Route exact path="/"  element={<TextForm showAlert={showAlert} heading="Enter text below"            mode={mode}/>}/>
       
      </Routes>
      
        </div>
        </Router>
    </>
  );
}

export default App;
