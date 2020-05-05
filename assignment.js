const task3Element = document.getElementById('task-3');

//Function Declared
function showAlert() {
    alert('Inside showAlert function');
}

function showName(name) {
    alert(`Name is: ${name}`);
}

//calling both showAlert and showName
//showAlert();
//showName('Rocky');

//Adding eventList to task3Element
task3Element.addEventListener('click', showAlert);

//new function with 3 string arguments
function threeStrings(string1, string2, string3) {
    return `${string1} ${string2} ${string3}`
}


alert(threeStrings('I currently','learning vanilla','Javascript :)'));