import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import NextLink from 'next/link';
import Image from 'next/image';
import Grid from '@mui/material/Divider';
import Layout from "../Layout";
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Loading from "../loading/loading";
import useStyles from './style';
import Typography from '@mui/material/Typography';
import {GoCalendar} from "react-icons/go";
import No from '../../public/No.jpg'
import Footer from "../footer/footer";



const IMAGE_API = "https://image.tmdb.org/t/p/w1280";


function MovieInfo({ Data }) {
  const [movies, setMovies] = useState([]);
  const [genre, setGener] = useState([Data.genres]);
  const [showIntro, setShowIntro] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();
  const [imageError, setImageError] = useState(false);
  const img= `https://image.tmdb.org/t/p/w1280/${Data.poster_path}`

  return (
  <>
   <Head>
       <title>{Data.title}</title>
       <meta name="description" content="Generated by create next app" />
       <link rel="icon" href="/favicon.ico" />
       <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>  
    </Head> 

  <Layout >   
  
  <div className={classes.detailMovie} >
      
  <img src={IMAGE_API + Data.backdrop_path}  className={classes.backGround}/>
    <div className={classes.grid}>

    <div className={classes.contImg}>
        
    {Data.poster_path ? (
            <img src={IMAGE_API + Data.poster_path} alt={Data.title} className={classes.img}/>
        ) : (
        <img src="no-cover.png" alt={Data.title} />
         )}
       </div> 
       <div className={classes.discMovie}>
       <Typography variant="h3" gutterBottom component="div">
          {Data.title}
      </Typography>
      <div className={classes.inf}>
      
      {Object.keys(genre).map((key) => {
         return (
           <div key={key} className={classes.infGenre}>
              {genre[key||null].map((genre) => {
                return (
                 <Typography  variant="h6" gutterBottom component="div"  key={genre.id} style={{marginLeft: '7%',display: 'block ruby'}}>
                  {genre.name}
                  </Typography>
                )
               })}
           </div>
         )
       })}
       <Typography variant="h6" gutterBottom component="div" className={classes.date}>
       <GoCalendar style={{color: 'rgb(185, 75, 22'}}/>{Data.release_date.split("-")[0]}
      </Typography>
       </div>
      <Typography variant="subtitle1" gutterBottom component="div" style={{marginTop: '1%'}}>
      {Data.overview}
      </Typography>
          
       </div>
       
    </div>
    
  </div>
  <Footer />
  </Layout>  
 
  </>
)
}

export default MovieInfo;
