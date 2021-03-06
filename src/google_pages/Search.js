import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Search({ hideButtons = false }) {
    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState("")
    const history = useHistory()

    const search = (e) => {
        e.preventDefault();
        console.log("You did it man >>", input)
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        history.push("/search")
    }

    return (
        <form className="search">
            <div className="search_data">
                <SearchIcon className="inputIcon" />        
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />   
            </div>
            {!hideButtons ? (
                <div className="buttons">
                        <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                        <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ):  (
                <div className="buttons">
                    <Button className="buttonsHidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button className="buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
                </div>
            )}
        </form>

    )
}

export default Search
