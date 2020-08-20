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
export const auth = firebase.auth();
export const firestore = firebase.firestore();


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

export const createEvent = async (eventData) => {
    console.log(eventData)
   try{
        const res = await firestore.collection(`events`).add(eventData);
        console.log('Added document with ID: ', res.id);
        return res;
  
   } catch(e){
       console.error('error creating Event' + e.message)
       return null;
   }
}

export const updateNewEvent = async (eventData) => {
    try{
     let res = await firestore.doc(`events/${eventData.id}`).update({id:eventData.id});
      return eventData.id;
  
    }catch(e){
        console.error('error creating Event' + e.message)
        return null;
    }
}

    export const getUserByEmail = async (userEmail) => {
        const userRef = firestore.collection(`users`);
        const queryRef = await userRef.where('email', '==', userEmail).get();
        console.log(queryRef)
        // queryRef.docs.forEach(doc => {
        //  console.log(doc.id);
        //  console.log(doc.data());
        // });

        return queryRef.docs[0].data();
        }

    export const getEventsByUserEmail = async (userEmail) => {
        console.log('service called')
        let eventList = {}
        const eventRef = firestore.collection('events');
        const queryRef = await eventRef.where('creator', '==', userEmail).get()
        queryRef.docs.forEach(doc => {
         eventList[doc.id] = doc.data()
        });
       console.log('Service Events');
       console.log(eventList);
        return eventList;
    }


export default firebase;