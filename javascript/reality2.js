document.getElementById("img01").src = "images/real/realityimg2.jpeg";
document.getElementById("text01").innerHTML = "The heliocentric model of the solar system is proved by this law.";

d3.select("#next01").on("click", function() {
    turnVisible();
});

function turnVisible() {
    let img = document.getElementById("img01");
    let text = document.getElementById("text01");
    let next = document.getElementById("next01");
    
    next.style.visibility = "hidden";
    img.style.visibility = "visible";
    text.style.visibility = "visible";
    animateStuff();
}

function animateStuff() {
    moveImage();
    disapperImage();
    disapperText();
}

function moveImage() {
    let img = document.getElementById("img01");

    img.style.animationName = "enlargeImage";
    img.style.animationFillMode = "forwards";
    img.style.animationDuration = "4s";
}

function disapperImage() {
    let img = document.getElementById("img01");

    img.style.animationName = "collapse";
    img.style.animationFillMode = "forwards";
    img.style.animationDuration = "1s";
}

function disapperText() {
    let text = document.getElementById("text01");

    text.style.animationName = "collapse";
    text.style.animationFillMode = "forwards";
    text.style.animationDuration = "1s";
}
