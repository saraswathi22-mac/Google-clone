import React from 'react'
import "./DropDown.css"

const Dropdown = ({show}) => {
  return (
    <div className={`${show ? "block" : "hidden"} dropdown`}>
        <div className="dropdown-content">
        <button>Maps</button>
      </div>
      <div className="dropdown-content">
        <button>Books</button>
      </div>
      <div className="dropdown-content">
        <button>Flights</button>
      </div>
      <div className="dropdown-content">
        <button>Finance</button>
      </div>
    </div>
  )
}

export default Dropdown