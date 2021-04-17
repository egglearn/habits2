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

const SignIn = document.getElementById("SignIn");
const SignOut = document.getElementById("SignOut");

var provider = new firebase.auth.GoogleAuthProvider();

function googleSignin() {
  firebase
    .auth()

    .signInWithPopup(provider)
    .then(function (result) {
      var token = result.credential.accessToken;
      var user = result.user;

      console.log(token);
      console.log(user);
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(error.code);
      console.log(error.message);
    });
}

function googleSignout() {
  firebase
    .auth()
    .signOut()

    .then(
      function () {
        console.log("Signout Succesfull");
      },
      function (error) {
        console.log("Signout Failed");
      }
    );
}

SignIn.addEventListener("click", googleSignin);
SignOut.addEventListener("click", googleSignout);
//

var habitsRef = firebase.database().ref("habits");

function writeUserData(e) {
  e.preventDefault();

  playersRef.push({
    habit: data,
    completed: "hockey",
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

let showHabit = document.getElementById("showHabit");

showHabit.addEventListener("click", reader);
