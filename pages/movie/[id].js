import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from 'next/head';
import Loading from "../../component/loading/loading";
import MovieInfo from "../../component/movieInfo/movieInfo";


export async function getServerSideProps(context) {
	const { id } = context.query;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e210177d339cffde80c7bde18b504e93`);
	const data =await res.json();
	
    return {
      props: {
		 mov:data
	  },
  }
}

function DetailMovie({mov}) {
  const [movies, setMovies] = useState(mov);
  const [title, setTitle] = useState(movies.title);
  const [showIntro, setShowIntro] = useState(undefined);
  const [isLoading, setIsLoading] = useState(undefined);



  

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(true)
        setTimeout(() => {
          setShowIntro(true);
        }, 1000);
      }, 2000)
    },[]);

console.log(movies)
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