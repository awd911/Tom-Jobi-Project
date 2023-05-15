import Head from 'next/head'
import Header from '@components/Header'
import ReactDOM from "react-dom/client";
import searchResults from "pages/searchResults";
import { Outlet } from 'react-router-dom';
import Link from "next/link"
//mport styles from '../styles/globals.css'

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

export default function jobDetails({ heading, details }) {

  const router = useRouter();
  const [searchText, setsearchText] = useState("");
  return (
    <div>
      <Head>
        <title id="title">Job Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main >
      <h2 id="heading">
        Details will be displayed here.
      </h2>
    <p>Wage,Hours,Location, etc...</p>
      <div>

      <Link href="/" >
          <a>
          <h2>Home &rarr;</h2>
          </a>
        </Link>
      </div>
    </main>
  </div>

  )
}