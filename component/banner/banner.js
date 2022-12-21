import React, { useState, useEffect } from "react";
import axios from "axios";
import useStyles from './style';
import NextLink from 'next/link';
import Image from "next/image";
import nocover from '../../public/nocover.jpg'
import {MdDoubleArrow} from "react-icons/md";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';



function Banner({movie}) {
  const [data, setData] = useState(movie);
  const classes = useStyles();
  const truncateString = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string
}
  
  useEffect(() => {
    const RandNum = Math.floor(Math.random() * 20);
    setData(movie[RandNum]);
  }, []);

  return (
    <>
    
    <div className={classes.banner} style={{ backgroundImage:`url(https://image.tmdb.org/t/p/w1280${data.poster_path})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover' }}>
      <div className={classes.grid}>
	    <Container maxWidth="xl" minWidth="sm"> 
         <h1 className={classes.title}>{data.name || data.title}</h1>
         <p className={classes.disc}>{truncateString(data?.overview, 200)}</p>
         <NextLink href={`movie/${data.id}`} passHref>
           <Button variant="contained" className={classes.btn} endIcon={<MdDoubleArrow />}>
             Details
           </Button>
         </NextLink>
		  </Container> 
      </div> 
    </div>
    </>
  )
}

export default Banner