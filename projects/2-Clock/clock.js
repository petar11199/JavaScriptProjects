const ticks = document.querySelectorAll('[data-tick]');

function getTime() {
    setInterval(() => {
        let date = Date.now();
        let hours = new Date(date).getHours();
        let minutes = new Date(date).getMinutes();
        let seconds = new Date(date).getSeconds();
        ticks.forEach(tick => {
            if (tick.dataset.tick === 'hours') {
                ticks[0].style.transform = `rotate(${(360 * hours) / 12 - 90}deg)`;
            }
            if (tick.dataset.tick === 'minutes') {
                ticks[1].style.transform = `rotate(${(360 * minutes) / 60 - 90}deg)`;
            } 
            if (tick.dataset.tick === 'seconds') {
                ticks[2].style.transform = `rotate(${(360 * seconds) / 60 - 90}deg)`;
            } 
            
            if (ticks[2].style.transform === 'rotate(-90deg)') {
                tick.classList.remove('active');
            } else {
                tick.classList.add('active');
            }
        })
    }, 1000);
}

getTime()