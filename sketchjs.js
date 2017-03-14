// 'divElement' are the divs inside wrapper, let's specify the size of them:
var divElementSize = {
  height: 20,
  borderRadius: 10,
  width: 20
};


function createGrid(rows, columns, wrapperClass) {
  var locationToAdd = document.getElementsByClassName(wrapperClass)[0];

  /* Dynamically set the size of wrapper so we have 16 divElements per row.
  	 This way allows us to pass in values other than 16 and maintain control:
  */
  locationToAdd.style.width = divElementSize.width * columns + 'px';
  locationToAdd.style.height = divElementSize.height * rows + 'px';

  for (var rowCount = 0; rowCount < rows; rowCount++) {
    for (var columnCount = 0; columnCount < columns; columnCount++) {
      var divElement = document.createElement('div');
      divElement.style.height = divElementSize.height + 'px';
      divElement.style.width = divElementSize.width + 'px';
      divElement.style.borderRadius = divElementSize.borderRadius + 'px';
      locationToAdd.appendChild(divElement);
    }
  }
}

createGrid(16, 16, 'wrapper');


function newGrid() {
  var widthPix = prompt("How many pixels do you want to form the width of your grid?");
  var heightPix = prompt("How many pixels do you want to form the height of your grid?");

  var wrapperWidth = $(".wrapper").width();
  var wrapperHeight = $(".wrapper").height();

  var divWidth = wrapperWidth / widthPix;
  var divHeight = wrapperHeight / heightPix;

  for (var rowCount = 0; rowCount < heightPix; rowCount++) {
    for (var columnCount = 0; columnCount < widthPix; columnCount++) {
      var divElement = document.createElement('div');
      divElement.style.height = divHeight + 'px';
      divElement.style.width = divWidth + 'px';
      divElement.style.borderRadius = 10 + 'px';
      var locationToAdd = document.getElementsByClassName("wrapper")[0];
      locationToAdd.appendChild(divElement);
    }
  }
}



function clearGrid() {
  $("#clearScreen").click(function() {
    $(".wrapper").empty();
    newGrid();
    var clearClass = document.getElementsByClassName("draw");
    while (clearClass.length)
      clearClass[0].classList.remove("draw");
  });
}

clearGrid();

function doodleTime() {
  $("#draw").click(function() {
    $(".wrapper>div").on('mouseover', function() {
      $(this).addClass("draw");
    })
  })
}

doodleTime();
