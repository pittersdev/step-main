function toggleSidebar() {
    let sidebarOpened = document.getElementById('sidebar').classList.length > 0 ? true : false;
    if(sidebarOpened) {
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('hamburger').classList.remove('active');
        sidebarLock = false;
    } else {
        document.getElementById('sidebar').classList.add('open');
        document.getElementById('hamburger').classList.add('active');
        sidebarLock = true;
    }
    if(document.getElementById('header').classList.length == 0)
        document.getElementById('header').classList.add('alt');
}
function changeSidebarSubMenuStatus(id) {
    // Toggles the character inside the icon's submenu
    document.getElementById(`icon${id}`).innerText == '+' ? document.getElementById(`icon${id}`).innerText = '-' : document.getElementById(`icon${id}`).innerText = '+';
    // Toggles the submenu in sidebar
    document.getElementById(`subMenu${id}`).style.display == 'none' ? document.getElementById(`subMenu${id}`).style.display = 'block' : document.getElementById(`subMenu${id}`).style.display = 'none';
    document.getElementById(`subMenu${id}`).classList[0] == 'trigger' ? document.getElementById(`subMenu${id}`).classList.remove('trigger') : document.getElementById(`subMenu${id}`).classList.add('trigger');
}