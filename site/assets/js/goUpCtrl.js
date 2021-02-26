setInterval(function() {
    let scroll = window.scrollY;
    let maxScroll = document.getElementsByTagName('body')[0].scrollHeight; // Note scrollHeight are much larger than scroll does. scrollHeight depends on web-browser calculations, so isn't precise. However, it's ok for this fancy addClass :D
    if(scroll > maxScroll / 1.25) {
        document.getElementById('goUp').classList.add('isVisible');
    } else {
        document.getElementById('goUp').classList.remove("isVisible");
    }
    console.log(scroll, maxScroll/1.25);
    return scroll;
}, 500); // Doesn't matter this little delay, plus is more CPU efficient