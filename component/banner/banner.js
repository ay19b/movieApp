import React, { useState, useEffect } from "react";
import axios from "axios";
import useStyles from './style';
import NextLink from 'next/link';
import Image from "next/image";
import nocover from '../../public/nocover.jpg'
import {MdDoubleArrow} from "react-icons/md";
import Button from '@mui/material/Button';


function Banner() {
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
         <h1 className={classes.title}>{data.name || data.title}</h1>
         <p className={classes.disc}>{truncateString(data?.overview, 200)}</p>
         <NextLink href={`movie/${data.id}`} passHref>
           <Button variant="contained" endIcon={<MdDoubleArrow />}>
             Details
           </Button>
         </NextLink>
      </div> 
    </div>
    </>
  )
}

export default Banner