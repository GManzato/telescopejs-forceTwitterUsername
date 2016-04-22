Package.describe({
  name: "gillesmanzato:force-twitter-username",
  summary: "Force twitter username as username in TelescopeJS",
  version: "0.1.0",
  git: "https://github.com/gmanzato/forceTwitterUsername.git"
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([

    // Nova packages
    
    'nova:core@0.26.1-nova',
    'nova:users@0.26.1-nova',
    'utilities:react-list-container@0.1.8',
    'utilities:smart-publications@0.1.4',

  ]);


  api.mainModule('lib/server/callback.js', ['server']);
});
