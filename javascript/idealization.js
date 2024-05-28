// Event listener for the slider
d3.select('#myRange02').on("input", function() {
    let value = d3.select(this).property("value");
    let max = d3.select(this).property("max");
    let min = d3.select(this).property("min");
    let length = value / (max - min);

    morphGIFs(length);
});

function morphGIFs(length) {
    // Calculate opacity for each GIF based on slider position
    let earthOpacity = Math.max(0, Math.min(1, 1 - 3 * length));
    let spaceOpacity = Math.max(0, Math.min(1, 3 * length - 1));
    let twobodyOpacity = Math.max(0, Math.min(1, 3 * length - 2));

    // Set opacity for each GIF
    document.getElementById("earth").style.opacity = earthOpacity;
    document.getElementById("space").style.opacity = spaceOpacity;
    document.getElementById("twobody").style.opacity = twobodyOpacity;
}
