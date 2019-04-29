/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable max-len */
// ********* Server *********
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// window.addEventListener('scroll', () => {
//     let parent = document.getElementById('parallax-container');
//     let children = parent.getElementsByTagName('div');
//     for(let i = 0; i < children.length; i++) {
//       children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
//     }
//  }, false)


$(document).ready(function() {
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
  });

  console.log('I work');

  $('.btn-send').on('click', function() {
    console.log('button pressed');
  });
  // ********************* Contact Us Form ********
  $(function() {
    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contact-form').validator();


    // when the form is submitted
    $('#contact-form').on('submit', function(e) {
      // if the validator does not prevent form submit
      if (!e.isDefaultPrevented()) {
        const url = 'contact.php';

        // POST values in the background the the script URL
        $.ajax({
          type: 'POST',
          url: url,
          data: $(this).serialize(),
          success: function(data) {
            // data = JSON object that contact.php returns

            // we recieve the type of the message: success x danger and apply it to the
            const messageAlert = 'alert-' + data.type;
            const messageText = data.message;

            // let's compose Bootstrap alert box HTML
            const alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

            // If we have messageAlert and messageText
            if (messageAlert && messageText) {
              // inject the alert to .messages div in our form
              $('#contact-form').find('.messages').html(alertBox);
              // empty the form
              $('#contact-form')[0].reset();
            }
          },
        });
        return false;
      }
    });
  });

  // Portfolio

  // carousel settings
  $(function() {
    $('#mdb-lightbox-ui').load('mdb-addons/mdb-lightbox-ui.html');
  });

  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  $('#left-chevron').on('click', function() {
    console.log('back clicked');
    // showSlides(slideIndex --);
  });

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    // let i;
    // const slides = document.getElementsByClassName('mySlides');
    // const dots = document.getElementsByClassName('demo');
    // const captionText = document.getElementById('caption');
    // if (n > slides.length) {
    //   slideIndex = 1;
    // }
    // if (n < 1) {
    //   slideIndex = slides.length;
    // }
    // for (i = 0; i < slides.length; i++) {
    //   slides[i].style.display = 'none';
    // }
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(' active', '');
    // }
    // slides[slideIndex - 1].style.display = 'block';
    // dots[slideIndex - 1].className += ' active';
    // captionText.innerHTML = dots[slideIndex - 1].alt;
  }
});