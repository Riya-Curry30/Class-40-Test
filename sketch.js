var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers = [];
var distance = 0;
var database;
var finishedPlayers = 0;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1_Image, car2_Image, car3_Image, car4_Image;
var ground_Image, track_Image;
var bronze, silver, gold;

var passedFinish;

function preload()
{
   car1_Image = loadImage("images/car1.png");
   car2_Image = loadImage("images/car2.png");
   car3_Image = loadImage("images/car3.png");
   car4_Image = loadImage("images/car4.png");
   ground_Image = loadImage("images/ground.png");
   track_Image = loadImage("images/track.jpg");
   bronze = loadImage("images/bronze.png");
   silver = loadImage("images/silver.png");
   gold = loadImage("images/gold.png");

}

function setup()
{
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw()
{
  if(playerCount === 4 && finishedPlayers === 0)
  {
    game.update(1);
  }

  if(gameState === 1)
  {
    clear();
    game.play();
  }

  if(finishedPlayers === 4)
  {
    game.update(2);
  }
  
  if(gameState === 2 && finishedPlayers === 4)
  {
    game.displayRanks();
  }

}

