import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const userAuthentication=()=>{
    initializeApp(firebaseConfig);
}
export default userAuthentication;