"use strict";

// alert("connected")

// create an eventlistner;
// document.getElementById("check").onclick = action;
document.getElementById("check").addEventListener("click", checkGuess);
document.getElementById("newGame").addEventListener("click", newGame);


 //Declare Variable
 let pickedNumber = 0;
 const maxTries = 10;
 let count = 0;
 let gameOver = false;


 // call function 
newGame();

// console.log(pickedNumber)

// let answer = pickedNumber * 100;
// console.log(parseInt(answer));

function checkGuess() {

    let message = "";
    // Get the user's guess from textbox
    const userGuess = parseInt(document.getElementById("guess").value);
    console.log("userGuess is " + userGuess);
    console.log(typeof (userGuess));
    



    // Compare guess to pickedNumber
    if ( pickedNumber == userGuess) {
        message = "Correct";
        // signal that I won
        gameOver = true;
        //re- enable new game button
        document.getElementById("newGame").disabled = false;
    }

    else if(userGuess < pickedNumber) {
        message = "Too low!";
    }

    else{
        message = "Too high!"
    }
    //Increment counter
    count++;  // count = count + 1, count += 1;
    //console.log("message is " + message);
    //Check if I am out of tries
    if (count == maxTries && gameOver == false) {
        message = "Sorry, out of turns, the number was " + pickedNumber;
        document.getElementById("newGame").disabled = false;
    }

    //Displace message of "Correct"  or "not correct"
    document.getElementById("msg").textContent = message;
}

function newGame() {
    console.log("new game");
    document.getElementById("newGame").disabled = true;
    document.getElementById("msg").textContent = " ";

    // pick a Number
    
// Generate random number between 1 and 100;
 pickedNumber = 1 + Math.floor(Math.random() * 100);
console.log(pickedNumber);
console.log(typeof(pickedNumber));

    count = 0;
    gameOver = false;


}








// // ====================
// // FirstTrial
// // ====================
// function checkGuess() {
//     //verify it is connected properly
//     //console.log("You are gooding well!")

//     // get the user's guess from textbox
//     const guess = document.getElementById("guess").value;
//     console.log(guess);

//     //compare guess to pickednumber
//     if (guess === pickedNumber) {
//         document.getElementById("msg").textContent = ` Your Number is too high!`;
//         // console.log("guess is bigger")
//     }
//     else if(guess === pickedNumber) {
//         document.getElementById("msg").textContent = `Your number is too low!`;
//         // console.log("pickedNumber is bigger")
//     }
//     else {
//         document.getElementById("msg").innerHTML = "You guess right!";
//     }

//     // let compare = guess >= pickedNumber;
//     // console.log(compare);


//     // display message of "correct" or "Not correct"
  
// }
