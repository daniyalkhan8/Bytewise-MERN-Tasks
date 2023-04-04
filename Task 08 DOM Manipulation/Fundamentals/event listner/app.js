// Event Listners

//  element.addEventListner("click", function)

const button2 = document.querySelector('.box-button2');

function alertBtn() {
    alert('JavaScript');
}

button2.addEventListener("click", alertBtn);

// Mouseover

const newBackground = document.querySelector('.box3');

function changeBgColor() {
    newBackground.style.backgroundColor = 'blue';
}

newBackground.addEventListener("mouseover", changeBgColor);