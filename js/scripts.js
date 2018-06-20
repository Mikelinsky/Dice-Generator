var rollButton = document.getElementById("js-rollButton");
var resultArea = document.getElementById("js-result");
var dice = document.getElementsByClassName("dice");
var bankForRolls = [];

rollButton.addEventListener("click", roll);

function roll() {
    var inputElem = document.getElementById("js-numberOfRoll").value;

    for (var i = 0; i <= dice.length; i++) {
        if (dice[i].checked === true) {
            dice[i].value;
            break;
        } 
    }
    
    resultArea.innerHTML = "";
    bankForRolls = [];
    
    if (dice[i].value == 1) {
        for (var j = 0; j < inputElem; j++) {
            var d4 = Math.floor(Math.random() * 4) + 1;
            bankForRolls.push(d4);
            console.log("d4 is rolling");
        }
    } else if (dice[i].value == 2) {
        for (var j = 0; j < inputElem; j++) {
            var d6 = Math.floor(Math.random() * 6) + 1;
            bankForRolls.push(d6);
            console.log("d6 is rolling");
        }
    } else if (dice[i].value == 3) {
        for (var j = 0; j < inputElem; j++) {
            var d8 = Math.floor(Math.random() * 8) + 1;
            bankForRolls.push(d8);
            console.log("d8 is rolling");
        }
    } else if (dice[i].value == 4) {
        for (var j = 0; j < inputElem; j++) {
            var d10 = Math.floor(Math.random() * 10) + 1;
            bankForRolls.push(d10);
            console.log("d10 is rolling");
        }
    } else if (dice[i].value == 5) {
        for (var j = 0; j < inputElem; j++) {
            var d12 = Math.floor(Math.random() * 12) + 1;
            bankForRolls.push(d12);
            console.log("d12 is rolling");
        }
    } else if (dice[i].value == 6) {
        for (var j = 0; j < inputElem; j++) {
            var d20 = Math.floor(Math.random() * 20) + 1;
            bankForRolls.push(d20);
            console.log("d20 is rolling");
        }
    } 
    console.log(bankForRolls);

    function getSum(total, num) {
        return total + num;
    }
    var result = bankForRolls.reduce(getSum);
    resultArea.innerHTML = result;
}