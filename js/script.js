// Drop-down divs for the projects
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
    var accordionItem = button.parentElement;
    accordionItem.classList.toggle("active");
    button.classList.toggle("active");
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = (content.scrollHeight / parseFloat(getComputedStyle(document.documentElement).fontSize)) + "em";
    }
}

// Blue button to scroll to the top
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
