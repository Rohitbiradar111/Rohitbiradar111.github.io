document.addEventListener('DOMContentLoaded', () => {

    const navButtons = document.querySelectorAll('.nav-btn');
    const contentSections = document.querySelectorAll('.content-section');

    function switchSection(targetSection, clickedButton) {
        navButtons.forEach(btn => btn.classList.remove('active'));
        contentSections.forEach(section => section.classList.remove('active'));
        document.getElementById(targetSection).classList.add('active');
        clickedButton.classList.add('active');
    }

    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            switchSection(event.currentTarget.dataset.target, event.currentTarget);
        });
    });

    const resumeButton = document.querySelector('.resume-button');
    const resumePDF = "https://github.com/Rohitbiradar111";

    if (resumeButton) {
        resumeButton.addEventListener('click', () => {
            window.open(resumePDF, '_blank');
        });
    }

    function handleProjectButtonClick(event) {
        const buttonType = event.target.textContent.toLowerCase();
        const projectCard = event.target.closest('.project-card');
        const demoUrl = projectCard.dataset.demo;
        const codeUrl = projectCard.dataset.code;

        if (buttonType === 'live demo' && demoUrl) {
            window.open(demoUrl, '_blank');
        } else if (buttonType === 'source code' && codeUrl) {
            window.open(codeUrl, '_blank');
        }
    }

    document.querySelectorAll('.project-card button').forEach(button => {
        button.addEventListener('click', handleProjectButtonClick);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (event) => {
            event.preventDefault();
            const target = document.querySelector(event.target.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});