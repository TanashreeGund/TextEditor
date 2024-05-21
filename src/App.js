import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react'

//import {
// BrowserRouter as Router,
//  Routes,
//  Route
// from "react-router-dom";*/}


function App() {
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      setbtnText("Light");
      document.body.style.background='#042743';
      showAlert("Dark Mode Has Been Enabled","success");
      document.title="TextUtils-DarkMode";
    }
    else{
      setMode("light");
      setbtnText("Dark");
      document.body.style.background='white';
      showAlert("Light Mode Has Been Enabled","success");
      document.title="TextUtils-LightMode";
    }
  }

  const colorChange=(color)=>{
    if(color==="purple" &&  mode==="dark")
    document.body.style.background='rgb(70 44 70';
    else if(color==="green" && mode==="dark")
    document.body.style.background='#10675a';
  }
  const [mode, setMode] = useState("light")
  const [btnText, setbtnText] = useState("DarkMode")
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
    {/*<Router>
    <Navbar title="Tanashree_Blogs" aboutText="About Us" mode={mode} btnText={btnText} toggleMode={toggleMode} colorChange={colorChange}/>
    <Alert alert={alert}/>
    <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>  
          </Route>
          <Route exact path="/" element={<Textform heading="Enter the Text To Analyze" mode={mode} showAlert={showAlert}/>}>
          </Route>
        </Routes>
    </div>
  </Router>*/}
    <Navbar title="Tanashree_Blogs" aboutText="About Us" mode={mode} btnText={btnText} toggleMode={toggleMode} colorChange={colorChange}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Textform heading="Enter the Text To Analyze" mode={mode} showAlert={showAlert}/>
    </div>
    </>
    
  );
}

export default App;
