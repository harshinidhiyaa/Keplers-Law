var desc = ["Reality", "Idealization", "Geometric", "Algebraic"];
for(let i = 1; i <= desc.length; i++) {
    let text = document.getElementById("text" + i.toString());
    if (text) {
        text.style.visibility = "visible";
        text.innerHTML = desc[i-1];
    }
}

window.addEventListener("load", ()=>{
    // Maps exactly to the page names inside your pages/ folder
    let link = [
        "ideal.html",
        "geometric.html",
        "algebraic.html",
    ];
    
    // Grabs just the dynamic file name from the URL string
    let loc = window.location.pathname.split("/").pop();
    let i = link.indexOf(loc);
    if (i === -1) i = 0; // Default to index 0 if it doesn't match completely

    let width = parseInt(d3.select(".navSvg").style("width").replace("px", ""), 10);
    // Calculate the start and end positions of the SVG tracking line
    let xOffsetStart = 150; 
    let xOffsetEnd = 300; 
    let xStart = (i + 1) * (width / 6) + xOffsetStart;
    let xEnd = xStart + xOffsetEnd;

    d3.select("#track").attr("d", "M " + xStart + " 15 H " + xEnd);
});

// Relative mapping arrays so files within the pages/ directory link directly to each other
var link = [
    "overview.html",
    "reality.html",
    "ideal.html",
    "geometric.html",
    "algebraic.html"
];
var loc = window.location.pathname.split("/").pop();
var linkIndex = link.indexOf(loc);

d3.select("#nextBtn").on("mousedown", ()=>{
    if (linkIndex !== -1 && linkIndex + 1 < link.length) {
        window.location = link[linkIndex + 1];
    }
});

function fadeIn(){
    // Reserved for transitions
}