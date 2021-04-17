var firebaseConfig = {
  apiKey: "AIzaSyCR5ZwXAjWfft2QgqJfbREISonxYsftTbs",
  authDomain: "habits-4ad0c.firebaseapp.com",
  projectId: "habits-4ad0c",
  databaseURL:
    "https://habits-4ad0c-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "habits-4ad0c.appspot.com",
  messagingSenderId: "588630235509",
  appId: "1:588630235509:web:213a6b2c7b47612662db3c",
};

const signIn = document.getElementById("signIn");
const signOut = document.getElementById("signOut");

let showHabit = document.getElementById("showHabit");
let writer = document.getElementById("habitInput");

var provider = new firebase.auth.GoogleAuthProvider();
firebase.initializeApp(firebaseConfig);

function googleSignIn() {
  //var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      console.log("i ran");
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}

function googleSignOut() {
  // [START auth_sign_out]
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      console.log("sign out successful");
    })
    .catch((error) => {
      // An error happened.
    });
  // [END auth_sign_out]
}

signIn.addEventListener("click", googleSignIn);
signOut.addEventListener("click", googleSignOut);
//

var habitsRef = firebase.database().ref("habits");

function writeUserData(e) {
  e.preventDefault();
  let data = habitInput.value;

  playersRef.push({
    habit: data,
    completed: 1,
  });
}

function reader() {
  habitsRef.on("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      let datas = childSnapshot.val().name;
      const test = document.createElement("div");
      test.textContent = datas;
      container.appendChild(test);
    });
  });
}

showHabit.addEventListener("click", reader);
