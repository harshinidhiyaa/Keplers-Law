//document.getElementById("img01").src = "images\\real\\realityimg1.gif";
document.getElementById("img01").src = "images\\real\\realityimg1.gif";
document.getElementById("text01").innerHTML = "The heliocentric model of the solar system is proved by this law.";

for(let i = 1; i < 2; i++)
{
    d3.select("#next0" + i.toString()).on("click", function()
    {
        turnVisible(i);
    });
}

function turnVisible(i)
{
    i++;
    if(i < 2)
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

    img02.style.animationName = "collapse";

    img02.style.animationFillMode = "forwards";

    img02.style.animationDuration = "1s";
}
function disapperText(){
    let text02 = document.getElementById("text02");

    text02.style.animationName = "collapse";

    text02.style.animationFillMode = "forwards";

    text02.style.animationDuration = "1s";

}
function appearText(){

}
