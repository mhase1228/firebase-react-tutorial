import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCSpGDTe_6nmIJBO8WWvmYbtmS5w2l_q98",
    authDomain: "fir-react-tutorial-64c5e.firebaseapp.com",
    projectId: "fir-react-tutorial-64c5e",
    storageBucket: "fir-react-tutorial-64c5e.appspot.com",
    messagingSenderId: "553259821948",
    appId: "1:553259821948:web:7b62ee59a8d88e386812f9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

