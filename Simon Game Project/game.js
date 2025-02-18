var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 1;


function StartGame() {
  $(document).off('keydown').on("keydown", function() {
      if (level === 1) {
        nextSequence();
      }
  });
}

if (level === 1) {
  StartGame();
}

function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  $("h1").text("Level " + level);
  level++;
}

$('.btn').on("click", function() {
    var userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);

}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        
        startOver();
    }
}

function startOver(){
    level = 1;
    gamePattern = [];
    userClickedPattern = [];
    StartGame();
}








