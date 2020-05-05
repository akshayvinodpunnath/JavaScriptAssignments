const task3Element = document.getElementById('task-3');

function showAlert() {
    alert('Inside showAlert function');
}

function showName(name) {
    alert(`Name is: ${name}`);
}

//showAlert();
//showName('Rocky');

task3Element.addEventListener('click', showAlert);