$(document).ready( function()
  {function createGrid(rows,columns,wrapperClass) {

$("wrapperClass").css(
{
	"border-radius": "10px",
  "background-color":"#595b5e",
  "padding": "10px",
  "width": "20px",
  "height": "20px",
  "margin": "5px",
  "display": "inline-block"
});


for (rowCount = 0, rowCount < rows, rowCount++){
	for(columnCount = 0, columnCount < columns, columnCount++){

  	//creating the div element
  	var divElement = document.createElement("div");
   	//locating the wrapper we want the div placed in
    var location = document.getElementByClass("wrapperClass")[0];
    //adding the new div into the wrapper
    location.appendChild(divElement);


  	}
    $('<br>').appendTo("wrapperClass");
	}


};
})
