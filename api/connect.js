export default async function connect() {
  const firebase = await import('firebase')
  const config = {
    apiKey: "AIzaSyC6GTc804atfohHaaVcot7QNoL69_S56gM",
    authDomain: "smallworld-6e42d.firebaseapp.com",
    databaseURL: "https://smallworld-6e42d.firebaseio.com",
    projectId: "smallworld-6e42d",
    storageBucket: "smallworld-6e42d.appspot.com",
    messagingSenderId: "965017184841"
  };
  try {
    firebase.initializeApp(config)
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }

  return await firebase
}