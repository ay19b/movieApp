import React from 'react'
import Head from 'next/head';


const Loading = ({title}) => {
    return (
    <> 
        <Head>
          <title>{title}</title> 
        </Head>
      <>
		    <div className='spinner'>
		      <div className="dots"></div>
		    </div>
          
      </>
            
    </>
    )
}

export default Loading