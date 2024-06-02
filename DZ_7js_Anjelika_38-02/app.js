console.log("hello m");

function generateNumbers(){
    const numbersDiv = document.getElementById("numbers");
    numbersDiv.innerHTML = "";

    for (let i = 0; i < 6; i++){
        const number = getRandomNumber();
        const formattedNumber = formatNumber(number);
        const circle = document.createElement("div");
        circle.className = "circle";
        circle.textContent = formattedNumber;
        numbersDiv.appendChild(circle);
    }
}

function getRandomNumber(){
    return Math.floor(Math.random() * 99) + 1;
}

function formatNumber(number){
    return String(number).padStart(2, "0");
}