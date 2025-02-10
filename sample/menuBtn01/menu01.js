// (function($) {
//     var $nav   = $('#navArea');
//     var $btn   = $('.toggle_btn');
//     var $mask  = $('#mask');
//     var open   = 'open'; // class
//     // menu open close
//     $btn.on( 'click', function() {
//       if ( ! $nav.hasClass( open ) ) {
//         $nav.addClass( open );
//       } else {
//         $nav.removeClass( open );
//       }
//     });
//     // mask close
//     $mask.on('click', function() {
//       $nav.removeClass( open );
//     });
//   } )(jQuery);

const nav = document.getElementById('navArea');
const btn = document.querySelector('.toggle_btn');
const mask = document.getElementById('mask');
const open = 'open'; // class

// menu open close
btn.addEventListener('click', () => {
  if (!nav.classList.contains(open)) {
    nav.classList.add(open);
  } else {
    nav.classList.remove(open);
  }
});

// mask close
mask.addEventListener('click', () => {
  nav.classList.remove(open);
});