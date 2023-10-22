var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};

$('document').ready(function(){
 setTimeout(function(){
    $('.notify-container').fadeOut(function(){
    });
  }, 10000);
  $('.show-notify').on( 'click', function(){
    $('.notify-container').fadeIn();
  });
  $('.close-it').on( 'click', function(){
    $('.notify-container').fadeOut('slow');
  });
});
