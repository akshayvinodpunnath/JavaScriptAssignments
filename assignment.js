const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
    alert('Some Message')
}

const arrayNumbers = [1,2,3,4,5];

for ( let i=arrayNumbers.length-1 ; i>=0; i--) {
    console.log(arrayNumbers[i])
}

for (let an of arrayNumbers) {
    console.log(an)
}

const newRandomNumber = Math.random();

if ( (newRandomNumber > 0.7 && randomNumber >0.7) || (newRandomNumber < 0.2 || randomNumber < 0.2)) {
    alert('condition success')
}

console.log(randomNumber);
console.log(newRandomNumber);