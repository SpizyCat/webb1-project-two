window.onscroll = function() {setSticky();};

var navbar = document.querySelector("#navbar");
var sticky = navbar.offsetTop;

function setSticky() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
document.querySelector("#image").addEventListener("click", e => {
    var lightbox = document.querySelector("#img_lightbox");
    lightbox.style.display = 'block';

    lightbox.childNodes[1].attributes.src = e.src;
    console.log(lightbox.childNodes);

    
})