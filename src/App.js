import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Navigate} from "react-router-dom"
import Dashboard from "./ components/Dashboard";
import WeekView from "./ components/WeekView";
import DayView from "./ components/DayView";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>} exact />
          <Route path="*" element={<Navigate to="/"/>} />
          <Route path="/Week" element={<WeekView/>} exact />
          <Route path="/Day" element={<DayView/>} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
