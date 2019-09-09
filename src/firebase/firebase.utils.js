import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

//Firebase Config and Initializtion
const config = {
    apiKey: "AIzaSyDKsu6X0un0kaOiHXtFH-_YEIx6gzvz-ts",
    authDomain: "to-the-table.firebaseapp.com",
    databaseURL: "https://to-the-table.firebaseio.com",
    projectId: "to-the-table",
    storageBucket: "",
    messagingSenderId: "932030831173",
    appId: "1:932030831173:web:0e8493e22bbda3a4b8612c"
}
firebase.initializeApp(config);
export const auth = firebase.auth()
export const firestore = firebase.firestore()


//google Oauth config
const  provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
auth.useDeviceLanguage();

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    //creates firestore document reference for user
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    //gets user doc
    const snapShot = await userRef.get();

    //if no user create one
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch(error) {
            console.log(`Error Creating User ${error.message}`);
        }
    }
    //return user referrence
    return userRef;
}


export default firebase;