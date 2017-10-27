// Initialize Firebase
  var config = {
    apiKey: "AIzaSyB9I4FBb69jUfxRN6gx8sg_VZkhJJ6ZReU",
    authDomain: "train-times-85f85.firebaseapp.com",
    databaseURL: "https://train-times-85f85.firebaseio.com",
    projectId: "train-times-85f85",
    storageBucket: "train-times-85f85.appspot.com",
    messagingSenderId: "729060989795"
  };

  firebase.initializeApp(config);

var database = firebase.database();

$("#submit").on("click",function(){
	var trainName = $("#trainName").val().trim();
	var destination = $("#destination").val().trim();
	var trainTime = $("#trainTime").val().trim();
	var frequency = $("#frequency").val().trim();
	var newTrain = {
		trainName: trainName,
		destination: destination,
		trainTime: trainTime,
		frequency: frequency
	};
	database.ref().push(newTrain);
})

 database.ref().on("child_added", function(snapshot) {
 	var trainName = snapshot.val().trainName;
 	var destination = snapshot.val().destination;
 	var trainTime = snapshot.val().trainTime;
 	var frequency = snapshot.val().frequency;


 	$("tbody").append("<tr><td>"+trainName+"</td><td>"+destination+"</td><td>"+frequency+"</td><td>01:30 PM</td><td>10</td></tr>")
 });