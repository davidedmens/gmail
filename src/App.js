import './App.css';
import React from "react";
import Login from "./Login";
import Password from "./Password";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/login" element={
          <React.Fragment>
            <Login/>
          </React.Fragment>
        }/>
        <Route path="/verify" element={
          <React.Fragment>
            <Password/>
          </React.Fragment>
        }/>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
