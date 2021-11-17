import "./firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup, GithubAuthProvider, onAuthStateChanged ,signOut} from "firebase/auth";

const auth = getAuth();



class AuthService {
    auth = getAuth();

    login(providerName) {

        let provider

        if (providerName === "Google") provider = new GoogleAuthProvider();
        else if (providerName === "Github") provider = new GithubAuthProvider();

        return signInWithPopup(auth, provider);
    }

    logout(){
        signOut(auth);
    }

    onAuthChange(onUserChanged) {
        onAuthStateChanged(auth, (user) => {
            onUserChanged(user)
        })
    }
}

export default AuthService;