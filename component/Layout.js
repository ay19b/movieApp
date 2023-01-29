import React, { useEffect, useState, useContext } from 'react';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './footer/footer' 
import Navbar from './navbar/navbar' 
import Container from '@mui/material/Container';
import Searchpart from './navbar/searchpart';
import { SearchContext } from "../context/searchContext"; 

export default function Layout({children,nav}) {
  const [searchTerm, setSearchTerm] = useState("");
  const { isOpen, toggleMenu } = useContext(SearchContext);


  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <>
      <CssBaseline />
      <Navbar searchTerm={searchTerm} handleOnChange={handleOnChange} nav={nav} />
      <Searchpart />
           {children}

    </>
  );
}