import React, { useState, useEffect } from "react";
import Movie from "./movie";
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useStyles from './style';
import useMediaQuery from '@mui/material/useMediaQuery'
import {RiArrowDropRightLine} from "react-icons/ri"
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import { setCookie,getCookie} from 'cookies-next';



export default function Movies({movies,genre}) {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:500px)');

  return (
    <div className={classes.movies}>
       <Container maxWidth="xl">
         <div className={classes.headProdRight}>
            <Typography variant='h5'>{genre}</Typography>
            <Typography variant='h3'className={classes.icon}><RiArrowDropRightLine /></Typography>
          </div>
        
          <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
              
              {movies.length > 0 &&
                movies.map((movie) => 
                <SwiperSlide key={movie.id} style={{width:matches?'12rem':'15rem'}}>
                    <Movie key={movie.id} {...movie} lin={`movie/${movie.id}`}/>
                </SwiperSlide>
                )}

            </Swiper>
            <Divider className={classes.divider}/>  
       </Container>     
    </div>
  )
}