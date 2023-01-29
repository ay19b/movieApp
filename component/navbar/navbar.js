import React, { useState, useEffect,useContext } from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import {HiSearch,HiMenu} from "react-icons/hi";
import useStyles from './style';
import Logo from '../../public/logo.png'
import NextLink from 'next/link'
import Image from 'next/image';
import { useRouter } from "next/router";
import styles from '../../styles/nav.module.css'
import Container from '@mui/material/Container';
import { SearchContext } from "../../context/searchContext"; 
import { bodyStreamToNodeStream } from "next/dist/server/body-streams";




function Navbar({navNormal,navActive}) {
  const classes = useStyles();
  const router = useRouter();
  const {open, setOpen } = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [showLinks, setShowLinks] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [nav, setNav] = useState(false);
  const [normal, setNormal] = useState(`styles.${navNormal}`);
  const [act, setAct] = useState(navActive);
  const [showIntro, setShowIntro] = useState(undefined);
  const [isLoading, setIsLoading] = useState(undefined);
  const { isOpen, toggleMenu } = useContext(SearchContext);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  
 const changeBackground=()=>{
    if(window.scrollY>=5){
      setNavbar(true)
      setNav(false)
    }else{
      setNavbar(false)
      setNav(true)
    }
  }

const handleSubmit=(e)=>{
  e.preventDefault();
  setIsSearch(false);
  setTimeout(() => {
    setSearchText('')
  }, 1000);
};


useEffect(() => {
  handleSubmit
  changeBackground()
  window.addEventListener('scroll',changeBackground) 
  if(showLinks){
    setNavbar(false)
  }
  document.body.style.overflow = isOpen?"hidden":''
})

  
 
  return (
    <nav className={!navbar?styles.navbar:styles.active}>
      <Container maxWidth="xl" minWidth="sm">
      <Grid container spacing={2} className={!navbar?styles.listNav: styles.listNavActive}>
        <Grid item xs={3} md={2} sm={2} className={styles.leftSide}>
          <a href="/" >
               <Image src={Logo} className={styles.logo}/>
          </a>
        </Grid>
        <Grid item xs={3} md={6} sm={7}>
         <ul className={collapsed?styles.list: styles.listActive}>
          <li onClick={toggleNavbar}>HOME</li>
          <li onClick={toggleNavbar}>MOVIES</li>
          <li onClick={toggleNavbar}>TV SHOWS</li>
          <li onClick={toggleNavbar}>GENRE</li>
          <li onClick={toggleNavbar}>BLOG</li>
         </ul>
          
        </Grid>
        <Grid item xs={3} md={3} sm={3} className={styles.rightSide}>
          <HiSearch style={{color:'white',fontSize: '1.4rem',cursor: 'pointer'}} onClick={toggleMenu}/>  
          <Button className={styles.btnSng}>Sign in</Button>
          <HiMenu className={styles.menu} onClick={toggleNavbar}/>
        </Grid>
       </Grid>
       </Container>
    </nav>

  )
}

export default Navbar