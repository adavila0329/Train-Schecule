
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

//   buttons fot adding trains
$("#add-employee-btn").on("click", function (event) {
    event.preventDefault();
    // Grabs user input
    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var firstTrianTime = moment($("#firstTrainTimeInput").val().trim(),"hh:mm").format("X");
    var frequency = $("#frequencyInput").val().trim();

    // Creates local "temporary" object for holding train data
  var newTrains = {
    name: trainName,
    destination: destination,
    nextArrival: firstTrianTime,
    frequency: frequency
  };

  database.ref().push(newTrains);

  console.log(newTrains.name);
  console.log(newTrains.destination);
  console.log(newTrains.nextArrival);
  console.log(newTrains.frequency);

//   clears out text-boxes
$("#trainNameInput").val("");
$("#destinationInput").val("");
$("#firstTrainTimeInput").val("");
$("#frequencyInput").val("");


$("#trainScheduleTable > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
firstTrianTime + "</td><td>" + frequency + "</td><td>");

});
