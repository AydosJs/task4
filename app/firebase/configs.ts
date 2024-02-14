import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBDmuGZy1qlldsFnkF0jmMdZBSpuVep4Ow",
    authDomain: "task-d0c30.firebaseapp.com",
    projectId: "task-d0c30",
    storageBucket: "task-d0c30.appspot.com",
    messagingSenderId: "269355587325",
    appId: "1:269355587325:web:0b8e7890805be02bd8d094",
    measurementId: "G-78MK5ZYHSW"
};

const app = getApps()[0] ?? initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth}