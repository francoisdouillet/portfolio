import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

const BackToHome = () => {
  return (
    <div className="utils">
      <Link to="/">
        <IconButton sx={{ color: "white" }}>
          <ArrowBackIcon sx={{ fontSize: 50 }} />
        </IconButton>
      </Link>
    </div>
  );
};

export default BackToHome;
