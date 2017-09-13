$(document).ready(function() {

  $("#btnSubmit").click(function() {

    $("#FormOne").submit(function(event) {
      var name = $("input#name").val();
      var food = $("#food").val();
      var music = $("input:radio[name=music]:checked").val();
      var sports = $("input#sports").val();
      var born = $("#born").val();
      var color = $("#color").val();
      alert(name);


      $("#name").text(nameInput);

      $("#thankyou").show();

      event.preventDefault();
    });
  });
});
