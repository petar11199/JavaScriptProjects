const projects = document.querySelectorAll('.project');
const crafted = document.querySelector('.crafted h1');
const navigation = document.querySelector('.navigation');
const logo = document.querySelector('.logo');
const loader = document.querySelector('.loader');

function animateProject() {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
}

function showOnScroll() {
    if (window.scrollY >= 200) {
        navigation.classList.add('navFixed');
    } else {
        navigation.classList.remove('navFixed');
    }
    const globalClass = document.querySelector('.crafted');
    const topOfCrafted = crafted.offsetTop;
    const scrollBottom = window.scrollY + window.innerHeight - 200;
    if (topOfCrafted <= scrollBottom) {
        globalClass.classList.add('activeBar');
    }
}

// window.onload = () => {
//     setTimeout(() => {
//     console.log('loaded')
//     loader.classList.add('fullyLoaded');
//     const heading = document.querySelector('.heading');
//     heading.classList.add('loaded');
//     }, 1000);
// }



// Limit the time function is called
function debounce(func, wait, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!timeout) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    }
}

logo.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
      });
})
projects.forEach(project => project.addEventListener('mouseenter', animateProject));
projects.forEach(project => project.addEventListener('mouseleave', animateProject));
window.addEventListener('scroll', showOnScroll);

window.addEventListener("load", function(){
    loader.classList.add('fullyLoaded');
    setTimeout(() => {
        const heading = document.querySelector('.heading');
        heading.classList.add('loaded');
        loader.style.display = 'none';
    }, 600);
});
