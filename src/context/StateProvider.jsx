import React, { createContext, useContext, useReducer, useEffect, useState } from "react";

export const StateContext = createContext();

const localState = JSON.parse(localStorage.getItem("term"));

export const StateProvider = ({ reducer, initialState, children }) => {
  const [term, dispatch] = useReducer(reducer, localState || initialState);

  useEffect(() => {
    localStorage.setItem("term", JSON.stringify(term));
  }, [term]);

  return(
  <StateContext.Provider value={{term, dispatch}}>
    {children}
  </StateContext.Provider>)
};

export const useStateValue = () => useContext(StateContext);
