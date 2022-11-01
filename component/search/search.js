import React, { useEffect, useState } from "react";
import Movie from './searchMovie'
import Container from '@mui/material/Container';
import Layout from '../Layout';
import Head from "next/head";
import { makeStyles } from '@mui/styles';
import useStyles from "./style";
import Typography from '@mui/material/Typography';
import Loading from "../loading/loading";
import Footer from "../footer/footer";

function Search({data,title}) {
    const classes = useStyles();
    const [search, setSearch] = useState([data]);
    const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);



      if (data.length=== 0) {
        return (
          <>
          <Container>
           <div className={classes.notFound}>
             <Typography variant="h4" gutterBottom component="div" className={classes.text}>
              No results found for{" "}
                <span className={classes.searchText}>{title}</span> are you sure you
                typed it correctly?
              </Typography>
           
          </div> 
          <Footer />
          </Container>
         </>
        );
      }

 
  return (
    
      <>
           <div className={classes.detailSearch}>
           <div>
             <h2 className={classes.text}>Search results for: {title}</h2>
   
           </div>
           <div className={classes.List}>
             {
               data.map((movie) => <Movie key={movie.id} {...movie} lin={`/movie/${movie.id}`}/>)}
  
            </div>
            </div> 
    
         
            </>
       
    
)
}

export default Search;



