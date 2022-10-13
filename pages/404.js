import {HiOutlineEmojiSad} from "react-icons/hi";
import Head from "next/head";
import NextLink from 'next/link';


function PageNotFound() {
    return (
      <>
       <Head>
          <title>PageNotFound</title>
       </Head>
       <>
       
       <div className='error'>
        <HiOutlineEmojiSad className='iconError'/>
        <h1 className='textError'>404 error</h1>
        <h2>We are sorry.the page you requested could not be found. Please go back to the homepage</h2>
        
       </div>
       </>
        
      </>
    )
}
  
  export default PageNotFound