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
    const [showIntro, setShowIntro] = useState(undefined);
    const [isLoading, setIsLoading] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(true)
          setTimeout(() => {
            setShowIntro(true);
          }, 1000);
        }, 4500)
      },[]);




      if (data.length=== 0) {
        return (
          <>
          <Layout>
          <Container>
           <div className={classes.notFound}>
           
              <Typography variant="h4" gutterBottom component="div" className={classes.text}>
              No results found for{" "}
                <span className=" underline">{title}</span> are you sure you
                typed it correctly?
            </Typography>
          </div> 
          <Footer />
          </Container>
          
          </Layout>
        </>
        );
      }

 
  return (
    <>
      <Layout>
      <Container style={{display:'flex'}}>
          <div className={classes.detailSearch}>
           <div>
             <h2 className={classes.text}>Search results for: {title}</h2>
   
           </div>
           <div className={classes.List}>
             {
               data.map((movie) => <Movie key={movie.id} {...movie} lin={`/movie/${movie.id}`}/>)}
  
            </div>
  

            </div> 
        </Container>
         <Footer />
       </Layout>
      </>  
)
}

export default Search;



