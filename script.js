const accordion = document.getElementsByClassName('accordion-section');
const menu = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');

let firstRun = true;

menu.addEventListener('click', toggleSidebar);

overlay.addEventListener('click', () => {
    toggleSidebar();
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 1023) {
        for (let i=0; i<accordion.length; i++) {
            const panel = accordion[i].getElementsByClassName('desktopMenu');
            panel[0].style.maxHeight = 'none';
        }
    }
    else {
        for (let i=0; i<accordion.length; i++) {
            const panel = accordion[i].getElementsByClassName('desktopMenu');
            if (accordion[i].classList.contains('open')) {
                panel[0].style.maxHeight = panel[0].scrollHeight + "px";
            } else {
                panel[0].style.maxHeight = "0px";
            }
        }
    }
})

window.addEventListener('scroll', () => {
    if (menu.classList.contains('open'))
        toggleSidebar();
})

for (let i=0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', () => {
        accordion[i].classList.toggle('open');
        const panel = accordion[i].getElementsByClassName('desktopMenu');

        if (panel[0].style.maxHeight == 0 || panel[0].style.maxHeight == '0px')
            panel[0].style.maxHeight = panel[0].scrollHeight + "px";
        else
            panel[0].style.maxHeight = 0;
        
    });
}

function toggleSidebar() {
    menu.classList.toggle('open');
    sideMenu.classList.toggle('open');
    overlay.classList.toggle('open');

    if (!firstRun) {
        menu.classList.toggle('close');
    }

    firstRun = false;
}

