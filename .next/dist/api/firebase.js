'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.register = exports.logout = exports.loginWithFacebook = exports.loginWithEmail = exports.getUser = exports.uploadNewsImage = exports.changeProfileImage = exports.deleteAt = exports.updateAt = exports.updateItem = exports.userBookingItem = exports.createUser = exports.createNews = exports.getUserData = exports.getAt = exports.getRealTimeData = exports.getData = undefined;

var _regenerator = require('next\\node_modules\\babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next\\node_modules\\babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _cuid = require('cuid');

var _cuid2 = _interopRequireDefault(_cuid);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _model = require('./model');

var _antd = require('antd');

var _connect = require('./connect');

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;
// import * as firebase from 'firebase';


// const config = {
//   apiKey: "AIzaSyC6GTc804atfohHaaVcot7QNoL69_S56gM",
//   authDomain: "smallworld-6e42d.firebaseapp.com",
//   databaseURL: "https://smallworld-6e42d.firebaseio.com",
//   projectId: "smallworld-6e42d",
//   storageBucket: "smallworld-6e42d.appspot.com",
//   messagingSenderId: "965017184841"
// };

// firebase.initializeApp(config)

// export const db = firebase.database().ref();
// export const storage = firebase.storage().ref();
// export const auth = firebase.auth();

/////////////////// DATABASE ////////////////////////

var getData = exports.getData = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ref) {
    var firebase, db, snapshot;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _connect2.default)();

          case 2:
            firebase = _context.sent;
            _context.next = 5;
            return firebase.database().ref();

          case 5:
            db = _context.sent;
            _context.next = 8;
            return db.child(ref).once('value');

          case 8:
            snapshot = _context.sent;
            return _context.abrupt('return', snapshot.val());

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function getData(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getRealTimeData = exports.getRealTimeData = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ref, callback) {
    var firebase, db;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _connect2.default)();

          case 2:
            firebase = _context2.sent;
            _context2.next = 5;
            return firebase.database().ref();

          case 5:
            db = _context2.sent;

            db.child(ref).on('value', function (snapshot) {
              callback(snapshot.val());
            });

          case 7:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function getRealTimeData(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var getAt = exports.getAt = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(ref, id) {
    var firebase, db, snapshot;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _connect2.default)();

          case 2:
            firebase = _context3.sent;
            _context3.next = 5;
            return firebase.database().ref();

          case 5:
            db = _context3.sent;
            _context3.next = 8;
            return db.child(ref).child(id).once('value');

          case 8:
            snapshot = _context3.sent;
            return _context3.abrupt('return', snapshot.val());

          case 10:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this);
  }));

  return function getAt(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

var getUserData = exports.getUserData = function () {
  var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(uid) {
    var firebase, db, user;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _connect2.default)();

          case 2:
            firebase = _context4.sent;
            _context4.next = 5;
            return firebase.database().ref();

          case 5:
            db = _context4.sent;
            _context4.next = 8;
            return db.child('users').child(uid).once('value');

          case 8:
            user = _context4.sent;
            return _context4.abrupt('return', user.val());

          case 10:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this);
  }));

  return function getUserData(_x6) {
    return _ref4.apply(this, arguments);
  };
}();

var createNews = exports.createNews = function () {
  var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(item) {
    var firebase, db;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _connect2.default)();

          case 2:
            firebase = _context5.sent;
            _context5.next = 5;
            return firebase.database().ref();

          case 5:
            db = _context5.sent;

            db.child('news').push({
              id: _lodash2.default.get(item, 'id') ? item.id : '',
              image: _lodash2.default.get(item, 'image') ? item.image : '',
              title: _lodash2.default.get(item, 'title') ? item.title : '',
              detail: _lodash2.default.get(item, 'detail') ? item.detail : '',
              createAt: (0, _moment2.default)().format()
            });

          case 7:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, _this);
  }));

  return function createNews(_x7) {
    return _ref5.apply(this, arguments);
  };
}();

var createUser = exports.createUser = function () {
  var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(user) {
    var firebase, db, userData;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return (0, _connect2.default)();

          case 2:
            firebase = _context6.sent;
            _context6.next = 5;
            return firebase.database().ref();

          case 5:
            db = _context6.sent;
            _context6.next = 8;
            return (0, _model.userModel)(user);

          case 8:
            userData = _context6.sent;

            firebase.database().ref('users/' + user.uid).set(userData);

          case 10:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, _this);
  }));

  return function createUser(_x8) {
    return _ref6.apply(this, arguments);
  };
}();

var userBookingItem = exports.userBookingItem = function () {
  var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(userKey, itemKey) {
    var firebase, db;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return (0, _connect2.default)();

          case 2:
            firebase = _context7.sent;
            _context7.next = 5;
            return firebase.database().ref();

          case 5:
            db = _context7.sent;

            db.child('userBookingItem').child(userKey + '_' + itemKey).set({
              userKey: userKey,
              itemKey: itemKey,
              createAt: (0, _moment2.default)().format()
            });

          case 7:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, _this);
  }));

  return function userBookingItem(_x9, _x10) {
    return _ref7.apply(this, arguments);
  };
}();

