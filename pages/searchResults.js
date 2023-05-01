import React from "react";
import styles from '../styles/searchResults.module.css'
import Link from "next/link"
import { useRouter } from "next/router";
import { useState,useEffect } from "react";

import {handleSubmit} from 'pages/searchResults.js'
export default function searchResults(){

    //creates the router to access the current URL
    const router = useRouter()

    function QuestionPage() {
        const {
          asPath,        
          pathname,   
        } = useRouter();
    }

    const [pageUrl,setPageURL] = useState();

    useEffect(()=>{
        setPageURL(router.asPath);
    },[])

    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Search Results Page</h2>
            <p className={styles.description}>
            User input: {pageUrl}
            {/* {userSearch} */}
             {/* User input: {router.asPath} */}
            </p>

        <Link href="/" >
          <a className={styles.card}>
          <h2>Home &rarr;</h2>
          </a>
        </Link>
        </div>

        
    )
}