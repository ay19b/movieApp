import React, { useState, useEffect } from "react";
import axios from "axios";
import useStyles from './style';
import NextLink from 'next/link';
import Image from "next/image";
import nocover from '../../public/nocover.jpg'
import {MdDoubleArrow} from "react-icons/md";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


export async function getServerSideProps() {
      const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=e210177d339cffde80c7bde18b504e93&language=en-US')
      res.then((response) => response.json())
       .then((data) => {
          localStorage.setItem('data',data)
       });
  
	
    return {
      props: {
		 bann:localStorage.getItem('data')
	  },
  }
}

function Banner({bann}) {
  console.log(bann)
  const [data, setData] = useState({});
  const classes = useStyles();
  const IMAGE_API = "https://image.tmdb.org/t/p/w1280";
  const img =IMAGE_API + data.poster_path;
  const truncateString = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string
}
  
  useEffect(() => {
    const RandNum = Math.floor(Math.random() * 20);
    axios.get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e210177d339cffde80c7bde18b504e93"
      )
      .then((res) => {
        const data = res.data;
        setData(data.results[RandNum]);
      });
  }, []);


   
   
  
  return (
    <>
    
    <div className={classes.banner} style={{ backgroundImage:`url(${img})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover' }}>
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