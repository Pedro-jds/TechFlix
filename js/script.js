var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 0.2,
  wrap: true
})

$('#myModal').on(hide.bs.modal , function(){
  // quando o modal for fechado 
});
