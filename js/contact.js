// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD-NySDrsOLbPQodZHBDAvHKW96ppF7nPU",
    authDomain: "projectx-29873.firebaseapp.com",
    databaseURL: "https://projectx-29873.firebaseio.com",
    projectId: "projectx-29873",
    storageBucket: "projectx-29873.appspot.com",
    messagingSenderId: "211729373973"
  };
  firebase.initializeApp(config);

 // References the messages collection
var messagesRef = firebase.database().ref('messages');

// Save message to firebase
function saveMessage(name, CIN, email, pwd){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    CIN:CIN,
    email:email,
    pwd:pwd
  });
}

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}


function submitForm(e){
    e.preventDefault();
    // Get values
    var name = getInputVal('Name');
    var CIN = getInputVal('CIN');
    var email = getInputVal('email');
    var pwd = getInputVal('pwd');
    saveMessage(name, CIN, email, pwd);
    
    // Clear form
	document.getElementById('contactForm').reset();

	// Show alert
	document.querySelector('.alert').style.display = 'block';
	
	// Hide alert after 3 seconds
	setTimeout(function(){
	  document.querySelector('.alert').style.display = 'none';
	},3000);
	
}