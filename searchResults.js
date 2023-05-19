import React from "react";
//import styles from '../styles/globals.css'
import Link from "next/link"
import { useRouter } from "next/router";
import { useState,useEffect } from "react";


import {Search} from 'components/searchScripts.js'
import { render } from "react-dom";
import getJobs from "firebase_setup/firebase"

export default function searchResults(){
    
    
    const [info , setInfo] = useState([{Job}]);
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
            
            jobs.forEach(element => {
                //creates a job object from each job in the database
                let currJob = new Job(element.id,element.title,element.location);
                
                // Pushes the Jobs into the Info Array of Job objects
                //info.push(currJob);
                setStateFunction(currJob);
                jobsDB.push(currJob);
                //setInfo(info);

            })
        })
        info.shift();
        jobsDB.shift();
        
        console.log("FetchData reached, Search: ", searchParse(router.asPath) , " Info: ",info);

     }
    
     function setStateFunction(props){
        //console.log("title:",props.title,"location:",props.location);
        const updateInfo = [...info,{
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

        function printData (data){
            data.map((item) =>{
                console.log("Item: ",item);
            })

        }

    return(
        <div >
            <h2>Search Results Page</h2>
 			<h3>Job Details</h3>
            <p>
            User input: {pageUrl}<br />
            </p>

            {/* <div>

            {info.map(job => (
                <div key={job.title}>
                    <p>{job.title}</p>
                    <p>{job.location}</p>
                </div>
            ))}
            </div> */}

            {/* {info.map((data)=>{
                console.log("INFO: ",info,"ID,", (data.id), " Title, ",(data.id)," Location,",(data.id));
                <p>{id}{title}{location}</p>
            })} */}
        
        {
            printData(info)
        }

 		{
			info.map((data) => (
			// <Frame title={data.title} location={data.location}/>
            //console.log("INFO: ",info," Total Data",data,"ID,", data['id'], " Title, ", data.id," Location,", data.id);
            //id: data.id, title: data.title, location: data.location
            <div>
                <h5>Job</h5>
            <p>{data.id}</p>
            <p>{data.title}</p>
            <p>{data.location}</p>
            </div>
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
 const Frame = ({title , location}) => {
 	console.log(title + ":" + location);
 	return (
 		<center>
 			<div className="div">

 <p>Title : {title}</p>
				
 <p>Location : {location}</p>

 			</div>
 		</center>
 	);
}