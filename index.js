var randomNumber1=Math.floor((Math.random())*6)+1;
var diceImage=randomNumber1+".png";
var finalImage="images/"+diceImage;
document.querySelectorAll("img")[0].setAttribute("src",finalImage);


var randomNumber2=Math.floor((Math.random())*6)+1;
var diceImage=randomNumber2+".png";
var finalImage2="images/"+diceImage;
document.querySelectorAll("img")[1].setAttribute("src",finalImage2);

if(randomNumber1>randomNumber2)
  document.querySelector("h2").textContent="Player One won🥳";
else if (randomNumber1<randomNumber2)
  document.querySelector("h2").textContent="Player Two won🥳";
else
  document.querySelector("h2").textContent="Its a tie!!!";
