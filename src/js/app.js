$(document).ready(function(){

  /* when .Hamburger is clicked */
  $('.Hamburger').click(function(){

    /* add .is-active to animate */
    $(this).toggleClass('is-active');

    var $body = $( 'body' ),
        $page = $( '.Main' )

        /* add class .is-animating to body */
        $body.toggleClass( 'is-animating' )
  });
});
