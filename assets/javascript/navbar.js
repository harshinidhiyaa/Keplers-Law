var desc = ["Reality", "Idealization", "Geometric", "Algebraic"];
for(let i = 1; i <= desc.length; i++) {
    let text = document.getElementById("text" + i.toString());
    if (text) {
        text.style.visibility = "visible";
        text.innerHTML = desc[i-1];
    }
}

window.addEventListener("load", ()=>{
    let link = [
        "/idealization.html",
        "/geometric.html",
        "/algebraic.html",
    ];
    
    let loc = window.location.pathname.replace("/Keplers-Law", "");
    let i = link.indexOf(loc);
    if (i === -1) i = 0; // Default to the first link if not found

    let width = parseInt(d3.select(".navSvg").style("width").replace("px", ""), 10);
    // Calculate the start and end positions of the line
    let xOffsetStart = 150; // Starting offset
    let xOffsetEnd = 300; // Ending offset to increase the line length
    let xStart = (i + 1) * (width / 6) + xOffsetStart;
    let xEnd = xStart + xOffsetEnd;
    
    //let xOffset = 100; // Combined offset
    //let xStart = (i + 1) * (width / 6) + xOffset;
    //let xEnd = xStart + 20;

    d3.select("#track").attr("d", "M " + xStart + " 15 H " + xEnd);
});


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
