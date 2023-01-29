import { createContext,useState, useEffect } from "react";


export const SearchContext = createContext({
  isOpen: false,
  toggleMenu: () => {}
});


export const SearchContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SearchContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </SearchContext.Provider>
  );
};