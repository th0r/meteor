// The default policies are:
// 1.) Only the same origin can frame the app.
// 2.) No eval or other string-to-code, and content can only be loaded from the
// same origin as the app.
//
// Apps should call SecurityHeaders.disallowInlineScripts() if they are not
// using any inline script tags.
//
// SecurityHeaders functions for tweaking CSP:
// allowInlineScripts()
// disallowInlineScripts()
// allowInlineStyles)(
// disallowInlineStyles()
// allowEval() (allows string-to-code like eval, innerHTML, etc.)
// disallowEval()
//
// allowScriptSrc(origin): allows scripts to be loaded from the given origin
// allowScriptData(): allows scripts to be loaded from data: URLs
// disallowScript(): disallows all scripts
// and similar methods for object, img, media, frame, font, connect, style.

// XXX It's a lot of functions. Maybe they should be of the form
// allowSrc(resourceType, origin) so you'd call allowSrc("script", "*") instead
// of allowScriptSrc("*").

// By default, only the same origin can frame the app.
var xFrameOptions = "SAMEORIGIN";

// CSP keywords have to be single-quoted.
var unsafeInline = "'unsafe-inline'";
var unsafeEval = "'unsafe-eval'";
var selfKeyword = "'self'";
var noneKeyword = "'none'";

// By default, unsafe inline scripts and styles are allowed, since we expect
// many apps will use them for analytics, etc. Unsafe eval is disallowed, and
// the only allowable content source is the same origin or data, except for
// connect which allows anything (since meteor.com apps make websocket
// connections to a lot of different origins).
var defaultCspSrcs = {
  "default-src": [selfKeyword],
  "script-src": [selfKeyword, unsafeInline],
  "connect-src": ["*"],
  "img-src": ["data:", selfKeyword],
  "style-src": [selfKeyword, unsafeInline]
};

var cspSrcs = defaultCspSrcs;

var constructCsp = function () {
  // XXX isn't there a nicer underscore way to do this?
  _.each(_.keys(cspSrcs), function (directive) {
    if (_.isEmpty(cspSrcs[directive]))
      delete cspSrcs[directive];
  });

  var header = _.map(cspSrcs, function (srcs, directive) {
    return directive + " " + srcs.join(" ") + ";";
  }).join(" ");

  return header;
};

var parseCsp = function (csp) {
  var srcs = csp.split("; ");
  var result = {};
  _.each(srcs, function (src) {
    var srcs = srcs.split(" ");
    var directive = srcs[0];
    result[directive] = srcs.slice(1);
  });
  return result;
};

var removeCspSrc = function (directive, src) {
  cspSrcs[directive] = _.without(cspSrcs[directive] || [], src);
};

var ensureDirective = function (directive) {
  if (! _.has(cspSrcs, directive))
    cspSrcs[directive] = [];
};

WebApp.connectHandlers.use(function (req, res, next) {
  res.setHeader("X-Frame-Options", xFrameOptions);
  res.setHeader("Content-Security-Policy", constructCsp());
  next();
});

if (Meteor.isServer) {
  SecurityHeaders = {
    setXFrameOptions: function (header) {
      xFrameOptions = header;
    },

    setContentSecurityPolicy: function (csp) {
      cspSrcs = parseCsp(csp);
    },

    // Helpers for creating content security policies

    // Used by webapp to determine whether we need an extra round trip for
    // __meteor_runtime_config__.
    inlineScriptsAllowed: function () {
      ensureDirective("script-src");
      return (_.indexOf(cspSrcs["script-src"], unsafeInline) !== -1);
    },

    allowInlineScripts: function () {
      ensureDirective("script-src");
      cspSrcs["script-src"].push(unsafeInline);
    },
    disallowInlineScripts: function () {
      ensureDirective("script-src");
      removeCspSrc("script-src", unsafeInline);
    },
    allowEval: function () {
      ensureDirective("script-src");
      cspSrcs["script-src"].push(unsafeEval);
    },
    disallowEval: function () {
      ensureDirective("script-src");
      removeCspSrc("script-src", unsafeEval);
    },
    allowInlineStyles: function () {
      ensureDirective("style-src");
      cspSrcs["style-src"].push(unsafeInline);
    },
    disallowInlineStyles: function () {
      ensureDirective("style-src");
      removeCspSrc("style-src", unsafeInline);
    }
  };

  // allow<Resource>Origin, allow<Resource>Data, allow<Resource>self, and
  // disallow<Resource> methods for each type of resource.
  // XXX Should there also be disallow<Resource>Origin, disallow<Resource>Data,
  // disallow<Resource>self?
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
             cspSrcs[directive] = [noneKeyword];
           };
           SecurityHeaders[allowDataMethodName] = function () {
             ensureDirective(directive);
             cspSrcs[directive].push("data:");
           };
         });
} else if (Meteor.isClient) {
  SecurityHeaders = {};
}
