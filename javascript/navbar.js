var desc = ["Reality", "Idealization", "Geometric", "Algebraic"];
for(let i = 1; i <= desc.length; i++)
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
        "/algebraic.html",
    ];
    
    let loc = window.location.pathname.replace("/Barometric-Formula", "");
    let i = link.indexOf(loc);
    if(i == 3) i = 2;
    if(i == 4 || i == 5) i = 3;
    let width = d3.select(".navSvg").style("width").replace("px","");
    let xStart = parseInt(width/desc.length);
    let xOffset = 20;
    let xEnd = (i+1)*xStart + xOffset;
    xOffset = 80;
    xStart += xOffset;

    d3.select("#track").attr("d", "M " +  xStart + " 15 H " + xEnd);
})
var link = [
    "/overview.html",
    "/reality.html",
    "/ideal.html",
    "/geometric.html",
    "/algebraic.html"
];
var loc = window.location.pathname.replace("/Keplers-Law", "");
var linkIndex = link.indexOf(loc);
d3.select("#nextBtn").on("mousedown", ()=>{
    window.location =  "/Keplers-Law" + link[linkIndex+1];
});
// d3.select("#prevBtn").on("mousedown", ()=>{
//     window.location = link[linkIndex-1];
// });
function fadeIn(){
    // d3.select("body").append("div").attr("id", "fade")
    //     .style("font-size","50px").style("width", "100vw").style("height", "100vh")
    //     .style("position", "fixed").style("top", "0vh").style("left", "0vw")
    //     .style("background", "black").style("z-index", "100").style("animation", "fade 2s forwards");
}
