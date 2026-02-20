const MenuBtn = document.getElementById('menu-btn');

function menuOpen() {
    let icons = document.getElementById('images');
    let btn = document.getElementById('menu-btn');
    if (icons.style.display === 'none') {
        icons.style.display = "flex";
        document.getElementById('img').src = "Assets/images/Icons/Menu_active.png";
        btn.style.borderColor = "black";
        btn.style.background = "#00c8fa";
    } else {
        icons.style.display = "none";
        document.getElementById('img').src = "Assets/images/Icons/Menu.png";
        btn.style.borderColor = "#00c8fa";
        btn.style.background = "linear-gradient(135deg, rgb(10, 10, 10) 0%, rgb(30, 30, 30) 100%)";
    }
}