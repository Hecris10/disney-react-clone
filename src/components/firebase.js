//should import

const firebaseConfig = {
    apiKey: "AIzaSyB9smhJdmIrKz7ZY_I9q0BNTuloILzoykw",
    authDomain: "disneyplus-clone-f7deb.firebaseapp.com",
    projectId: "disneyplus-clone-f7deb",
    storageBucket: "disneyplus-clone-f7deb.appspot.com",
    messagingSenderId: "1055225803281",
    appId: "1:1055225803281:web:1d86f2cc87f8dfa25af7b0",
    measurementId: "G-BXN30GWPGF"
  };
  
const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage};
export default db;