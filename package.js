Package.describe({
    summary: "Pure is a set of small, responsive CSS modules that you can use in every web project."
});

Package.on_use(function (api) {
    api.add_files(['css/pure-min.css'], 'client');
});