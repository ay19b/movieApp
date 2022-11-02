import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from 'next/head';
import Loading from "../../component/loading/loading";
import MovieInfo from "../../component/movieInfo/movieInfo";



function DetailMovie() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState(movies.title);
  const [showIntro, setShowIntro] = useState(undefined);
  const [isLoading, setIsLoading] = useState(undefined);
  const router = useRouter();
  const  id  = router.query.id;
  const movieId =
  "https://api.themoviedb.org/3/movie/"+id+"?api_key=e210177d339cffde80c7bde18b504e93";


  const getMovies = (Id) => {
      fetch(Id)
      .then((res) => res.json())
      .then((data) => setMovies(data));
    };

    useEffect(() => {
      getMovies(movieId);
    });

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(true)
        setTimeout(() => {
          setShowIntro(true);
        }, 1000);
      }, 2500)
    },[]);


  return (
    <div className="Detail">
    {!showIntro ?(
       <>
       {!isLoading ?(
          <Loading title={movies.title}/>
        ):(
          <Loading title={movies.title}/>
        )
        }
       </>
     ):(
      <>
        <Head>
           <title>{movies.title}</title>
        </Head> 
        <>   
          <MovieInfo Data={movies}/>
        </>  

      </>
     )
   }
     </div>
)
}



export default DetailMovie;