var desc = ["Reality", "Idealization", "Geometric", "Algebraic"];
for(let i = 1; i <= desc.length; i++) {
    let text = document.getElementById("text" + i.toString());
    text.style.visibility = "visible";
    text.innerHTML = desc[i-1];
}

window.addEventListener("load", () => {
    let link = [
        "/reality.html",
        "/idealization.html",
        "/geometric.html",
        "/geometric2.html", // Assuming this is the one removed
        "/algebraic.html",
        "/algebraic2.html"
    ];

    let loc = window.location.pathname.replace("/Keplers-Law", "");
    let i = link.indexOf(loc);
    if(i >= 3) i--; // Adjust the index to account for the removed item

    let width = d3.select(".navSvg").style("width").replace("px","");
    let xStart = parseInt(width / desc.length);
    let xOffset = 30;
    let xEnd = (i + 1) * xStart + xOffset;
    xOffset = 100;
    xStart += xOffset;

    d3.select("#track").attr("d", "M " + xStart + " 15 H " + xEnd);
});
