Package.describe({
  summary: "Adds Content Security Policy and X-Frame-Options headers to " +
    "help prevent XSS and clicjacking attacks."
});

Package.on_use(function (api) {
  api.use(["underscore", "webapp"], "server");
  api.add_files("security-headers.js", "server");
  api.export("SecurityHeaders", "server");
});
