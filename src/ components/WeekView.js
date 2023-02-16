import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import "./WeekView.css"
import WeekList from "./WeekList.js"


function WeekView() {

  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
  }

  return (
    <div className="week">
      <Button variant="contained" className="back" onClick={goBack}>Back</Button>
			<h1 className="weekTitle">---Date Range Here---</h1>
			<div className="block"><WeekList /></div>
    </div>
  );
}

export default WeekView;
