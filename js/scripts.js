$(document).ready(function() {

  $("#formInput").submit(function(event) {
    var name = $("input#name").val();
    var food = $("#food").val();
    var music = $("input:radio[name=music]:checked").val();
    var sports = $("input#sports").val();
    var born = $("#born").val();
    var color = $("#color").val();





    event.preventDefault();
  });
});
