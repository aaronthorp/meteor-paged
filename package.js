Package.describe({
  summary: "Paginate anything with a few lines of code"
});

Package.on_use(function (api, where) {
  api.add_files('pagination_client.js', 'client');
});

Package.on_test(function (api) {
  api.add_files('pagination_tests.js', 'client');
});
