// This is a first stab at a package that provides reasonable defaults for
// security-related headers (X-Frame-Options, Content-Security-Policy) and
// hopefully makes it easy for apps to configure these headers.
//
// The default policies are:
// 1.) Only the same origin can frame the app.
// 2.) No eval or other string-to-code, and content can only be loaded from the
// same origin as the app.
//
// We should encourage apps to call SecurityHeaders.disallowInlineScripts() if
// they are not using any inline script tags.  XXX need to move
// __meteor_runtime_config__ into the js bundle or separate file so that
// disallowInlineScripts() won't break everything
//
// SecurityHeaders functions for tweaking CSP:
// disallowInlineScripts()
// allowEval() (allows string-to-code like eval, innerHTML, etc.)
// allowInlineStyles()
//
// allowScriptSrc(origin): allows scripts to be loaded from the given origin
// allowScriptData(): allows scripts to be loaded from data: URLs
// disallowScript(): disallows all scripts
// and similar methods for object, img, media, frame, font, connect, style.



// By default, only the same origin can frame the app.
var xFrameOptions = "SAMEORIGIN";

// By default, unsafe inline scripts are allowed, since we expect many apps will
// use them for analytics, etc. Unsafe eval is disallowed, and the only
// allowable content source is the same origin.
var cspSrcs = {
  "default-src": ["'self'"],
  "script-src": ["'self'", "'unsafe-inline'"]
};

var customCsp;

var constructCsp = function () {
  // If the user has constructed their own policy themselves, use that.
  if (customCsp)
    return customCsp;

  cspSrcs = _.filter(cspSrcs, function (srcs, directive) {
    return ! _.isEmpty(srcs);
  });

  var header = _.map(cspSrcs, function (srcs, directive) {
    return directive + " " + srcs.join(" ") + ";";
  }).join(" ");

  return header;
};

var removeCspSrc = function (directive, src) {
  cspSrcs[directive] = _.without(cspSrcs[directive] || [], src);
};

var ensureDirective = function (directive) {
  if (! _.has(cspSrcs, directive));
    cspSrcs[directive] = [];
};

WebApp.connectHandlers.use(function (req, res, next) {
  res.setHeader("X-Frame-Options", xFrameOptions);
  res.setHeader("Content-Security-Policy", constructCsp());
  next();
});

SecurityHeaders = {
  setXFrameOptions: function (header) {
    xFrameOptions = header;
  },

  setContentSecurityPolicy: function (csp) {
    customCsp = csp;
  },

  // Helpers for creating content security policies

  disallowInlineScripts: function () {
    removeCspSrc("script-src", "unsafe-inline");
  },

  allowEval: function () {
    ensureDirective("script-src");
    cspSrcs["script-src"].push("unsafe-eval");
  },

  allowInlineStyles: function () {
    ensureDirective("style-src");
    cspSrcs["style-src"].push("unsafe-inline");
  }
};

_.each(["script", "object", "img", "media",
        "frame", "font", "connect", "style"],
       function (resource) {
         var directive = resource + "-src";
         var methodResource = resource.charAt(0).toUpperCase() +
               resource.slice(1);
         var allowMethodName = "allow" + methodResource + "Origin";
         var disallowMethodName = "disallow" + methodResource;
         var allowDataMethodName = "allow" + methodResource + "Data";
         var allowSelfMethodName = "allow" + methodResource + "Self";

         SecurityHeaders[allowMethodName] = function (src) {
           ensureDirective(directive);
           cspSrcs[directive].push(src);
         };
         SecurityHeaders[disallowMethodName] = function () {
           cspSrcs[directive] = ["'none'"];
         };
         SecurityHeaders[allowDataMethodName] = function () {
           ensureDirective(directive);
           cspSrcs[directive].push("data:");
         };
       });
