// Import Firestore database
import * as firebase from "firebase/app"
import { useState } from 'react';

const Search = () => {

	const [info , setInfo] = useState([]);
	console.log("REACHED");
}
	// Start the fetch operation as soon as
	// the page loads
	// window.addEventListener('load', () => {
	// 	Fetchdata();
	// });

	// Fetch the required data using the get() method
	// const Fetchdata = ()=>{
	// 	db.collection("data").get().then((querySnapshot) => {
			
			// Loop through the data and store
			// it in array to display
	// 		querySnapshot.forEach(element => {
	// 			var data = element.data();
	// 			setInfo(arr => [...arr , data]);
				
	// 		});
	// 	})
	// }
	
	// Display the result on the page
// 	return (
// 		<div>
// 			<center>
// 			<h2>Job Details</h2>
// 			</center>
		
// 		{
// 			info.map((data) => (
// 			<Frame course={data.CourseEnrolled}
// 				name={data.Nane}
// 				age={data.Age}/>
// 			))
// 		}
// 		</div>

// 	);
// }

// Define how each display entry will be structured
// const Frame = ({title , location}) => {
// 	console.log(title + " " + location);
// 	return (
// 		<center>
// 			<div className="div">
				
// <p>Title : {title}</p>

				
// <p>Location : {location}</p>

			

// 			</div>
// 		</center>
// 	);
// }

export default Search;
