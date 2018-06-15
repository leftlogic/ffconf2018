function fx(dates) {
  window.confDays = [new Date(dates[0]), new Date(dates[1])];
  document.documentElement.className += ' 🦄';
  //=== SVG support
  function supportsSVG() {
    return (
      !!document.createElementNS &&
      !!document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        .createSVGRect
    );
  }
  if (!supportsSVG()) {
    document.documentElement.className += ' no-svg';
  }
  //=== Safari 8
  if (
    /constructor/i.test(window.HTMLElement) &&
    !('flexWrap' in document.documentElement.style)
  ) {
    document.documentElement.className += ' i-hate-safari (╯°□°)╯︵ ┻━┻';
  }
  //=== Fonts
  window.fontUrl = '/css/fonts.47d3adddc08644ab52c7badaef40c832.woff.json';
  var fontMd5 = '47d3adddc08644ab52c7badaef40c832';
  var fontKey = 'fonts';
  var fontCache = null;
  function fontInsert(value) {
    var style = document.createElement('style');
    style.innerHTML = value;
    document.head.appendChild(style);
  }
  // PRE-RENDER
  try {
    fontCache = window.localStorage.getItem(fontKey);
    if (fontCache) {
      fontCache = JSON.parse(fontCache);
      if (fontCache.md5 === fontMd5) {
        fontInsert(fontCache.value);
      } else {
        // Busting cache when md5 doesn't match
        window.localStorage.removeItem(fontKey);
        fontCache = null;
      }
    }
  } catch (e) {
    // Most likely LocalStorage disabled
  }
}
