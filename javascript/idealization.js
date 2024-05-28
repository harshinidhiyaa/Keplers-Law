// Event listener for the slider
d3.select('#myRange02').on("input", function() {
    let value = d3.select(this).property("value");
    let max = d3.select(this).property("max");
    let min = d3.select(this).property("min");
    let length = value / (max - min);

    morphGIFs(length);
});
// Event listener for the slider
d3.select('#myRange02').on("input", function() {
    let value = d3.select(this).property("value");
    let max = d3.select(this).property("max");
    let min = d3.select(this).property("min");
    let length = value / (max - min);

    morphGIFs(length);
});

function morphGIFs(length) {
    const transitionDuration = 500; // Duration of the opacity transition in milliseconds

    // Calculate opacity values for each GIF
    let opacityEarth = Math.max(1 - length, 0);
    let opacitySpace = Math.min(Math.max(length - 0.3, 0), 1); // Adjusted transition points
    let opacityTwobody = Math.min(length - 0.6, 1); // Adjusted transition point

    // Apply opacity transition to each GIF
    document.getElementById("earth").style.opacity = opacityEarth;
    document.getElementById("space").style.opacity = opacitySpace;
    document.getElementById("twobody").style.opacity = opacityTwobody;

    // Adjust transition duration to synchronize all GIFs
    document.getElementById("earth").style.transition = `opacity ${transitionDuration}ms ease-in-out`;
    document.getElementById("space").style.transition = `opacity ${transitionDuration}ms ease-in-out`;
    document.getElementById("twobody").style.transition = `opacity ${transitionDuration}ms ease-in-out`;
}
