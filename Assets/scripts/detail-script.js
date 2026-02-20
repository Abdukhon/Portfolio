function showDetails(target){
    let x = document.getElementById(target);
    if (x) {
        x.style.display = 'grid';
    }
}
function closeButton(target){
    let x = document.getElementById(target);
    if (x) {
        x.style.display = 'none';
    }
}
function switchButton(direction) {
    const gall = document.getElementById('gallery');
    const scrollw = gall.clientWidth
    gall.scrollBy({
        left: scrollw *direction,
        behavior: 'smooth'
    })
}