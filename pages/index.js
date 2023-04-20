import Head from 'next/head'
import Header from '@components/Header'
import searchScripts from './/searchScripts'
import Script from 'next/script'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        {/* Links to external JS file for function calls */}
        <script src='pages\searchScripts.js'></script>

        {/* Links to external CSS file for styles */}
        {/* <link rel="stylesheet" href="./styles/[INSERT STYLES FILE HERE]"></link> */}

        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Header title="Jobi - Job Search Platform" />
        <p className="description">
          Type 'n Search!
        </p>

      <div className="input-group mb-3">
        {/* <input type="text" id="searchField" placeholder="Search Here..." aria-label="Search Here..." aria-describedby="basic-addon2"></input> */}
        <button className="btn btn-outline-secondary" id="searchBtn" type="button" >Search</button>
        {/* <button className="btn btn-outline-secondary" id="searchBtn" type="button" onClick=functionName() >test</button> */}
        
      </div>
      </main>

      <Footer />
    </div>
  )
}
