// const navigation = document.querySelector('.navigation');
// const sideBar = document.querySelector('.social');

// let navHeight = navigation.clientHeight;
// let windowHeight = window.innerHeight;
// let sideBarHeight = windowHeight - navHeight;

// sideBar.style.height = sideBarHeight + 'px';
// console.log(window)

const projects = document.querySelectorAll('.project');

function animateProject(e) {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
}

projects.forEach(project => project.addEventListener('mouseenter', animateProject));
projects.forEach(project => project.addEventListener('mouseleave', animateProject));
