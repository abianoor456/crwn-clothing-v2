import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsZeFPd0CstSKY7gzNg96w2Mu0BaEtua0",
    authDomain: "crwn-clothing-db-83f1e.firebaseapp.com",
    projectId: "crwn-clothing-db-83f1e",
    storageBucket: "crwn-clothing-db-83f1e.appspot.com",
    messagingSenderId: "1016124812675",
    appId: "1:1016124812675:web:3cf0b63845662c12629ab6"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (user, additionalInfo = {}) => {
    console.log('user', user.uid)
    let userDocRef
    try {
        userDocRef = doc(db, 'users', user.uid);
    } catch (e) {
        console.log('error while creating document', e.message);
    }
    console.log(userDocRef);

    const userExists = await getDoc(userDocRef)
    console.log(userExists.exists());
    if (!userExists.exists()) {
        const { displayName, email } = user;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        } catch (e) {
            console.log('Error while creating user: ', e.message);
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return createUserWithEmailAndPassword(auth, email, password);

}

export const signInWithGoogleEmailAndPassword = (email, password) => signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        return user;
    })
    .catch((error) => {
        console.log('Error while signing in with email and password: ', error.message);
        if (error.message === 'Firebase: Error (auth/user-not-found).') {
            alert('Incorrect credentials')
        }
    });
