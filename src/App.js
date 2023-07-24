import logo from './logo.svg';
import './App.css';
import Navbar from './MyComponents/Navbar';
import TextForm from './MyComponents/TextForm';
import About from './MyComponents/About';
import Alert from './MyComponents/Alert';
import react, { useState } from 'react';
import { BrowserRouter, RouterProvider, Route, Routes, Link } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }




  return (
    <>
      <BrowserRouter basename='/TextUtils-React'>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter & many more" mode={mode} />} />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter >
    </>
  )
}

export default App;
