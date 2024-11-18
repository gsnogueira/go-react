import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { environment } from '../environments/environment';

if (!firebase.apps.length) {
    firebase.initializeApp(environment.firebase);
}

export const auth = firebase.auth();

const AuthService = {
    signUp: async (email: string, password: string) => {
        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            return userCredential.user;
        } catch (error) {
            throw error;
        }
    },

    signIn: async (email: string, password: string) => {
        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            return userCredential.user;
        } catch (error) {
            throw error;
        }
    },

    signOut: async () => {
        try {
            await auth.signOut();
        } catch (error) {
            throw error;
        }
    },

    getCurrentUser: () => {
        return auth.currentUser;
    },
    
    updatePassword: async (newPassword: string) => {
        const user = auth.currentUser;
        if (user) {
            try {
                await user.updatePassword(newPassword);
            } catch (error) {
                throw error;
            }
        } else {
            throw new Error("No user is currently signed in.");
        }
    }
};

export default AuthService;