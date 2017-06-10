requirejs.config({
  baseUrl:'../js',
  shim:{
    "jquery": {
           exports: 'jquery'
    },
    "bootstrap.min":{
      deps:['jquery']
    },
    "jquery.cookie":{
      deps:['jquery']
    },
    "ajaxfileupload":{
      deps:['jquery']
    },
  },
  paths: {
      "jquery": "jquery",
      "bootstrap.min":"bootstrap.min",
      "angular": "angular.min",
      "html5shiv": "html5shiv",
      "jquery.cookie": "jquery.cookie",
      "react": "react",
      "react-dom": "react-dom",
      "respond": "respond.min",
      "require":"require",
      "ajaxfileupload":"ajaxfileupload",
      "getUrlParams":"getUrlParams"
    }


});
