import React from "react";
//import styles from '../styles/globals.css'
import Link from "next/link"
import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom";


import {Search, submitID} from 'components/searchScripts.js'
import { render } from "react-dom";
import getJobs from "firebase_setup/firebase"

export default function searchResults(){

    const [searchParams,setSearchParams] = useSearchParams();
    const [info , setInfo] = useState();
    //const [info , setInfo] = useState([{Job}]);
    const jobsDB = [new Job];
    const [pageUrl,setPageURL] = useState();
    const totalDb =  getJobs();

    //creates the router to access the current URL
    const router = useRouter()
    
    function Job(id, title, location) {
        this.id = id;
        this.title = title;
        this.location = location;
      }



    useEffect(()=>{
        Fetchdata();
        setPageURL(router.asPath);
    },[])

    const Fetchdata = ()=>{
        
        
        const allJobs = Promise.resolve(totalDb).then(jobs=>{
            //Adds the jobs from the database to the jobsDB array of job objects
            console.log ("PrintData: ",jobs);
            jobs.forEach(element => {
                //creates a job object from each job in the database
                let currJob = new Job(element.id,element.title,element.location);
                
                // Pushes the Jobs into the Info Array of Job objects
                setInfo(jobs);

            })
        })
        
        console.log("FetchData reached, Search: ", searchParse(router.asPath) , " Info: ",info);

     }


     function setStateFunction(props){
        //console.log("title:",props.title,"location:",props.location);
        const updateInfo = [...info,{
            id:props.id,
            title:props.title,
            location:props.location
        }];
        info.push(props);
     }

     //Splits the query into the actual search terms
        function searchParse(query){
            query = query.split("=");

            return query[1];
        }

    return(
        <div >
            <h2>Search Results Page</h2>
 			<h3>Job Details</h3>
            <p>
            User input: {pageUrl}<br />
            </p>

 		{
			info?.map((data) => (
			<Frame id={data.id} title={data.title} location={data.location}/>
             ))
		}

        <Link href="/" >
          <a>
          <h2>Home &rarr;</h2>
          </a>
        </Link>
        </div>


)
}
 // Define how each display entry will be structured
 const Frame = ({id,title , location}) => {
    
    const jobId = searchParams.get({id});
    setSearchParams({'id':{id}});

    return (
 		<center>
 			<div className="div">


    <Link href= {'jobDetails'}>
            <a >
            <h2>{title} &rarr;</h2>
            </a>
            </Link>
            <p>Location : {location}</p>

 			</div>
 		</center>
 	);
}