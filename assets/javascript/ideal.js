document.getElementById("img01").src = "../images/realityimg1.gif";
document.getElementById("img02").src = "../images/real/realityimg0.gif";
document.getElementById("img03").src = "../images/dumb.webp";
document.getElementById("img04").src = "../images/idealization2.jpeg";
document.getElementById("text02").innerHTML = "Consider a two body system, Mars and Sun excluding the gravitational influence of the planet’s moons and external influence of other space objects.";
document.getElementById("text03").innerHTML = "A radius vector joining any planet to the Sun sweeps out equal areas in equal lengths of time.";
document.getElementById("text04").innerHTML = "In this case, Mars takes 1 month for sweeping one section of the orbit when at aphelion and 1 month for sweeping another orbital arc section at perihelion.";

// Correct loop index constraint to dynamically latch listeners up to next03
for(let i = 1; i < 4; i++)
{
    d3.select("#next0" + i.toString()).on("click", function()
    {
        turnVisible(i);
    });
}

function turnVisible(i)
{
    i++;
    if(i < 5)
    {
        let img = document.getElementById("img0" + i.toString());
        let text = document.getElementById("text0" + i.toString());
        let next = document.getElementById("next0" + i.toString());
        if(next) next.style.visibility = "visible";
        
        next = document.getElementById("next0" + (i-1).toString());
        if(next) next.style.visibility = "hidden";
        if(img) img.style.visibility = "visible";
        if(text) text.style.visibility = "visible";
    }
    else
    {
        let idealize = document.getElementById("idealize");
        if(idealize) idealize.style.visibility = "visible";
        let next = document.getElementById("next0" + (i-1).toString());
        if(next) next.style.visibility = "hidden";
        animateStuff();
    }
}

function animateStuff(){
    moveImage();
    disapperImage();
    disapperText();
    appearText();
}

function moveImage(){
    let img = document.getElementById("img01");
    if(img) {
        img.style.animationName = "enlargeImage";
        img.style.animationFillMode = "forwards";
        img.style.animationDuration = "4s";
    }
}

function disapperImage(){
    let img02 = document.getElementById("img02");
    let img03 = document.getElementById("img03");
    let img04 = document.getElementById("img04");

    if(img02) { img02.style.animationName = "collapse"; img02.style.animationFillMode = "forwards"; img02.style.animationDuration = "1s"; }
    if(img03) { img03.style.animationName = "collapse"; img03.style.animationFillMode = "forwards"; img03.style.animationDuration = "1s"; }
    if(img04) { img04.style.animationName = "collapse"; img04.style.animationFillMode = "forwards"; img04.style.animationDuration = "1s"; }
}

function disapperText(){
    let text02 = document.getElementById("text02");
    let text03 = document.getElementById("text03");
    let text04 = document.getElementById("text04");

    if(text02) { text02.style.animationName = "collapse"; text02.style.animationFillMode = "forwards"; text02.style.animationDuration = "1s"; }
    if(text03) { text03.style.animationName = "collapse"; text03.style.animationFillMode = "forwards"; text03.style.animationDuration = "1s"; }
    if(text04) { text04.style.animationName = "collapse"; text04.style.animationFillMode = "forwards"; text04.style.animationDuration = "1s"; }
}

function appearText(){
    // Reserved for layout expansion
}