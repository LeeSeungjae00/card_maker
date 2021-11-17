import "./firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup, GithubAuthProvider, onAuthStateChanged ,signOut} from "firebase/auth";
class AuthService {
    auth = getAuth();

    login(providerName) {

        const provider = this.getProvider(providerName);

        return signInWithPopup(this.auth, provider);
    }

    logout(){
        signOut(this.auth);
    }

    onAuthChange(onUserChanged) {
        onAuthStateChanged(this.auth, (user) => {
            onUserChanged(user)
        })
    }
    
    getProvider(providerName){
        switch(providerName){
            case 'Google' : 
            return new GoogleAuthProvider();
            case 'Github' : 
            return new GithubAuthProvider();
            default :
            throw new Error(`not supported provider : ${providerName}`);
        }
    }
}

export default AuthService;