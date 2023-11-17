import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "../../components/Search/Search";

function Home() {
  return (
    <div className="home">
      <div className="header">
        <div></div>
        <div className="right">
          <Link to="/">Gmail</Link>
          <Link to="/">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="body">
        <img
          src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="search_input">
          <Search hideButtons={false} />
        </div>
      </div>
    </div>
  );
}

export default Home;
