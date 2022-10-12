var container = document.createElement('main');
container.className = 'container';
document.body.appendChild(container);
var newDice = [];
var sum = 0;
var Die = /** @class */ (function () {
    function Die() {
        this.div = document.createElement('div');
        this.div.className = "die";
        // this.div.id = count;
        this.value = document.createTextNode(this.roll().toString());
        this.div.appendChild(this.value);
        container.appendChild(this.div);
    }
    Die.prototype.roll = function () {
        return Math.floor(Math.random() * (6)) + 1;
    };
    return Die;
}());
var diceGenerate = document.getElementById("dice-generate");
diceGenerate.addEventListener('click', function () {
    var createdDice = new Die();
    newDice.push(createdDice);
});
var diceRoll = document.getElementById("dice-roll");
diceRoll.addEventListener('click', function () {
    for (var i = 0; i < newDice.length; i++) {
        var nextRoll = newDice[i].roll();
        newDice[i].div.textContent = nextRoll;
        console.log('the value of sum is: ' + sum);
    }
});
// let sumDice = document.getElementById("sum-dice");
// sumDice.addEventListener('click', function() {
//     for(let i = 0; i < newDice.length; i++) {
//         console.log('the value of sum is: ' + sum);
//         sum = sum + Number(newDice[i].value.data);
//         if (i === (newDice.length - 1)) {
//             console.log('the final value of sum is: ' + sum);
//         }
//     }
// })
