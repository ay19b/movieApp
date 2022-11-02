import React, { useState, useEffect } from "react";
import useStyles from './style';
import {BsFillStarFill,BsFillPlayFill} from "react-icons/bs";
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import Image from "next/image";
import No from '../../public/No.jpg'
import Loading from "../loading/loading";



const Movie = ({ title, name,poster_path,release_date,vote_average,lin}) => {
  const img= `https://image.tmdb.org/t/p/w1280/${poster_path}`
  const classes = useStyles();
  const [imageError, setImageError] = useState(false);
  

  return (
    <NextLink href={lin} passHref>
    <div className={classes.product}>
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

       
    </div>
  </NextLink>
  );
};

export default Movie;