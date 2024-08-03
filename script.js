let lastScrollPosition = 0;
const header = document.querySelector('#navbar');

document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > lastScrollPosition && scrollPosition > 250) {
        lastScrollPosition = scrollPosition;
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }

    lastScrollPosition = scrollPosition;
});

document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if (scroll_position > 50) {
        header.style.backgroundColor = "#29323c";
    }
    else {
        header.style.backgroundColor = "transparent";
    }
});


function showSidebar() {
    const sidebar = document.querySelector('#sidebar');
    sidebar.style.display = 'block';
}

function closeSidebar() {
    const sidebar = document.querySelector('#sidebar');
    sidebar.style.display = 'none';
}

function showSubmenu() {
    const submenu = document.querySelector('aside#sidebar nav ul.sidemenu li ul.submenu');
    if (submenu.style.display === 'none' || submenu.style.display === '') {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';
    }
}

function closeSubmenu() {
    const submenu = document.querySelector('aside#sidebar nav ul.sidemenu li ul.submenu');
    submenu.style.display = 'none';
    closeSidebar();
}