import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyAnOtluGRVFG8lBNaQOVoqiH1Lu5GCmlus",
    authDomain: "psankhle-ecomm.firebaseapp.com",
    projectId: "psankhle-ecomm",
    storageBucket: "psankhle-ecomm.appspot.com",
    messagingSenderId: "750337458419",
    appId: "1:750337458419:web:03088ca634b4cdd038f786",
    measurementId: "G-EVC8MPDNYR"
};


firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(e){
            console.log('error creating user ', e.message);
        }
        
    }
    return userRef;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();



const provider = new firebase.default.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;