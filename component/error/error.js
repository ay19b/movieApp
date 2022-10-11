import {HiOutlineEmojiSad} from "react-icons/hi";
import Head from "next/head";
import useStyles from './style';
import NextLink from 'next/link';

function Error() {
  const classes = useStyles();
    return (
      
       <div className={classes.error}>
        <HiOutlineEmojiSad className={classes.icon}/>
        <h1 className={classes.text}>404 error</h1>
        <h1>sorry page not found</h1>
        <NextLink href="/" passHref>
            <button className={classes.btn}>Back to home</button>
         </NextLink>
       </div>
        
     
    )
}
  
  export default Error