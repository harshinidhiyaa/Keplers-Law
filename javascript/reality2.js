document.getElementById("img01").src = "images\\real\\helio2.gif";
document.getElementById("img02").src = "images\\real\\kepler.png";
document.getElementById("img03").src = "images\\real\\helio.png";  // Add this line
document.getElementById("img04").src = "images\\real\\reality1.jpg";
document.getElementById("text02").innerHTML = "Johannes Kepler, a German astronomer, formulated three laws that transformed our understanding of planetary motion around the Sun.";
document.getElementById("text03").innerHTML = "Kepler describes the heliocentric model where the Sun is at the center, and planets, including Earth, orbit around it in the solar system. ";  // Add this line
document.getElementById("text04").innerHTML = "The orbit of a planet around the Sun is an ellipse, with the Sun located at one of the two foci of the ellipse.";  // Add this line

for(let i = 1; i < 5; i++)
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
        next.style.visibility = "visible";
        next = document.getElementById("next0" + (i-1).toString());
        next.style.visibility = "hidden";
        img.style.visibility = "visible";
        text.style.visibility = "visible";
    }
    else
    {
        let idealize = document.getElementById("idealize");
        idealize.style.visibility = "visible";
        let next = document.getElementById("next0" + (i-1).toString());
        next.style.visibility = "hidden";
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

    img.style.animationName = "enlargeImage";

    img.style.animationFillMode = "forwards";
    img.style.animationDuration = "4s";
}

function disapperImage(){
    let img02 = document.getElementById("img02");
    let img03 = document.getElementById("img03");
    let img04 = document.getElementById("img04");

    img02.style.animationName = "collapse";
    img03.style.animationName = "collapse";
    img04.style.animationName = "collapse";

    img02.style.animationFillMode = "forwards";
    img03.style.animationFillMode = "forwards";
    img04.style.animationFillMode = "forwards";

    img02.style.animationDuration = "1s";
    img03.style.animationDuration = "1s";
    img04.style.animationDuration = "1s";
}
function disapperText(){
    let text02 = document.getElementById("text02");
    let text03 = document.getElementById("text03");
    let text04 = document.getElementById("text04");

    text02.style.animationName = "collapse";
    text03.style.animationName = "collapse";
    text04.style.animationName = "collapse";

    text02.style.animationFillMode = "forwards";
    text03.style.animationFillMode = "forwards";
    text04.style.animationFillMode = "forwards";

    text02.style.animationDuration = "1s";
    text03.style.animationDuration = "1s";
    text04.style.animationDuration = "1s";
}
function appearText(){

}
