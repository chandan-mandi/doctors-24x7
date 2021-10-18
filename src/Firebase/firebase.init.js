import { initializeApp } from "firebase/app";
import { AuthContext } from "../AuthoProvider/AuthProvider";

const initializeAuthentication = () => {
    return initializeApp(AuthContext)
}

export default initializeAuthentication;