function dropdown(button) {
    var content = button.nextElementSibling;
    button.classList.toggle("active");
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = "100%"; 
    }
}