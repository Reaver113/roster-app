import React, { useReducer } from 'react';
import "./App.css"
import stateReducer, { stateContext } from "./State/stateReducer.js"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Navigate} from "react-router-dom"
import DashboardContainer from "./ components/DashboardContainer";
import RosterContainer from "./ components/RosterContainer";
import Background from "./ components/Background";
import EditContainer from "./ components/EditContainer";
import LoginContainer from "./ components/LoginContainer";


function App() {

  const [store, dispatch] = useReducer(stateReducer, {
    users: [],
  })


  return (
    <div className="App">
      <Router>
      <stateContext.Provider value={{...store, dispatch}}>
        <Routes>
          <Route path="/" element={<DashboardContainer/>} exact />
          <Route path="/roster/:id" element={<RosterContainer/>} />
          <Route path="/roster/edit/:id" element={<EditContainer/>} />
          <Route path="/login" element={<LoginContainer/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        </stateContext.Provider>
      <Background />
      </Router>
    </div>
  );
}

export default App;
