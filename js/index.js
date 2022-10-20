/* Main JS */
/* Helper getDataTarget */
const getDataTarget = (target) => document.getElementById(target);

/* Constants */
const cssMenuVar = '--main-menu-position-x';

/* Menu Handler */
function handleMenu() {
    const menuElement = getDataTarget(this.dataset.target);
    const isVisible = menuElement.dataset.isVisible.trim() || false;
    const rootElement = document.documentElement;
    
    if (isVisible === 'false') {
        rootElement.style.setProperty(cssMenuVar, '0');
        menuElement.dataset.isVisible = true;
    } else {
        rootElement.style.setProperty(cssMenuVar, '-100vh');
        menuElement.dataset.isVisible = false;
    }
}

/* Main Menu trigger */
const menuOpenTrigger = document.getElementById('mainMenuOpen');
const menuCloseTrigger = document.getElementById('mainMenuClose');

menuOpenTrigger.addEventListener('click', handleMenu, false);
menuCloseTrigger.addEventListener('click', handleMenu, false);
