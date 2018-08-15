$(document).ready(function(){
  /* when .Hamburger is clicked */
  $('.Hamburger').click(function(){
    /* add .is-active to animate */
    $(this).toggleClass('is-active');
    /* add .is-visible to show nav */
    $( '.Navigation' ).toggleClass('is-visible');
    /* when Nav link is clicked */
    $('.Header-link').click(function(){
      /* hide nav */
      $('.Navigation').removeClass('is-visible');
      /* and remove active class from Hamburger */
      $('.Hamburger').removeClass('is-active');
    });
  });
});
