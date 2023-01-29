import React, { useEffect, useState ,Suspense} from "react";
import Container from '@mui/material/Container';
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../component/Layout";
import useStyles from '../../component/search/style';
import Loading from "../../component/loading/loading";
import Search from "../../component/search/search";
import Footer from "../../component/footer/footer";
import Searchpart from "../../component/navbar/searchpart";



export async function getServerSideProps(ctx) {
	var search = ctx.query.searchTerm;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e210177d339cffde80c7bde18b504e93&language=en-US&query=${search}&page=1&include_adult=false`);
	const data =await res.json();
	
    return {
      props: {
		 searchMovies:data
	  },
  }
}

function SearchPage({searchMovies}) {
    const classes = useStyles();
    const router = useRouter();
    const SearchTerm = router.query.searchTerm;
    const [loading, setLoading] = useState(false);


      useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, []);


  return (
    <div className="search">
       <Head>
         <title>Showing Results for - {SearchTerm}</title>
       </Head>  

   </div>
  )
}

export default SearchPage