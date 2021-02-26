let elementsArray = document.querySelectorAll(".fadeIn");
console.log(elementsArray);
window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 100;
        if (distInView < 0) {
            elem.classList.add("isVisible");
        } else {
            elem.classList.remove("isVisible");
        }
    }
}
fadeIn();