import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from '@mui/material/Container';
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../component/Layout";
import Movie from "../../component/search/searchMovie";
import useStyles from '../../component/search/style';
import Loading from "../../component/loading/loading";
import Search from "../../component/search/search";




function SearchPage() {
  const classes = useStyles();
    const router = useRouter();
    const SearchTerm = router.query.searchTerm;
    const [search, setSearch] = useState([]);
    const [showIntro, setShowIntro] = useState(undefined);
    const [isLoading, setIsLoading] = useState(undefined);
    

      const getMovies = (Id) => {
        fetch(Id)
        .then((res) => res.json())
        .then((data) => setSearch(data.results));
      };
  
      useEffect(() => {
        getMovies(`https://api.themoviedb.org/3/search/movie?api_key=e210177d339cffde80c7bde18b504e93&language=en-US&query=${SearchTerm}&page=1&include_adult=false`);
        
      });
      useEffect(() => {
        setTimeout(() => {
          setIsLoading(true)
          setTimeout(() => {
            setShowIntro(true);
          }, 1000);
        }, 4500)
      },[]);



      
  return (
    <>
    <Head>
      <title>Showing Results for - {SearchTerm}</title>
    </Head>
    <>
    <Search data={search} title={SearchTerm} />
    </> 

  </>
  )
}

export default SearchPage