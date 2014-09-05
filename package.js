Package.describe({
    summary: "Pure is a set of small, responsive CSS modules that you can use in every web project.",
  version: "0.5.0",
  git: "https://github.com/MikkoVirenius/meteor-purecss.git"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@0.9.0");

  var path = Npm.require('path');
  var asset_path = path.join('css');
  api.addFiles(path.join(asset_path, 'pure-min.css'), 'client');

});
