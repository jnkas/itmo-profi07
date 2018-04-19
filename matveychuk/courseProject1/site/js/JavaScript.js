window.onload = function () {
    setImageVisible('All', 'img-portfolio', true);
}

function setImageVisible(id, classImg, initial) {
    document.querySelectorAll("a.portfolio-menu").forEach(a => a.style.color = "rgba(0, 0, 0, 0.5)");
    document.getElementById(id).style.color = "rgba(144, 222, 122, 1)";
    document.querySelectorAll(".img-portfolio").forEach(a => a.style.display = "none");
    document.querySelectorAll("." + classImg).forEach(a => a.style.display = (initial ? 'initial' : 'none'));
}