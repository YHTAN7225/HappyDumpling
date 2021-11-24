//Firebase
import {initializeApp} from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID,
    measurementId: process.env.VUE_APP_MESUREMNER_ID
};
const firestoreApp = initializeApp(firebaseConfig);
const firestoreDatabase = getFirestore(firestoreApp);

export const firebase = {
    data(){
        return{

        }
    },
    methods:{
        getCollection : function(collectionName){
            return collection(firestoreDatabase, collectionName);
        },
        getDocument : async function(collectionName) {
            const document = await getDocs(this.getCollection(collectionName));
            console.log(document.docs.map(x => {return{key : x.id,data : x.data()}}));
            return document.docs.map(x => {return{
                key : x.id,
                data : x.data()
            }});
        },
    }
}

