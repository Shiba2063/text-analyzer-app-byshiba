import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route ,
  Navigate
} from "react-router-dom";

import About from './Components/About';

function App() {

  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {

    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "#0D1117";

      showAlert("Dark mode has been enabled", "success");
    }

    else {
      setmode('light');
      document.body.style.backgroundColor = "white";

      showAlert("Light mode has been enabled", "success");
    }
  };

  return (

    <Router>

      <Navbar
        title="Text Counter"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <div className="container my-3">

        <Routes>

          <Route
            path="/about"
            element={<About mode={mode} />}
          />

          <Route
            path="/home"
            element={
              <TextForm
                showAlert={showAlert}
                mode={mode}
              />
            }
          />
          <Route path="/" element={<Navigate to="/home" />} />

        </Routes>

      </div>

    </Router>

  );
}

export default App;





