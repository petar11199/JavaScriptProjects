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
