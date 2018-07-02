// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

  
//define rows, columns
  var rows = $("#inputHeight").val();
  var columns = $("#inputWeight").val();

  //define table
  var table = $("#pixelCanvas");

  //Remove previous table
  table.children().remove();

  //Create rows
  for (var i = 0; i <= rows; i++) {
    table.append("<tr></tr>");
    
    //Create columns
    for (var j = 0; j <= columns; j++) {
      table.children().last().append("<td></td>");
    }
  }

  table.on("click", "td", function() {
    //choose color
    var color = $("input[type='color']").val();
    //Apply color 
    $(this).attr("bgcolor", color);
  });
}

// Event Listener for button clicks to trigger makeGrid()
$("input[type='submit']").click(function(e) {
  e.preventDefault(); 
  makeGrid(); //Create table
});
