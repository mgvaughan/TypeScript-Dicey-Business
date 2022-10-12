const container = document.createElement('main');
container.className = 'container'
document.body.appendChild(container);
let newDice = [];
let sum: number = 0;

class Die {

    public div: HTMLDivElement;
    public value: Text;

    constructor() {
        this.div = document.createElement('div');
        this.div.className = "die";
        // this.div.id = count;
        this.value = document.createTextNode(this.roll().toString());
        this.div.appendChild(this.value);
        container.appendChild(this.div);
    }
    roll () {
        return Math.floor(Math.random() * (6)) + 1;
    } 
}

let diceGenerate = document.getElementById("dice-generate")
diceGenerate.addEventListener('click', function() {
    let createdDice = new Die();
    newDice.push(createdDice);
})

let diceRoll = document.getElementById("dice-roll")
diceRoll.addEventListener('click', function() {
    for(let i = 0; i < newDice.length; i++) {
        let nextRoll = newDice[i].roll();
        newDice[i].div.textContent = nextRoll;
        console.log('the value of sum is: ' + sum);
    }
})


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
