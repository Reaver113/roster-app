import "./App.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Navigate} from "react-router-dom"
import DashboardContainer from "./ components/DashboardContainer";
import WeekView from "./ components/WeekView";
import DayView from "./ components/DayView";
import Background from "./ components/Background";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DashboardContainer/>} exact />
          <Route path="*" element={<Navigate to="/"/>} />
          <Route path="/roster/:id" element={<DayView/>} />
        </Routes>
      <Background />
      </Router>
    </div>
  );
}

export default App;
