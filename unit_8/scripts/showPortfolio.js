// showPortfolio.js


	// document.write("pathname detection is working!!!");
	
	/* Check to see if id="gallery" is found
		if gallery is null (not found)
			issue a statement 
			create a variable and manually assign values to it
			display the images
		else
			issue a statement - notifying the user
			display the images
	 */
/*	 
if(location.pathname.substring(location.pathname.lastIndexOf("/") + 1) === 'portfolio.html'){
	 var myWork = new Array();
	 var projectNo = document.images.length;

	 if (document.getElementById("gallery") === null){
	 	console.log("Gallery element NOT found!\n Manually obtaining a value");

	  	for (var i = 0; i < projectNo; i++ ){
	 		myWork[i] = document.images[i].src;
	 		document.getElementById("showPortfolio").innerHTML = myWork[i];
	 		//document.write(myWork[i]);

	 	};
	 } else {
	 	console.log("Gallery element FOUND!");
	 	for(var i = 0; i < projectNo; i++ ) {
	 		myWork[i] = document.images[i].src;
	 		
	 		//document.getElementById("showPortfolio").innerHTML = myWork[i];		
	 	};
	 };
}
*/
if(location.pathname.substring(location.pathname.lastIndexOf("/") + 1) === 'portfolio.html')
{
	document.getElementById("gallery").style.display = table-column;
}