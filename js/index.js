/* Main JS */
/* Helper getDataTarget */
const getDataTarget = (target) => document.getElementById(target);

/* Constants */
const cssMenuVar = '--main-menu-position-x';
const rootElement = document.documentElement;
const mainMenuElement = document.getElementById('mainMenu');

const menuOpen = (menu) => {
    rootElement.style.setProperty(cssMenuVar, '0');
    menu.dataset.isVisible = true;
}

const menuClose = (menu) => {
    rootElement.style.setProperty(cssMenuVar, '-100vh');
    menu.dataset.isVisible = false;
}

/* Menu Handler */
function handleMenu() {
    const menuElement = getDataTarget(this.dataset.target);
    const isVisible = menuElement.dataset.isVisible.trim() || false;
    
    isVisible === 'false' ? menuOpen(menuElement) : menuClose(menuElement);
}

/* Modal Handler */
function handleModal() {
    const modalElement = getDataTarget(this.dataset.target);
    const isVisible = modalElement.dataset.isVisible.trim() || false;
    
    if (isVisible === 'false') {
        modalElement.classList.add('is-visible');
        modalElement.dataset.isVisible = true;
        menuClose(mainMenuElement); /* In case modal called from menu we need to close it */
    } else {
        modalElement.classList.remove('is-visible');
        modalElement.dataset.isVisible = false;
    }
}

/* Main Menu Triggers */
const menuTriggers = document.querySelectorAll('[data-trigger="menu"]');
menuTriggers.forEach(trigger => trigger.addEventListener('click', handleMenu, false));

/* Modal Trigger */
const modalTriggers = document.querySelectorAll('[data-trigger="modal"]');
modalTriggers.forEach(trigger => trigger.addEventListener('click', handleModal, false));

