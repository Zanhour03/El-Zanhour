

$(function(){
  // Activate Carousel
  $("#myCarousel").carousel();
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
$(function () {
  $("#languages").change(function() {
      var val = $(this).val();
      var text = $("#languages option:selected").text();
      $("#selected-language").html(val + '<br>' + text);
  });
});