$('h1').on("click", function() {
    $('h1').animate({ opacity: 0.1 });
  });

$('button').on("click", function() {
    $('h1').slideUp().slideDown();
});

$(document).on("keydown", function(event) {
    $('h1').text(event.key);
});