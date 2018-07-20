const app = document.querySelector('#app');
const button = document.querySelector('button');
const input = document.querySelector('input');
const dropdown = document.querySelector('#animName');
const speedForm = document.querySelector('#speed');

var interval = 100;                         // Default interval between letters
var animSpeed = 500;                        // Default animation speed in ms

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
    var select = dropdown.value;
    animSpeed = speedForm.value;
    const letters = document.querySelectorAll('span');

    setTimeout(() => {
        letters.forEach((el, index) => {
            setTimeout(() => {
                el.style.animationDuration = animSpeed + 'ms';
                if (select === 'updown') { 
                    el.classList.add('upDownAnim');
                }
                if (select === 'wave') {
                    el.classList.add('wave');
                }
            }, (index * interval));
        });
    }, 50);

}


button.addEventListener('click', startAnimation);