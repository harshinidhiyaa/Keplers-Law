document.getElementById("img01").src = "images\\realityimg1.gif";
document.getElementById("img02").src = "images\\real\\realityimg0.gif";
document.getElementById("img03").src = "images\\real\\realityimg3.png";
document.getElementById("img04").src = "images\\idealization2.jpeg";
document.getElementById("text02").innerHTML = "Objects in space move faster when they are closer to a central body and slower when they are farther away.";
document.getElementById("text03").innerHTML = "Future positions and orbits of celestial object are estimated for scheduling satellite trajectories.";
document.getElementById("text04").innerHTML = "The heliocentric model of the solar system is proved by this law.";

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




















// else if(value == 2)
// {
//     document.getElementById("img01").src = "images\\reality\\boiling.jpg";
//     document.getElementById("img02").src = "images\\reality\\cooker2.jpg";
//     document.getElementById("img03").src = "images\\reality\\cooker3.jpg";
//     document.getElementById("img04").src = "images\\reality\\cooker4.jpg";
//     document.getElementById("text01").innerHTML = "The kettle boils at differnet temperature at different altitude.";
//     document.getElementById("text02").innerHTML = "Boiling happens when vapour pressure equals atmospheric pressure";
//     document.getElementById("text03").innerHTML = "the vapour pressure is dependent on the heat provided and the material used";
//     document.getElementById("text04").innerHTML = "The atmospheric pressure is independent of its presence and is what we will look into now.";
// }
// else if(value == 3)
// {
//     document.getElementById("img01").src = "images\\reality\\hotbaloon.jpg";
//     document.getElementById("img02").src = "images\\reality\\balloon2.jpg";
//     document.getElementById("img03").src = "images\\reality\\balloon3.jpg";
//     document.getElementById("img04").src = "images\\reality\\balloon4.jpg";
//     document.getElementById("text01").innerHTML = "The enthusiast wants to know a rough estimate of how much gas he need to carry beforehand.";
//     document.getElementById("text02").innerHTML = "Balloon rises when the internal pressure is greater than the atmospheric pressure and lower in the opposite case.";
//     document.getElementById("text03").innerHTML = "Internal pressure is controlled by the gas combustion";
//     document.getElementById("text04").innerHTML = "The atmospheric pressure is independent of its presence and is what we will look into now.";
// }
