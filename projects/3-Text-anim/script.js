const app = document.querySelector('#app');
const button = document.querySelector('button');
const input = document.querySelector('input');
const dropdown = document.querySelector('#animName');
const speedForm = document.querySelector('#speed');

var interval = 100;                         // Default interval between letters

function startAnimation() {
    while (app.firstChild) {                // 
        app.removeChild(app.firstChild);    // Reseting text
    }                                       //

    var inputValue = input.value;           // First get input value
    var messageArr = inputValue.split('');  // Spliting message to letters

    for (let i = 0; i < messageArr.length; i++) {
        var singleLetter = document.createElement('span');
        singleLetter.appendChild(document.createTextNode(messageArr[i]));
        app.appendChild(singleLetter);
    }

    selectAnimation();
}

function selectAnimation() {
    const letters = document.querySelectorAll('span');
    setTimeout(() => {
        letters.forEach((el, index) => {
            setTimeout(() => {
                el.style.animationDuration = speedForm.value + 'ms';
                el.classList.add(dropdown.value);
            }, (index * interval));
        });
    }, 50);

}


button.addEventListener('click', startAnimation);