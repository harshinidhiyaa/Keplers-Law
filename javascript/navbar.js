var desc = ["Reality", "Idealization", "Geometric", "Algebraic"];
for(let i = 1; i < 5; i++)
{
    let text = document.getElementById("text" + i.toString());
    text.style.visibility = "visible";
    text.innerHTML = desc[i-1];
}

window.addEventListener("load", ()=>{
    let link = [
        "/reality.html",
        "/idealization.html",
        "/geometric.html",
        "/geometric2.html",
        "/algebraic.html",
        "/algebraic2.html"
    ];
    
    let loc = window.location.pathname.replace("/Keplers-Law", "");
    let i = link.indexOf(loc);
    if(i==3) i=2;
    if(i == 4) i=3;
    if(i == 5) i=3;
    let width = d3.select(".navSvg").style("width").replace("px","");
    let xStart = parseInt(width/6);
    let xOffset = 20;
    let xEnd = (i+1)*xStart + xOffset;
    xOffset = 80;
    xStart += xOffset;
    

    d3.select("#track").attr("d", "M " +  xStart + " 15 H " + xEnd);
})
