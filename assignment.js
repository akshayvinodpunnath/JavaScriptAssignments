const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
    alert('Some Message')
}

const arrayNumbers = [1,2,3,4,5];

for ( let i=0 ; i < arrayNumbers.length; i++) {
    console.log(arrayNumbers[i])
}

for (let an of arrayNumbers) {
    console.log(an)
}