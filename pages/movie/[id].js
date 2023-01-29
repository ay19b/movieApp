import React, { useState, useEffect,useContext } from "react";
import { useRouter } from "next/router";
import Head from 'next/head';
import Loading from "../../component/loading/loading";
import MovieInfo from "../../component/movieInfo/movieInfo";
import { SearchContext } from "../../context/searchContext"; 


export async function getServerSideProps(context) {
	const { id } = context.query;
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e210177d339cffde80c7bde18b504e93`);
	const data =await res.json();
  	
    return {
      props: {
		  movie:data
	  },
  }
}

function DetailMovie({movie}) {
  const [movies, setMovies] = useState();
  const [title, setTitle] = useState();
  const [showIntro, setShowIntro] = useState(undefined);
  const [isLoading, setIsLoading] = useState(undefined);
  const { isOpen, toggleMenu } = useContext(SearchContext);




    useEffect(() => {
      setTimeout(() => {
        setIsLoading(true)
        setTimeout(() => {
          setShowIntro(true);
          setMovies(movie)
          setTitle(movies?.title)
        }, 1000);
      }, 2000)    
    },[]);


  return (
    <div className="Detail">
    {!showIntro ?(
       <>
       {!isLoading ?(
          <Loading title={movies?movies?.title:"molla"}/>
        ):(
          <Loading title={movies?movies?.title:"molla"}/>
        )
        }
       </>
     ):(
      <>
        <Head>
           <title>{movies?.title}</title>
        </Head> 
        <>   
        <MovieInfo Data={movie}/>
        </>  

      </>
     )
   }
     </div>
)
}



export default DetailMovie;