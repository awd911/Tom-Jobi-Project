function searchAble(){
    // Checks if field is empty
    console.log("Searchable REACHED");
    if (document.getElementById("searchField").value ===""){
        document.getElementById("searchBtn").disabled = false;
    } else {
        document.getElementById("searchBtn").disabled = true;
    }
}

function search(){
    console.log("ARRIVED");
}

function functionName(){
	alert('Hello world');
}