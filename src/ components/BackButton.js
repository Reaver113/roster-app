import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./BackButton.css"

function BackButton() {

  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
  }

  return (
    <Button variant="contained" className="BackButton" startIcon={<ArrowBackIcon />}onClick={goBack}>Back</Button>
  );
}

export default BackButton;
