"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var firebase, config;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return typeof window === 'undefined' ? new (require("next\\dist\\lib\\dynamic.js").SameLoopPromise)(function (resolve, reject) {
              eval('require.ensure = function (deps, callback) { callback(require) }');

              require.ensure([], function (require) {
                var m = require("firebase");

                m.__webpackChunkName = 'firebase-9b40c63c-fd9e-4c77-b6ae-d9ca28dcccdc.js';
                resolve(m);
              }, 'chunks/firebase-9b40c63c-fd9e-4c77-b6ae-d9ca28dcccdc.js');
            }) : new (require("next\\dist\\lib\\dynamic.js").SameLoopPromise)(function (resolve, reject) {
              var weakId = require.resolveWeak("firebase");

              try {
                var weakModule = __webpack_require__(weakId);

                return resolve(weakModule);
              } catch (err) {}

              require.ensure([], function (require) {
                try {
                  var m = require("firebase");

                  resolve(m);
                } catch (error) {
                  reject(error);
                }
              }, 'chunks/firebase-9b40c63c-fd9e-4c77-b6ae-d9ca28dcccdc.js');
            });

          case 2:
            firebase = _context.sent;
            config = {
              apiKey: "AIzaSyC6GTc804atfohHaaVcot7QNoL69_S56gM",
              authDomain: "smallworld-6e42d.firebaseapp.com",
              databaseURL: "https://smallworld-6e42d.firebaseio.com",
              projectId: "smallworld-6e42d",
              storageBucket: "smallworld-6e42d.appspot.com",
              messagingSenderId: "965017184841"
            };

            try {
              firebase.initializeApp(config);
            } catch (err) {
              // we skip the "already exists" message which is
              // not an actual error when we're hot-reloading
              if (!/already exists/.test(err.message)) {
                console.error('Firebase initialization error', err.stack);
              }
            }

            _context.next = 7;
            return firebase;

          case 7:
            return _context.abrupt("return", _context.sent);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function connect() {
    return _ref.apply(this, arguments);
  }

  return connect;
}();