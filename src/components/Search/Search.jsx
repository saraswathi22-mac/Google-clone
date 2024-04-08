import React, { useState } from "react";
import "./Search.css";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../reducer/reducer";
import AddIcon from "@mui/icons-material/Add";

function Search({ hideButtons, inputValue }) {
  const [{ term }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [termInput, setTermInput] = useState(inputValue);
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: !inputValue ? input : termInput,
    });
    navigate("/search");
  };

  return (
    <form className="search" onSubmit={search}>
      <div className="search_data">
        {!inputValue ? (
          <input value={input} onChange={(e) => setInput(e.target.value)} />
        ) : (
          <input
            value={termInput}
            onChange={(e) => setTermInput(e.target.value)}
          />
        )}
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="buttons shortcuts">
          <Button variant="outlined">
            <AddIcon className="addIcon" />
            <div className="addShortcuts">Add Shortcuts</div>
          </Button>
        </div>
      ) : (
        <Button variant="outlined" className="buttonsHidden">
          Add Shortcuts
        </Button>
      )}
    </form>
  );
}

export default Search;
