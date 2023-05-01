import Head from 'next/head'
import Header from '@components/Header'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import searchResults from "pages/searchResults";
import { Outlet } from 'react-router-dom';
import Link from "next/link"
// import styles from '../styles/Home.module.css'
// import searchScripts from './scripts/searchScripts'
import {functionName} from '@components/searchScripts.js'
import {search} from '@components/searchScripts.js'
import Footer from '@components/Footer'
import {handleSubmit} from 'pages/searchResults.js'
import { useRouter } from 'next/router';
import { useState } from 'react';

export async function getStaticProps() {
  return {
    props: {
      heading: 'Jobi Search Engine',
      details: 'This response is static.',
    },
  };
}

export default function Home({ heading, details }) {

  const router = useRouter();
  const [searchText, setsearchText] = useState("");
  return (
    <div className={styles.container}>
      <Head>
        <title id="title">{heading}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main className={styles.main}>
      <h2 className={styles.title} id="heading">
        {heading}
      </h2>

      <div className={styles.grid}>

    <form action="/searchResults" method="GET">
        <input type="text" id="keyword" name="keyword" placeholder="Search..."></input>
        <button type="submit" id="submit">Search</button>
    </form>
    <span className="details">{details}</span>
      </div>
    </main>
  </div>
        
    //     <button className="btn btn-outline-secondary" id="searchBtn" type="button" onClick={search} >Search</button>
    //     {/* <Link to="/searchResults">Search Results</Link> */}

  )

}