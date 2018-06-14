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

//=== Quotes
// convert NodeList to Array https://davidwalsh.name/nodelist-array
var quotesWrapper = [].slice.call($('.js-quote'));
var quotesTemplate = [].slice.call($('.js-quote-template'));
setTimeout(() => {
  quotesWrapper.forEach(function(item) {
    var len = quotesTemplate.length;
    var rnd = Math.floor(Math.random() * len);
    var q = quotesTemplate.splice(rnd, 1);
    item.innerHTML = q[0].innerHTML;
  });
}, 100);
