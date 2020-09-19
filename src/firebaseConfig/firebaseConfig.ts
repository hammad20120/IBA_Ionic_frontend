import * as firebase from "firebase";
import { toast } from "./toast";
import { Created_At } from "./toast";

var firebaseConfig = {
  apiKey: "AIzaSyDz-co1vdvQQCypW7VKFo7vEFkObZMDG_I",
  authDomain: "resource-management-210d6.firebaseapp.com",
  databaseURL: "https://resource-management-210d6.firebaseio.com",
  projectId: "resource-management-210d6",
  storageBucket: "resource-management-210d6.appspot.com",
  messagingSenderId: "834966760115",
  appId: "1:834966760115:web:4429004075a959f70b1ec6",
  measurementId: "G-E0QEH7L5MK",
};

firebase.initializeApp(firebaseConfig);

export async function loginUser(email: string, password: string) {
  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    console.log(res);
    return true;
  } catch (error) {
    toast(error.message, 4000);
    return false;
  }
}

export async function registerUser(
  displayName: string,
  email: string,
  password: string
) {

  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = firebase.auth().currentUser;
        if (user) {
          user.updateProfile({
            displayName: displayName,
          });
        }
      })
      .then(() => {
        var Joined_Crisis = "";
        firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          firebase
            .database()
            .ref("users")
            .child(user.uid)
            .set({
              email:  user.email,
              Created_At,
              Joined_Crisis,
              username: user.displayName,
            });
        }
      });
      });

    console.log(res);
    return true;
  } catch (error) {
    toast(error.message, 4000);
    return false;
  }
}

export function signout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.assign("/login");
    });
}

export function check() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("logged in");
      console.log(user.displayName);
    } else {
      console.log("logged out");
    }
  });
}
