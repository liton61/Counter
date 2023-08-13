let value = 0;
document.getElementById('plus').addEventListener('click', function () {
    value = value + 1;
    const counter = document.getElementById('counter');
    updateValue = counter.innerText;
    counter.innerText = value;
})

document.getElementById('minus').addEventListener('click', function () {
    value = value - 1;
    const counter = document.getElementById('counter');
    updateValue = counter.innerText;
    counter.innerText = value;
})