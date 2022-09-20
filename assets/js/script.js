
function readAll() {
    let elements = document.getElementsByClassName('notification active');
    let tot = elements.length;
    for (let i = 0; i < tot; i++) {
        elements[0].classList.remove("active");
    }
    document.getElementsByClassName('box-count')[0].classList.add("hidden");
    document.getElementsByClassName('read')[0].classList.add("hidden");
}