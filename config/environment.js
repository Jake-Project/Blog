/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'blog',
    environment,
    rootURL: '/',
    locationType: 'auto',
    // ...
    firebase: {
      apiKey: "AIzaSyDb7ZPjAd-zveZ69-RsSfSrdHFNPaoSBm4",
      authDomain: "blogproject-a80d2.firebaseapp.com",
      databaseURL: "https://blogproject-a80d2.firebaseio.com",
      projectId: "blogproject-a80d2",
      storageBucket: "",
      messagingSenderId: "668950111253"
    },

    firebase: 'https://your-firebase-app.firebaseio.com/',
    torii: {
      sessionServiceName: 'session',
      providers: {
        'firebase-simple-auth': {
        }
      }
    },

    'ember-simple-auth': {
      authenticationRoute: 'sessions',
      routeAfterAuthentication: 'posts'
    },


    // if using ember-cli-content-security-policy
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
