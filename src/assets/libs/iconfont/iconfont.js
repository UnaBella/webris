;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-error" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C228.693333 0 0 228.693333 0 512s228.693333 512 512 512c283.306667 0 512-228.693333 512-512S795.306667 0 512 0zM723.626667 665.6c23.893333 23.893333 23.893333 61.44 0 81.92-23.893333 23.893333-61.44 23.893333-81.92 0L512 600.746667 382.293333 750.933333c-23.893333 23.893333-61.44 23.893333-81.92 0s-23.893333-61.44 0-81.92l136.533333-153.6-136.533333-153.6C276.48 334.506667 276.48 296.96 300.373333 273.066667c23.893333-23.893333 61.44-23.893333 81.92 0l129.706667 150.186667L641.706667 273.066667c23.893333-23.893333 61.44-23.893333 81.92 0 23.893333 23.893333 23.893333 61.44 0 81.92l-136.533333 153.6L723.626667 665.6z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-warning" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0zM464 192l96 0 0 434.978-96 0L464 192zM512 832.242c-33.137 0-60-26.863-60-60s26.863-60 60-60 60 26.863 60 60S545.137 832.242 512 832.242z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)