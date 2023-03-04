import React from "react";
import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";
import "./SearchPage.css";
import { useStateValue } from "../../context/StateProvider";
import useGoogleSearch from "../../services/useGoogleSearch";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  console.log(data);
  return (
    <div className="searchPage">
      <div className="sP_header">
        <Link to="/">
          <img
            className="sP_logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="sP_headerBody">
          <Search hideButtons />
          <div className="sP_options">
            <div className="sP_optionsLeft">
              <div className="sP_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="sP_option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="sP_option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="sP_option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="sP_option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="sP_option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="sP_optionsRight">
              <div className="sP_option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="sP_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="results">
          <p className="resultsCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <a className="resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
