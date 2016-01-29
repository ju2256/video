// file: js/require-setup.js
//
// Declare this variable before loading RequireJS JavaScript library
// To config RequireJS after it’s loaded, pass the below object into require.config();

require.config({
    baseUrl: "./lib",
    shim : {
        "jquery"    :             { },
        "bootstrap" :             { "deps" : ['jquery'] },
        "bootstrap-switch" :      { "deps" : ['jquery', 'bootstrap' ] },
        "bigtext" :               { "deps" : ['jquery'] },
        "jwplayer" :              { exports: 'jwplayer' }
    },
    paths: {
        "jquery"              : "jquery/jquery-1.11.3.min", 
        "bootstrap"           : "bootstrap/js/bootstrap.min", 
        "bootstrap-switch"    : "bootstrap-switch/js/bootstrap-switch.min", 
        "bigtext"             : "bigtext/bigText", 
        "jwplayer"            : "jwplayer-7.2.4/jwplayer"
    }
});