import React, { useState, useEffect,useContext } from "react";
import {MdOutlineCancel,MdCancel} from 'react-icons/md'
import {HiSearch} from "react-icons/hi";
import styles from '../../styles/nav.module.css'
import { SearchContext } from "../../context/searchContext"; 
import { useRouter } from "next/router";
import Search from "../search/search";
import axios from "axios";
import {ClipLoader} from 'react-spinners';






export default function Searchpart() {
  const router = useRouter();
  const { isOpen, toggleMenu } = useContext(SearchContext);
  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true)


  const handleSubmit=async e=>{
    e.preventDefault();
    setIsSearch(false);
    setTimeout(() => {
      setSearchText('')
    }, 1000);
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e210177d339cffde80c7bde18b504e93&language=en-US&query=${searchText}&page=1&include_adult=false`);
	  const data =await res.json();
    setMovies(data.results)
  }

  
    


    const getMovieDetails = async (API) => {
      setIsSearch(false);
      setTimeout(() => {
        setSearchText('')
      }, 1000);
      setLoading(true);
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e210177d339cffde80c7bde18b504e93&language=en-US&query=${searchText}&page=1&include_adult=false`);
        const data = await response.json();
        setMovies(data.results)
      } catch (error) {
        console.log('Error', error);
      } finally {
        setLoading(false);
      }
    };
    
    useEffect(() => {
      getMovieDetails
    }, [searchText]);


  return (
    <div className={isOpen?styles.searchPart:styles.hiddenSearch}>
        <div className={styles.Bar}>
            <div className={styles.inputSection}>
               <HiSearch className={styles.icon}/>
               <form onSubmit={handleSubmit}>
               <input 
                placeholder='Enter Keywords...'
                className={styles.input}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                /> 
               </form>          
            </div>
            <MdCancel className={styles.iconCancel} onClick={toggleMenu}/>
        </div>

        {loading?<Search data={movies} title={searchText}/>:(<ClipLoader size={60} color={"red"} />)}

    </div>
  )
}
