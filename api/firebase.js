import React from 'react';
import _ from 'lodash';
// import * as firebase from 'firebase';
import cuid from 'cuid';
import moment from 'moment';

import { userModel } from './model';

import { Button, notification } from 'antd';

import connect from './connect';

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

export const getData = async (ref) => {
  const firebase = await connect()
  const db = await firebase.database().ref();
  const snapshot = await db.child(ref).once('value')
  return snapshot.val()
}

export const getRealTimeData = async (ref, callback) => {
  const firebase = await connect()
  const db = await firebase.database().ref();
  db.child(ref).on('value', snapshot => {
    callback(snapshot.val())
  })
}

export const createItem = async (item) => {
  const firebase = await connect()
  const db = await firebase.database().ref();
  db.child('items').push({
    id: _.get(item, 'id')? item.id : '',
    name: _.get(item, 'name')? item.name : '',
    detail: _.get(item, 'detail')? item.detail : '',
    createAt: moment().format(),
  })
}

export const createUser = async (user) => {
  const firebase = await connect()
  const db = await firebase.database().ref();
  const userData = await userModel(user)
  firebase.database().ref(`users/${user.uid}`).set(userData)
}

export const userBookingItem = async (userKey, itemKey) => {
  const firebase = await connect()
  const db = await firebase.database().ref();
  db.child('userBookingItem').child(`${userKey}_${itemKey}`).set({
    userKey,
    itemKey,
    createAt: moment().format(),
  })
}

export const updateItem = async (key, item) => {
  const firebase = await connect()
  const db = await firebase.database().ref();
  await _.set(item, 'updateAt', moment().format())
  db.child('items').child(key).update(item)
}

export const updateAt = async (ref, key, data) => {
  const firebase = await connect()
  const db = await firebase.database().ref();
  await _.set(data, 'updateAt', moment().format())
  db.child(ref).child(key).update(data)
}

export const deleteAt = async (ref, key) => {
  const firebase = await connect()
  const db = await firebase.database().ref();
  db.child(ref).child(key).remove()
}

/////////////////// STORAGE ////////////////////////

// export const storageVision = async (file) => {
//   const imageId = cuid();
//   const storageImage = await storage.child(imageId);
//   await storageImage.put(file);
//   const imageUri = await storageImage.getDownloadURL();

//   const res = await vision(imageUri);

//   storageImage.delete();
//   return res;
// };

/////////////////// AUTH ////////////////////////

export const getUser = async (callback) => {
  const firebase = await connect()
  const auth = await firebase.auth()
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('User Logined', user.email)
      callback(user);
    } else {
      console.log('User Logout')
      callback(undefined);
    }
  });
}

export const loginWithEmail = async (email, password, callback) => {
  const firebase = await connect()
  const auth = await firebase.auth()
  auth.signInWithEmailAndPassword(email, password)
  .catch((error) => {
    callback(error.message);
    openNotificationWithIcon('error',error.message,'');
  });
}

export const loginWithFacebook = async (callback) => {
  const firebase = await connect()
  const auth = await firebase.auth()
  const db = await firebase.database().ref()
  const provider = new firebase.auth.FacebookAuthProvider();
  
  provider.addScope('public_profile');
  provider.addScope('email');
  provider.addScope('user_photos');
  
  // provider.setCustomParameters({
  //   'display': 'popup'
  // });
  auth.signInWithPopup(provider).then((result) => {
    const userMap = {
      displayName: result.user.displayName,
      imageUrl: result.user.photoURL,
      email: result.user.email,
      uid: result.user.uid,
    }
  db.child('users').child(userMap.uid).update(userMap)
  }).catch(error => {
    console.log('FACEBOOK ERROR', error)
    callback(error.message)
  });
}

export const logout = async (callback) => {
  const firebase = await connect()
  const auth = await firebase.auth()
  auth.signOut().catch((error) => {
    callback(error.message);
    openNotificationWithIcon('error',error.message,'');
  });
}

export const register = async (email, password, data, callback) => {
  const firebase = await connect()
  const auth = await firebase.auth()
  const user = await auth.createUserWithEmailAndPassword(email, password)
  .catch((error) => {
    callback(error.message);
    openNotificationWithIcon('error',error.message,'');
  });
  if(user){
    await createUser(user)
    await updateAt('users', user.uid, data)
  }
}

export const updateUser = async (user) => {
  const firebase = await connect()
  const auth = await firebase.auth()
  const db = await firebase.database().ref()
  await auth.currentUser.updateProfile(user)
  db.child('users').child(user.uid).update(user)
}

/////////////////// NOTIFICATION //////////////////////

const openNotificationWithIcon = (type, message, description) => {
  notification.config({
    placement: 'bottomLeft',
  });
  notification[type]({
    message,
    description,
    style: {
      left: -30,
      bottom: -30,
      color: '#fff',
    },
  });
};