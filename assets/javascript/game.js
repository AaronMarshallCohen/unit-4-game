

  // Generate random target number
  

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

   var targetNumber = getRandomInt(19, 120);


  // Here we set the "number-to-guess" header to match the "targetNumber".
  // Eventually this will allow us to change the HTML to match the value in the JavaScript.
  $("#number-to-guess").text(targetNumber);
  
  // Here we created a counter, we'll be using this to track the user's total.
  var userCounter = 0;
  var winCounter = 0;
  var lossCounter = 0;

 //Get a random number between 1 and 12 for each crystal
  var redCrystalNumber = getRandomInt(1, 12); 
  var blueCrystalNumber = getRandomInt(1, 12);
  var yellowCrystalNumber = getRandomInt(1, 12);
  var greenCrystalNumber = getRandomInt(1, 12);


  // Here we'll create crystal html
  var redCrystal = $('<img>');
  redCrystal.addClass("crystal-image");
  redCrystal.attr("src", "assets/images/redcrystal.png");

  var blueCrystal = $('<img>');
  blueCrystal.addClass("crystal-image");
  blueCrystal.attr("src", "assets/images/bluecrystal.png");

  var yellowCrystal = $('<img>');
  yellowCrystal.addClass("crystal-image");
  yellowCrystal.attr("src", "assets/images/yellowcrystal.png");

  var greenCrystal = $('<img>');
  greenCrystal.addClass("crystal-image");
  greenCrystal.attr("src", "assets/images/greencrystal.png");




  // this is important so we can pull it out in the click event:
  redCrystal.attr("data-crystalvalue", redCrystalNumber);
  blueCrystal.attr("data-crystalvalue", blueCrystalNumber);
  yellowCrystal.attr("data-crystalvalue", yellowCrystalNumber);
  greenCrystal.attr("data-crystalvalue", greenCrystalNumber);


  // add crystal to the page
  $("#crystals").append(redCrystal);
  $("#crystals").append(blueCrystal);
  $("#crystals").append(yellowCrystal);
  $("#crystals").append(greenCrystal);

  
$("#score").text("Score: " + userCounter);
$("#wins").text("Wins: " + winCounter);
$("#losses").text("Losses: " + lossCounter);


  // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal-image").on("click", function() {
    // pull the data out of the html
    var increment = parseInt($(this).attr("data-crystalvalue"));

// We'll then increment the counter each time by the randomly selected number.
   
    userCounter += increment;

 // We then output the new counter value each time the crystal is clicked.
 $("#score").text("Score: " + userCounter);


// Here we created some logic to "check" if the click counter matches the targetNumber.
    // Remember, this click event will be triggered with each click.
    // With each click the counter will increase by 10 and be re-evaluated against target.
    if (userCounter === targetNumber) {

// If the numbers match we'll celebrate the user's win.

alert("You win!!");
winCounter++;
$("#wins").text("Wins: " + winCounter);
reset();

}

// Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
else if (userCounter >= targetNumber) {

// Then they are alerted with a loss.

alert("You lose!!");
lossCounter++;
$("#losses").text("Losses: " + lossCounter);
reset();


}

// reset targetNumber and crystal Numbers
function reset(){
  userCounter = 0;
  $("#score").text("Score: " + userCounter);
  redCrystalNumber = getRandomInt(1, 12); 
  blueCrystalNumber = getRandomInt(1, 12);
  yellowCrystalNumber = getRandomInt(1, 12);
  greenCrystalNumber = getRandomInt(1, 12);
  targetNumber = getRandomInt(19, 120);
  $("#number-to-guess").text(targetNumber);
  

}



});
