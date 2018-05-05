
// 1. Initialize Firebase
alert("hey fool");
var config = {
    authDomain: "myfirstprojectaed.firebaseapp.com",
    databaseURL: "https://myfirstprojectaed.firebaseio.com",
    projectId: "myfirstprojectaed",
    storageBucket: "myfirstprojectaed.appspot.com",
    messagingSenderId: "759722219307"
};

firebase.initializeApp(config);

var database = firebase.database();

var trainName;
var destination;
var firstTrianTime;
var frequency;

//   buttons fot adding trains
$("#addTrainButton").on("click", function (event) {
    event.preventDefault();
    // Grabs user input
    trainName = $("#trainNameInput").val().trim();
    destination = $("#destinationInput").val().trim();
    firstTrianTime = moment($("#firstTrainTimeInput").val().trim(),"hh:mm").format("X");
    frequency = $("#frequencyInput").val().trim();

    // Creates local "temporary" object for holding train data
  var newTrains = {
    name: trainName,
    destination: destination,
    nextArrival: firstTrianTime,
    frequency: frequency
  };

  database.ref().push(newTrains);

//   console.log(newTrains.name);
//   console.log(newTrains.destination);
//   console.log(newTrains.nextArrival);
//   console.log(newTrains.frequency);

//   clears out text-boxes
$("#trainNameInput").val("");
$("#destinationInput").val("");
$("#firstTrainTimeInput").val("");
$("#frequencyInput").val("");

});

// firebase event fo adding trains to database and row in the html when user adds entry

database.ref().on("child_added", function(childSnapshot, prevChildKey){
    console.log(childSnapshot.val());
    // store evertything into a variable
    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().destination;
    var newTrains = childSnapshot.val().firstTrianTime;
    var frequency = childSnapshot.val().frequency;
    
    addRow();

    function addRow() {
        $("#trainScheduleTable > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
firstTrianTime + "</td><td>" + frequency + "</td><td>");
    }
});

