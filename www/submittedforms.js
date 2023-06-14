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


function loadData(data) {
    let html = ``;

    //create a loop to walk through our data

    for (let i in data) {
        let incident = data[i];
        html += `
    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${incident.incidentReportName}</h5>
                <small class="text-muted">${incident.incidentReportTime}</small>
            </div>
            <p class="mb-1">${incident.incidentSceneDescription}</p>
            <small class="text-muted">${incident.incidentReportLocation}</small>
        </a>
    `
    }

    let el = document.getElementById("topCon");
    el.innerHTML = html;


}



var database = firebase.database();
database.ref('sommieREPORT').once('value').then(function (folder) {
    let data = [];
    folder.forEach(function (subfolder) {
        let incident = subfolder.val();
        data.push(incident);
    });
    loadData(data);
});




























// {
//     name: "Donec id elit non mi porta.",
//     description: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius",
//     location: "Location of incident",
//     date:"21st June 2023"
// }