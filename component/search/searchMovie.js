import React, { useState, useEffect,useContext } from "react";
import useStyles from './style';
import {BsFillStarFill,BsFillPlayFill} from "react-icons/bs";
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import Image from "next/image";
import No from '../../public/No.jpg'
import Loading from "../loading/loading";
import { SearchContext } from "../../context/searchContext"; 


const Movie = ({ title, name,poster_path,release_date,vote_average,lin}) => {
  const img= `https://image.tmdb.org/t/p/w1280/${poster_path}`
  const classes = useStyles();
  const [imageError, setImageError] = useState(false);
  const { isOpen, toggleMenu } = useContext(SearchContext);

  return (

  <div className={classes.product} >
    <a href={lin}>
    <div className={classes.playMovie}>
      
       <Image
          src={imageError ? No : img}
          onError={() => setImageError(true)}
          alt={title}
          className={classes.img}
          width={350}
          height={440}
        />
      </div>
      <div >
        <Typography variant='h6' className={classes.title}>{title || name}</Typography>
        <div className={classes.infMovie}>
        <Typography><BsFillStarFill className={classes.star} style={{color:'red'}}/>{vote_average.toFixed(1)} </Typography>
        
        </div>
      </div>

      </a>
  </div>

  );
};

export default Movie;