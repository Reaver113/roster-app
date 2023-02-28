import "./App.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Navigate} from "react-router-dom"
import DashboardContainer from "./ components/DashboardContainer";
import RosterContainer from "./ components/RosterContainer";
import Background from "./ components/Background";
import EditRoster from "./ components/EditRoster";
import EditContainer from "./ components/EditContainer";
import LoginContainer from "./ components/LoginContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DashboardContainer/>} exact />
          <Route path="/roster/:id" element={<RosterContainer/>} />
          <Route path="/roster/edit/:id" element={<EditContainer/>} />
          <Route path="/login" element={<LoginContainer/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      <Background />
      </Router>
    </div>
  );
}

export default App;
