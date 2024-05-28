// Event listener for the slider
d3.select('#myRange02').on("input", function() {
    let value = d3.select(this).property("value");
    let max = d3.select(this).property("max");
    let min = d3.select(this).property("min");
    let length = value / (max - min);

    morphGIFs(length);
});

function morphGIFs(length) {
    const maxOpacity = 1; // Maximum opacity for both elements

    // Calculate opacity for each element based on slider position
    let earthOpacity = Math.max(0, Math.min(maxOpacity, 1 - length));
    let spaceOpacity = Math.max(0, Math.min(maxOpacity, length));
    let twobodyOpacity = Math.max(0, Math.min(1, 3 * length - 2));

    // Set opacity for each GIF
    document.getElementById("earth").style.opacity = earthOpacity;
    document.getElementById("space").style.opacity = spaceOpacity;
    document.getElementById("twobody").style.opacity = twobodyOpacity;
}
