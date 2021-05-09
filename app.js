
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCZjmK8CZn-TIESUA2hedgxBp55iipRzs0",
    authDomain: "login-b5518.firebaseapp.com",
    projectId: "login-b5518",
    storageBucket: "login-b5518.appspot.com",
    messagingSenderId: "204151130939",
    appId: "1:204151130939:web:95b98ee8ac46b64dc5051e",
    measurementId: "G-NFPR4BT63K"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const auth = firebase.auth();
    
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("ingresado");

}
)

