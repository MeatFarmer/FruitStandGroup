console.log("sor");
$(document).ready(function(){
  console.log("JQ");
}); // end document ready function
setInterval(function() {
  var number = 0.50 + Math.floor(Math.random() * 9.99);
  $('#my_box1').html( "$ " + number );
},
1000);
setInterval(function() {
  var number = 0.50 + Math.floor(Math.random() * 9.99);
  $('#my_box2').html( "$ " + number );
},
1000);
setInterval(function() {
  var number = 0.50 + Math.floor(Math.random() * 9.99);
  $('#my_box3').html( "$ " + number );
},
1000);
setInterval(function() {
  var number = 0.50 + Math.floor(Math.random() * 9.99);
  $('#my_box4').html( "$ " + number );
},
1000);
setInterval(0);
