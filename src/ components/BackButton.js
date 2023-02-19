import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import "./BackButton.css"

function BackButton() {

  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);

  }
  return (
    <Button variant="contained" className="BackButton" onClick={goBack}>Back</Button>
  );
}

export default BackButton;
