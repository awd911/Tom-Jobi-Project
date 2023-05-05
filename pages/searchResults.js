import React from "react";
//import styles from '../styles/globals.css'
import Link from "next/link"
import { useRouter } from "next/router";
import { useState,useEffect } from "react";


import {Search} from 'components/searchScripts.js'
import { render } from "react-dom";
import getJobs from "firebase_setup/firebase"

export default function searchResults(){
    
    function Job(title,location){
        this.title = title;
        this.location = location;
    }

    const [info , setInfo] = useState([{Job}]);
    const jobsDB = [new Job];
    const [pageUrl,setPageURL] = useState();
    const totalDb =  getJobs();
    //Promise.resolve(getTitles()).then(job=>{})

    
    
    
    //creates the router to access the current URL
    const router = useRouter()
    
    useEffect(()=>{
        Fetchdata();
        setPageURL(router.asPath);
    },[])

    const Fetchdata = ()=>{
        
        
        const allJobs = Promise.resolve(totalDb).then(jobs=>{
            //Adds the jobs from the database to the jobsDB array of job objects
            
            jobs.forEach(element => {
                console.log ("Element ,",element," info ,",info);
                var currJob = new Job(element.title,element.location);
                jobsDB.push(currJob);
                setStateFunction(currJob);
            })
            //setInfo();
            //console.log(" jobs : ",jobs)
        })
        jobsDB.shift();
        

        
        console.log("FetchData reached, Search: ", searchParse(router.asPath) , " All Jobs, ",jobsDB, " INfo: ",info);

     }
    
     function setStateFunction(props){
        console.log("title:",props.title,"location:",props.location);
        const updateInfo = [...info,{
            title:props.title,
            location:props.location
        }];
        setInfo(updateInfo);
     }

     //Splits the query into the actual search terms
        function searchParse(query){
            query = query.split("=");

            return query[1];
        }

        function QuestionPage() {
            const {
                asPath,        
                pathname,   
            } = useRouter();
        }
            

    return(
        <div >
            <h2>Search Results Page</h2>
 			<h3>Job Details</h3>
            <p>
            User input: {pageUrl}<br />
            


            </p>

 		{/* {
			jobsDB.map((data) => (
			<Frame title={data.title}
				location={data.location}
                />
			))
		} */}

        <Link href="/" >
          <a>
          <h2>Home &rarr;</h2>
          </a>
        </Link>
        </div>


)
}
 // Define how each display entry will be structured
//  const Frame = ({title , location}) => {
//  	console.log(title + ":" + location);
//  	return (
//  		<center>
//  			<div className="div">

//  <p>Title : {title}</p>

				
//  <p>Location : {location}</p>

			

//  			</div>
//  		</center>
//  	);
// }