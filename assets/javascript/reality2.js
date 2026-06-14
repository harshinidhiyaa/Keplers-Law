// Corrected asset folder string mapping definitions
document.getElementById("img01").src = "../images/reality/helio2.gif";
document.getElementById("img02").src = "../images/reality/kepler.png";
document.getElementById("img03").src = "../images/reality/helio.png";  
document.getElementById("img04").src = "../images/reality/reality1.jpg";

document.getElementById("text02").innerHTML = "Johannes Kepler, a German astronomer, formulated three laws that transformed our understanding of planetary motion around the Sun.";
document.getElementById("text03").innerHTML = "Kepler describes the heliocentric model where the Sun is at the center, and planets, including Earth, orbit around it in the solar system.";  
document.getElementById("text04").innerHTML = "The orbit of a planet around the Sun is an ellipse, with the Sun located at one of the two foci of the ellipse.";  

// Sequence Click Listeners via D3 Tracker Matrix Loops
for(let i = 1; i < 5; i++)
{
    d3.select("#next0" + i.toString()).on("click", function()
    {
        turnVisible(i);
    });
}

function turnVisible(i)
{
    // Hide clicked navigation control element instantly
    let currentArrow = document.getElementById("next0" + i.toString());
    if (currentArrow) currentArrow.style.display = "none";

    i++;
    if(i < 5)
    {
        // Add the utility show class to render the adjacent card package cleanly
        let nextWrapper = document.getElementById("card_wrapper0" + i.toString());
        if (nextWrapper) nextWrapper.classList.add("visible-card");
    }
    else
    {
        // Reveal CTA layout panel zone
        let idealize = document.getElementById("idealize");
        if (idealize) idealize.style.display = "block";
        
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
    if (img) {
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
    // Reserved zone for custom dynamic text treatments
}