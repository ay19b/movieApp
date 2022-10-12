import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import {HiSearch} from "react-icons/hi";
import useStyles from './style';
import Logo from '../../public/logo.png'
import NextLink from 'next/link'
import Image from 'next/image';
import { useRouter } from "next/router";
import styles from '../../styles/nav.module.css'

function Navbar({navNormal,navActive}) {
  const classes = useStyles();
  const router = useRouter();
  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [showLinks, setShowLinks] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [nav, setNav] = useState(false);
  const [normal, setNormal] = useState(`styles.${navNormal}`);
  const [act, setAct] = useState(navActive);
  const [showIntro, setShowIntro] = useState(undefined);
  const [isLoading, setIsLoading] = useState(undefined);



  
 const changeBackground=()=>{
    if(window.scrollY>=60){
      setNavbar(true)
      setNav(false)
    }else{
      setNavbar(false)
      setNav(true)
    }
  }

useEffect(() => {
  changeBackground()
  window.addEventListener('scroll',changeBackground) 
  if(showLinks){
    setNavbar(false)
  }
})

const handleSubmit = (e) => {
  e.preventDefault();
  setIsSearch(false);
  setTimeout(() => {
    router.push(`/search/${searchText}`);
  }, 1000)
};

  

  
 
  return (
    <nav className={!navbar?styles.navbar:classes.active}>
      <Grid container spacing={2} className={!navbar?styles.listNav: styles.listNavActive}>
        <Grid item xs={8} sm={4} className={styles.leftSide}>
          <NextLink href="/" passHref>
               <Image src={Logo} />
          </NextLink>
          <div>browser</div>
        </Grid>
        <Grid item xs={4} sm={4}>
        <form onSubmit={handleSubmit}>
           <TextField
             id="outlined-hidden-label-small"
             size="small"
             variant="outlined"
             style={{color:'white'}}
             className={classes.inputForm}
             value={searchText}
             onChange={(e) => setSearchText(e.target.value)}
             placeholder="Find movies,TV shows and more"
             InputProps={{
             startAdornment: <InputAdornment position="start">
                               <HiSearch style={{color:'white',fontSize: '1.4rem'}}/>
                             </InputAdornment> 
              }} 
           />
          </form> 
        </Grid>
        <Grid item xs={4} sm={4} className={styles.rightSide}>
          <Button  className={styles.btnRgst}>Register</Button>
          <Button className={styles.btnSng}>Sign in</Button>
        </Grid>
       </Grid>
      
    </nav>

  )
}

export default Navbar