
$(document).on("mouseover", function(){
    slideDown()
})


$("h4").on("mouseover",function(){
    $("h4").html("WELCOME TO MY WEBSITE!! EXPLORE!!")
    $("h4").css("color", "#5C8984")
    $("h4").effect("bounce", { times: 3, distance: 50 }, 500);
})

  $(document).ready(function() {
    $(".my-picture").click(function() {
      $("my-picture").effect("bounce", { times: 3, distance: 50 }, 500);
    });
  });
