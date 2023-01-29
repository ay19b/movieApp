import React, { useState, useEffect,useContext } from "react";
import Movie from './searchMovie'
import Container from '@mui/material/Container';
import Layout from '../Layout';
import Head from "next/head";
import { makeStyles } from '@mui/styles';
import useStyles from "./style";
import Typography from '@mui/material/Typography';
import Loading from "../loading/loading";
import Footer from "../footer/footer";
import { SearchContext } from "../../context/searchContext"; 


function Search({data,title}) {
    const classes = useStyles();
    const { isOpen, toggleMenu } = useContext(SearchContext);
    const [search, setSearch] = useState();
    const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    setSearch([data])
    setTimeout(() => {
      setLoading(false);
    }, 2000);

  }, [search]);

  return (
    
      <>
           <div className={classes.detailSearch}>
           <div className={classes.List}>
             {data.map((movie) => <Movie key={movie.id} {...movie} lin={`/movie/${movie.id}`}/>)}
            </div>
            </div> 
    
         
      </>
       
    
)
}

export default Search;



