//Firebase
import {initializeApp} from 'firebase/app';
import { 
    getFirestore,
    doc,
    collection, 
    setDoc,
    getDocs 
} from "firebase/firestore"; 
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";

//Error
import{error} from "./Error.js"

const firebaseConfig = {
    apiKey : process.env.VUE_APP_API_KEY,
    authDomain : process.env.VUE_APP_AUTH_DOMAIN,
    projectId : process.env.VUE_APP_PROJECT_ID,
    storageBucket : process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId : process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId : process.env.VUE_APP_APP_ID,
    measurementId : process.env.VUE_APP_MESUREMNER_ID
};
const firestoreApp = initializeApp(firebaseConfig);
const firestoreDatabase = getFirestore(firestoreApp);
const auth = getAuth();
const getError = error;

export const firebase = {
    data(){
        return{}
    },
    methods:{
        firebaseReturn(success, data, errorCode){
            return {
                success: success,
                data: data,
                errorCode: errorCode,
            };
        },
        getCollection : function(collectionName){
            return collection(firestoreDatabase, collectionName);
        },
        getDocument : async function(collectionName) {
            const document = await getDocs(this.getCollection(collectionName));
            if(document.docs != undefined){
                var result = document.docs.map(x => {return{
                    key : x.id,
                    data : x.data()
                }}); 
                return result;
            }else {return undefined;}
        },
        setDocument : async function(collectionName, data, id){
            try{
                setDoc(doc(firestoreDatabase, collectionName, id), data);
                return true;
            }catch(error){
                console.log("error : ", error);
                return false;
            }
            

        },
        createNewUser : async function(email, password, firstName, lastName){ 
            return createUserWithEmailAndPassword(auth, email, password)
                .then((res) => {
                    console.log("res", res);
                // Signed in 
                this.$global.commit("setUserToken", res.user.accessToken);
                this.$global.commit("setUserEmail", res.user.email);
                
                var userDataObject = {
                    email : email,
                    firstName : firstName,
                    lastName : lastName,
                    address : [],
                    credit : 0,
                    currentCartItem : [],
                    phoneNumber : "",
                }
                this.setDocument("user", userDataObject, res.user.uid).then(res => {
                    if(res){
                        this.$router.push({name: "home"});
                    }
                });

                // ...
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("error", error);
                // ..
            });
        },
        firebaseLogin : function(email, password){
            return signInWithEmailAndPassword(auth, email, password);
        }
    }
}

