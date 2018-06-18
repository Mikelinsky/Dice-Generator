var rollButton = document.getElementById("js-rollButton");
var result = document.getElementById("js-result");
var dice = document.getElementsByClassName("dice");


rollButton.addEventListener("click", roll);

function roll() {
    var inputElem = document.getElementById("js-numberOfRoll").value;
    
    //if (typeof inputElem == "string") {}

    for (var i = 0; i <= dice.length; i++) {
        if (dice[i].checked === true) {
            //dice[i].value;
            console.log(dice[i].value);
            console.log(dice[i].checked);
            break;
        } 
    }

    if (dice[i].value == 1) {
        console.log("mamy 1");
    } else if (dice[i].value == 2) {
        console.log("mamy 2");
    } else if (dice[i].value == 3) {
        console.log("mamy 3");
    } else if (dice[i].value == 4) {
        console.log("mamy 4");
    } else if (dice[i].value == 5) {
        console.log("mamy 5");
    } else if (dice[i].value == 6) {
        console.log("mamy 6");
    }
    

    result.innerHTML = "";
    result.innerHTML = inputElem;
    
}


