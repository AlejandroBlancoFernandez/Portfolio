function smoothScroll(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
function dropdown(button) {
    var content = button.nextElementSibling;
    button.classList.toggle("active");
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = "100%"; 
    }
}