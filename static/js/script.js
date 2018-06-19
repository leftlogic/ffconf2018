(function() {
  var $ = function(s) {
    try {
      return document.querySelectorAll(s);
    } catch (e) {
      return [];
    }
  };
  var $$ = function(s) {
    try {
      return document.querySelector(s);
    } catch (e) {
      return [];
    }
  };

  //=== Fonts
  // http://crocodillon.com/blog/non-blocking-web-fonts-using-localstorage
  // POST-RENDER
  (function() {
    if (!window.fontCache) {
      // Fonts not in LocalStorage or md5 did not match
      window.addEventListener('load', function() {
        var request = new XMLHttpRequest(),
          response;
        request.open('GET', window.fontUrl, true);
        request.onload = function() {
          if (this.status === 200) {
            try {
              response = JSON.parse(this.response);
              window.fontInsert(response.value);
              window.localStorage.setItem(window.fontKey, this.response);
            } catch (e) {
              // LocalStorage is probably full
            }
          }
        };
        request.send();
      });
    }
  })();

  //=== Quotes
  (function() {
    // convert NodeList to Array https://davidwalsh.name/nodelist-array
    var quotesWrapper = [].slice.call($('.js-quote'));
    var quotesTemplate = [].slice.call($('.js-quote-template'));
    quotesWrapper.forEach(function(item) {
      var len = quotesTemplate.length;
      var rnd = Math.floor(Math.random() * len);
      var q = quotesTemplate.splice(rnd, 1);
      item.innerHTML = q[0].innerHTML;
    });
  })();

  //=== Open menu
  (function() {
    // from http://www.a11ymatters.com/pattern/mobile-nav/
    var buttons = [].slice.call($('.js-button-expand'));

    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        var isExpanded = button.getAttribute('aria-expanded');

        if (isExpanded !== 'false') {
          isExpanded = 'false';
        } else {
          isExpanded = 'true';
        }

        button.setAttribute('aria-expanded', isExpanded);
      });
    });
  })();

  //=== Scroll to session
  // (function() {
  //   var skipNav = false; // if we want to scroll down without showing the menu
  //   var $nav = $('.nav-main');
  //   var today = new Date();
  //   var best;
  //   var isConfDay = false;
  //   var whichConfDay = 0;

  //   confDays.forEach(function(confDay, index) {
  //     if (
  //       today.getDate() === confDay.getDate() &&
  //       today.getMonth() === confDay.getMonth() &&
  //       today.getFullYear() === confDay.getFullYear()
  //     ) {
  //       isConfDay = true;
  //       whichConfDay = index + 1;
  //     }
  //   });

  //   if (isConfDay) {
  //     // find the current session
  //     var sessions = $('.js-session');
  //     var length = sessions.length;
  //     best = sessions[0];

  //     for (var i = 0; i < length; i++) {
  //       if (
  //         Date.parse(sessions[i].getAttribute(`data-date${whichConfDay}`)) -
  //           5 * 1000 * 60 <
  //         today
  //       ) {
  //         best = sessions[i];
  //       }
  //     }
  //   }

  //   // if today is conference day, then scroll the current session into view
  //   if (isConfDay && best && !window.location.hash) {
  //     setTimeout(function() {
  //       best.scrollIntoView(true);
  //     }, 750);
  //   } else if (skipNav) {
  //     // only scroll the front page
  //     // && /mobi/i.test(navigator.userAgent)
  //     $nav.length > 0 &&
  //       location.pathname === '/' &&
  //       !location.hash &&
  //       setTimeout(function() {
  //         if (!pageYOffset) {
  //           window.scrollTo(0, $nav[0].offsetHeight);
  //         }
  //       }, 750);
  //   }
  // })();
})();
