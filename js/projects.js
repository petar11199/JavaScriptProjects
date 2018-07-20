const projectsHTML = document.querySelector('.projects');
var allProjects = [
    {
        number: 1,
        title: 'Tic Tac Toe',
        secondTitle: 'Easy game of tic tac toe',
        href: 'projects/1-TicTacToe/ticTacToe.html'
    },
    {
        number: 2,
        title: 'Analog Clock',
        secondTitle: 'Simple working analog clock',
        href: 'projects/2-Clock/clock.html'
    },
	{
        number: 3,
        title: 'Text Animations',
        secondTitle: 'Type your text and choose animation',
        href: 'projects/3-Text-anim/index.html'
    },
    {
        number: 4,
        title: 'More coming soon!',
        secondTitle: '',
        href: ''
    }
]

var singleProject = allProjects.map(project => {
    return `<div class="project fx">
        <div class="line"></div>
        <div class="slideInBg"></div>
        <div class="left-side fx">
            <h1 class="number">${project.number}</h1>
            <div class="project-name fx">
                <h1>${project.title}</h1>
                <h2>${project.secondTitle}</h2>
            </div>
        </div>
        <a class="right-side fx" href="${project.href}">
            <div class="arrow"></div>
            <h2 class="view">VIEW PROJECT</h2>
        </a>
    </div>
    `
}).join('');

projectsHTML.innerHTML = singleProject;