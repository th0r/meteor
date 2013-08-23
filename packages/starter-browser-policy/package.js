Package.describe({
  summary: "Default browser security policies"
});

Package.on_use(function (api) {
  api.use("browser-policy", "server");
  api.add_files("starter-browser-policy.js", "server");
});
