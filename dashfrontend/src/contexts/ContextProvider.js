import React, { createContext, useContext, useState, useEffect } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  
  const [currentColor] = useState('orange');
  const [activeMenu, setActiveMenu] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  
  

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ currentColor, activeMenu, setActiveMenu, isAuth, setIsAuth}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
