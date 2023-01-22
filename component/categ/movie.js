import React, { useState } from 'react';
import useStyles from './style';
import {BsFillStarFill} from "react-icons/bs";
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import Image from "next/image";




const Movie = ({ title, name,poster_path,vote_average,release_date,lin}) => {
  const IMAGE_API = "https://image.tmdb.org/t/p/w1280";
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  
  return (
  <NextLink href={lin} passHref>
    <div className={classes.product}>
      <div className={classes.playMovie}>
       <Image
          src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}
          width={500}
          height={670}
          alt={poster_path}
      />
      
      </div>
      <div className="movie-info">
        <Typography variant='h6' className={classes.title}>{title || name}</Typography>
        <div className={classes.infMovie}>
        <Typography><BsFillStarFill className={classes.star}/>{vote_average.toFixed(1)} </Typography>
        <Typography variant="h6" gutterBottom component="div" style={{color:'rgb(185, 75, 22',marginBottom:'none'}}>
          {release_date.split("-")[0]}
        </Typography>
        </div>
      </div>

       
    </div>
  </NextLink>
  );
};

export default Movie;