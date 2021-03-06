(function() {
  'use strict';
  function getScript(urlOnly) {
    var scripts = document.getElementsByTagName('script');
    var element;
    var src;
    for (var i = 0; i < scripts.length; i++) {
      element = scripts[i];
      src = element.src;

      if (src && /docready\.js/.test(src)) {
        return urlOnly ? src : element;
      }
    }
    return null;
  }

  function getQueryParameters(query) {
    var args = query.split('&'),
      params = {},
      pair, key, value;

    function decode(string) {
      return decodeURIComponent(string || '').replace('+', ' ');
    }
    for (var i = 0; i < args.length; i++) {
      pair = args[i].split('=');
      key = decode(pair[0]);
      value = decode(pair[1]);
      params[key] = value;
    }
    return params;
  }

  var url = getScript(true);
  var params = getQueryParameters(url.replace(/^.*\?/, ''));
  var iframe = document.createElement('iframe');
  var target = getScript();

  iframe.src = url.replace(/docready\.js/, 'index.html');
  iframe.style.width = (params.width + 'px') || '100%';
  iframe.style.height = (params.height + 'px') || '100%';
  iframe.style.border = '3px solid #222';
  iframe.scrolling = 'auto';
  target.parentNode.insertBefore(iframe, target);
})();