var updateItem = exports.updateItem = function () {
  var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(key, item) {
    var firebase, db;
    return _regenerator2.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return (0, _connect2.default)();

          case 2:
            firebase = _context8.sent;
            _context8.next = 5;
            return firebase.database().ref();

          case 5:
            db = _context8.sent;
            _context8.next = 8;
            return _lodash2.default.set(item, 'updateAt', (0, _moment2.default)().format());

          case 8:
            db.child('items').child(key).update(item);

          case 9:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, _this);
  }));

  return function updateItem(_x11, _x12) {
    return _ref8.apply(this, arguments);
  };
}();

var updateAt = exports.updateAt = function () {
  var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9(ref, key, data) {
    var firebase, db;
    return _regenerator2.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return (0, _connect2.default)();

          case 2:
            firebase = _context9.sent;
            _context9.next = 5;
            return firebase.database().ref();

          case 5:
            db = _context9.sent;
            _context9.next = 8;
            return _lodash2.default.set(data, 'updateAt', (0, _moment2.default)().format());

          case 8:
            db.child(ref).child(key).update(data);

          case 9:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, _this);
  }));

  return function updateAt(_x13, _x14, _x15) {
    return _ref9.apply(this, arguments);
  };
}();

var deleteAt = exports.deleteAt = function () {
  var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10(ref, key) {
    var firebase, db;
    return _regenerator2.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return (0, _connect2.default)();

          case 2:
            firebase = _context10.sent;
            _context10.next = 5;
            return firebase.database().ref();

          case 5:
            db = _context10.sent;

            db.child(ref).child(key).remove();

          case 7:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, _this);
  }));

  return function deleteAt(_x16, _x17) {
    return _ref10.apply(this, arguments);
  };
}();

/////////////////// STORAGE ////////////////////////

var changeProfileImage = exports.changeProfileImage = function () {
  var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11(file, uid) {
    var firebase, db, storage, storageImage, imageUrl;
    return _regenerator2.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return (0, _connect2.default)();

          case 2:
            firebase = _context11.sent;
            _context11.next = 5;
            return firebase.database().ref();

          case 5:
            db = _context11.sent;
            _context11.next = 8;
            return firebase.storage().ref();

          case 8:
            storage = _context11.sent;

            console.log('changeProfileImage', file, uid);
            _context11.next = 12;
            return storage.child('image').child('users').child(uid);

          case 12:
            storageImage = _context11.sent;
            _context11.next = 15;
            return storageImage.put(file);

          case 15:
            _context11.next = 17;
            return storageImage.getDownloadURL();

          case 17:
            imageUrl = _context11.sent;

            db.child('users').child(uid).update({ imageUrl: imageUrl });

          case 19:
          case 'end':
            return _context11.stop();
        }
      }
    }, _callee11, _this);
  }));

  return function changeProfileImage(_x18, _x19) {
    return _ref11.apply(this, arguments);
  };
}();

var uploadNewsImage = exports.uploadNewsImage = function () {
  var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee12(file, id) {
    var firebase, db, storage, storageImage, imageUrl;
    return _regenerator2.default.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return (0, _connect2.default)();

          case 2:
            firebase = _context12.sent;
            _context12.next = 5;
            return firebase.database().ref();

          case 5:
            db = _context12.sent;
            _context12.next = 8;
            return firebase.storage().ref();

          case 8:
            storage = _context12.sent;
            _context12.next = 11;
            return storage.child('image').child('news').child(id);

          case 11:
            storageImage = _context12.sent;
            _context12.next = 14;
            return storageImage.put(file);

          case 14:
            _context12.next = 16;
            return storageImage.getDownloadURL();

          case 16:
            imageUrl = _context12.sent;
            return _context12.abrupt('return', imageUrl);

          case 18:
          case 'end':
            return _context12.stop();
        }
      }
    }, _callee12, _this);
  }));

  return function uploadNewsImage(_x20, _x21) {
    return _ref12.apply(this, arguments);
  };
}();

/////////////////// AUTH ////////////////////////

var getUser = exports.getUser = function () {
  var _ref13 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee13(callback) {
    var firebase, auth;
    return _regenerator2.default.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return (0, _connect2.default)();

          case 2:
            firebase = _context13.sent;
            _context13.next = 5;
            return firebase.auth();

          case 5:
            auth = _context13.sent;

            auth.onAuthStateChanged(function (user) {
              if (user) {
                console.log('User Logined', user.email);
                callback(user);
              } else {
                console.log('User Logout');
                callback(undefined);
              }
            });

          case 7:
          case 'end':
            return _context13.stop();
        }
      }
    }, _callee13, _this);
  }));

  return function getUser(_x22) {
    return _ref13.apply(this, arguments);
  };
}();

