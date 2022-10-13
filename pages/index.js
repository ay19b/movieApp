import React, { useEffect, useState} from 'react';
import Movies from "../component/categ/movies";
import MoviesObj from "../component/TMDB";
import Banner from "../component/banner/banner";
import Loading from "../component/loading/loading";
import Head from 'next/head';
import Layout from '../component/Layout';
import Footer from '../component/footer/footer';
import { useRouter } from "next/router";


export default function Home() {
  const [showIntro, setShowIntro] = useState(undefined);
  const [isLoading, setIsLoading] = useState(undefined);


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
   {!showIntro ?(
      <>
      {!isLoading ?(
         <Loading title={'molla'}/>
       ):(
         <Loading title={'molla'}/>
       )
         
       }
      </>
    ):(
      <>
       <Head>
        <title>molla</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>  
       </Head> 
       <Layout>
          <Banner />
          {MoviesObj.map((Obj, Ind) => {
            return <Movies link={Obj.Request} genre={Obj.Title} key={Ind}/>;
           })}
       </Layout>
      </>
    )
  }
    </>
  )
}
