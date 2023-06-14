// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8GpKdcWL6yMIOrT-6RjQz0_6ioWLUhCw",
    authDomain: "incident-app-42f1b.firebaseapp.com",
    projectId: "incident-app-42f1b",
    storageBucket: "incident-app-42f1b.appspot.com",
    messagingSenderId: "210623679541",
    appId: "1:210623679541:web:c3e219f8ad771a956ff57c",
    measurementId: "G-2VWCRLFCNM"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

function submit() {

    const incidentType = document.getElementById("inputState").value

    if (incidentType === '') {
        alert('please select the type of incident')
        return;
    }

    const incidentTime = document.getElementById("datetime").value;
    if (incidentTime.trim() === "") {
        alert('please enter the date and time')
        return;
    }

    const incidentLocation = document.getElementById("location").value;
    if (incidentLocation.trim() === "") {
        alert('please enter the location of the incident')
        return;
    }

    const incidientImage = document.getElementById("inputGroupFile02").value;
    if (incidientImage.trim() === "") {
        alert('please you are required to insert an image')
        return;
    }

    const repoterEmail = document.getElementById("email").value;
    if (repoterEmail.trim() === "") {
        alert('please enter your email')
        return;
    }

    const repoterName = document.getElementById("name").value

    if (repoterName.trim() === "") {
        alert('please enter your name')
        return;
    }

    const incidentDescription = document.getElementById("Textarea1").value
    if (incidentDescription.trim().length === "") {
        alert('please enter your email')
    }

    const incident = {
        incidentReportTime: incidentTime,
        incidentReportLocation: incidentLocation,
        incidentReportImage: incidientImage,
        incidientReportEmail: repoterEmail,
        incidentReportName: repoterName,
        incidentSceneDescription: incidentDescription,

    }
    var database = firebase.database();
    database.ref('sommieREPORT').push().set(incident);




    document.getElementById("inputState").value = "";
    document.getElementById("datetime").value = "";
    document.getElementById("location").value = "";
    document.getElementById("inputGroupFile02").value = "";
    document.getElementById("email").value = "";
    document.getElementById("name").value = "";
    document.getElementById("Textarea1").value = "";

}






































