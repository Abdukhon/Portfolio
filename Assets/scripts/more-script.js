window.addEventListener('scroll', () => {
    let more = document.getElementById('more');
    if (window.scrollY > 0) {
        more.style.display = "none";
    } else {
        more.style.display = "flex";
    }
})