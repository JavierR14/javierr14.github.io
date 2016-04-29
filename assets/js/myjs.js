$(function(){
    var oddClick = true;
    $('.button_container').css({
        display: 'none'
    });
    $('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
    oddClick ? disableScroll() : enableScroll();
    oddClick = !oddClick
  });

  //disable nav
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  var keys = {37: 1, 38: 1, 39: 1, 40: 1};

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;  
  }

  function preventDefaultForScrollKeys(e) {
      if (keys[e.keyCode]) {
          preventDefault(e);
          return false;
      }
  }

  function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove  = preventDefault; // mobile
    document.onkeydown  = preventDefaultForScrollKeys;
  }

  function enableScroll() {
      if (window.removeEventListener)
          window.removeEventListener('DOMMouseScroll', preventDefault, false);
      window.onmousewheel = document.onmousewheel = null; 
      window.onwheel = null; 
      window.ontouchmove = null;  
      document.onkeydown = null;  
  }

  //MODAL WINDOWS ---------- NEEDS TO BE CHANGED WHEN UPDATED
  // Get the modal
  var modal_joist = document.getElementById('joist-modal');
  var modal_davis = document.getElementById('davis-modal');
  var modal_freelance = document.getElementById('freelance-modal');

  // Get the button that opens the modal
  var btn_joist = document.getElementById("joist-btn");
  var btn_davis = document.getElementById("davis-btn");
  var btn_freelance = document.getElementById("freelance-btn");

  // Get the <span> element that closes the modal
  var span_joist = document.getElementById("close-1");
  var span_davis = document.getElementById("close-2");
  var span_freelance = document.getElementById("close-3");

  // When the user clicks on the button, open the modal 
  btn_joist.onclick = function() {
    modal_joist.style.display = "block";
  }
  btn_davis.onclick = function() {
    modal_davis.style.display = "block";
  }
  btn_freelance.onclick = function() {
    modal_freelance.style.display = "block";
  }


  // When the user clicks on <span> (x), close the modal
  span_joist.onclick = function() {
    modal_joist.style.display = "none";
  }
  span_davis.onclick = function() {
    modal_davis.style.display = "none";
  }
  span_freelance.onclick = function() {
    modal_freelance.style.display = "none";
  }


  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal_joist) {
          modal_joist.style.display = "none";
      }
      if (event.target == modal_davis) {
          modal_davis.style.display = "none";
      }
      if (event.target == modal_freelance) {
          modal_freelance.style.display = "none";
      }
  }

  var contactform =  document.getElementById('contactform');
  contactform.setAttribute('action', '//form' + 'spree.io/' + 'javier141196' + '@' + 'yahoo' + '.' + 'ca');
});


