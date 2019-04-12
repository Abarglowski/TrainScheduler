$(document).ready(function(){
    var config = {
    
    };
    
    firebase.initializeApp(config);

    var database = firebase.database();    
    
    $("#submit").on("click", function (event) {
    
      event.preventDefault();

      var = $("#Name").val().trim();
      var = $("#Destination").val().trim();
      var = $("#FirstTrain").val().trim();
      var = $("#Frequency").val().trim();
    
      var TrainInfo = {
        Name: ,
        Destination:,
        FirstTrain: Frequency,
        Frequency: Arrival 
    };
    
      database.ref().push(TrainInfo);
    
      $("#Train-Name").val("");
      $("#Destination").val("");
      $("#FirstTrain").val("");
      $("#Frequency").val("");
    
      return false;
    });

    
    });