import {HiOutlineEmojiSad} from "react-icons/hi";
import Head from "next/head";
import NextLink from 'next/link';
import Error from '../component/error/error';

function PageNotFound() {
    return (
      <>
       <Head>
          <title>page not found</title>
       </Head>
       <>
       
        <Error />
       </>
        
      </>
    )
}
  
  export default PageNotFound