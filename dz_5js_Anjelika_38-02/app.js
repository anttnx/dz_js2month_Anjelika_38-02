console.log("hello");


const counterElement = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');
const decreaseBtn = document.getElementById('decreaseBtn');

let count = 0;

function updateCounter() {
    counterElement.textContent = count;
    if (count > 0) {
            counterElement.style.color = 'green';
    }else if (count < 0) {
            counterElement.style.color = 'red';
    }else {
            counterElement.style.color = 'gray';
    }
}

increaseBtn.addEventListener('click', function() {
    count++;
    updateCounter();
});

resetBtn.addEventListener('click', function() {
    count = 0;
    updateCounter();
});

decreaseBtn.addEventListener('click', function() {
    count--;
    updateCounter();
});

// let counterValue = 0;
// const counter = document.getElementById('counter');

// function updateCounterColor() {
//     if (counterValue > 0) {
//         counter.style.color = "green";
//     }else if (counterValue < 0) {
//         counter.style.color = "red";
//     }else {
//         counter.style.color = "gray";
//     }
// }

// function incrementCounter(){
//     counterValue++ ;
//     counter.textContent = counterValue ;
//     updateCounterColor();
// }


// function resetCounter(){
//     counterValue = 0 ;
//     counter.textContent = counterValue ;
//     updateCounterColor() ;
// }


// function decrementCounter(){
//     counterValue-- ;
//     counter.textContent = counterValue ;
//     updateCounterColor() ;
// }