var loginWithEmail = exports.loginWithEmail = function () {
  var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee14(email, password, callback) {
    var firebase, auth;
    return _regenerator2.default.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return (0, _connect2.default)();

          case 2:
            firebase = _context14.sent;
            _context14.next = 5;
            return firebase.auth();

          case 5:
            auth = _context14.sent;

            auth.signInWithEmailAndPassword(email, password).catch(function (error) {
              callback(error.message);
              openNotificationWithIcon('error', error.message, '');
            });

          case 7:
          case 'end':
            return _context14.stop();
        }
      }
    }, _callee14, _this);
  }));

  return function loginWithEmail(_x23, _x24, _x25) {
    return _ref14.apply(this, arguments);
  };
}();

var loginWithFacebook = exports.loginWithFacebook = function () {
  var _ref15 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee15(callback) {
    var firebase, auth, db, provider;
    return _regenerator2.default.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return (0, _connect2.default)();

          case 2:
            firebase = _context15.sent;
            _context15.next = 5;
            return firebase.auth();

          case 5:
            auth = _context15.sent;
            _context15.next = 8;
            return firebase.database().ref();

          case 8:
            db = _context15.sent;
            provider = new firebase.auth.FacebookAuthProvider();

            provider.addScope('public_profile');
            provider.addScope('email');
            provider.addScope('user_photos');
            provider.addScope('user_birthday');
            provider.setCustomParameters({
              'display': 'popup'
            });
            auth.signInWithPopup(provider).then(function (result) {
              console.log('facebookdatauser', result);
              var userMap = {
                displayName: result.user.displayName,
                // imageUrl: result.user.photoURL,
                email: result.user.email,
                uid: result.user.uid
              };
              var userDetail = {
                // firstName: result.additionalUserInfo.profile.first_name,
                // lastName: result.additionalUserInfo.profile.last_name,
                age: result.additionalUserInfo.profile.age_range.min,
                gender: result.additionalUserInfo.profile.gender
                // birthday: result.additionalUserInfo.profile.birthday,
              };
              db.child('users').child(userMap.uid).update(userMap);
              db.child('users').child(userMap.uid).child('detail').update(userDetail);
            }).catch(function (error) {
              console.log('FACEBOOK ERROR', error);
              callback(error.message);
            });

          case 16:
          case 'end':
            return _context15.stop();
        }
      }
    }, _callee15, _this);
  }));

  return function loginWithFacebook(_x26) {
    return _ref15.apply(this, arguments);
  };
}();

var logout = exports.logout = function () {
  var _ref16 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee16(callback) {
    var firebase, auth;
    return _regenerator2.default.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.next = 2;
            return (0, _connect2.default)();

          case 2:
            firebase = _context16.sent;
            _context16.next = 5;
            return firebase.auth();

          case 5:
            auth = _context16.sent;

            auth.signOut().catch(function (error) {
              callback(error.message);
              openNotificationWithIcon('error', error.message, '');
            });

          case 7:
          case 'end':
            return _context16.stop();
        }
      }
    }, _callee16, _this);
  }));

  return function logout(_x27) {
    return _ref16.apply(this, arguments);
  };
}();

var register = exports.register = function () {
  var _ref17 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee17(email, password, data, callback) {
    var firebase, auth, user;
    return _regenerator2.default.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return (0, _connect2.default)();

          case 2:
            firebase = _context17.sent;
            _context17.next = 5;
            return firebase.auth();

          case 5:
            auth = _context17.sent;
            _context17.next = 8;
            return auth.createUserWithEmailAndPassword(email, password).catch(function (error) {
              callback(error.message);
              openNotificationWithIcon('error', error.message, '');
            });

          case 8:
            user = _context17.sent;

            if (!user) {
              _context17.next = 14;
              break;
            }

            _context17.next = 12;
            return createUser(user);

          case 12:
            _context17.next = 14;
            return updateAt('users', user.uid, data);

          case 14:
          case 'end':
            return _context17.stop();
        }
      }
    }, _callee17, _this);
  }));

  return function register(_x28, _x29, _x30, _x31) {
    return _ref17.apply(this, arguments);
  };
}();

var updateUser = exports.updateUser = function () {
  var _ref18 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee18(user) {
    var firebase, auth, db;
    return _regenerator2.default.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.next = 2;
            return (0, _connect2.default)();

          case 2:
            firebase = _context18.sent;
            _context18.next = 5;
            return firebase.auth();

          case 5:
            auth = _context18.sent;
            _context18.next = 8;
            return firebase.database().ref();

          case 8:
            db = _context18.sent;
            _context18.next = 11;
            return auth.currentUser.updateProfile(user);

          case 11:
            db.child('users').child(user.uid).update(user);

          case 12:
          case 'end':
            return _context18.stop();
        }
      }
    }, _callee18, _this);
  }));

  return function updateUser(_x32) {
    return _ref18.apply(this, arguments);
  };
}();

/////////////////// NOTIFICATION //////////////////////

var openNotificationWithIcon = function openNotificationWithIcon(type, message, description) {
  _antd.notification.config({
    placement: 'bottomLeft'
  });
  _antd.notification[type]({
    message: message,
    description: description,
    style: {
      left: -30,
      bottom: -30,
      color: '#fff'
    }
  });
};