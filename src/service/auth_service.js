import firebaseApp from "./firebase";
import { GoogleAuthProvider,getAuth,signInWithPopup ,GithubAuthProvider} from "firebase/auth";

const auth = getAuth();



class AuthService {
    login(providerName) {
        const auth = getAuth();
        let provider

        if(providerName === "Google") provider = new GoogleAuthProvider();
        else if(providerName === "Github") provider = new GithubAuthProvider();
        
        return signInWithPopup(auth, provider);
    }
}

export default AuthService;