// Event listener for the slider
d3.select('#myRange02').on("input", function() {
    let value = d3.select(this).property("value");
    let max = d3.select(this).property("max");
    let min = d3.select(this).property("min");
    let length = value / (max - min);

    morphGIFs(length);
});

function morphGIFs(length) {
    const totalDuration = 500; // Total duration of slider movement in milliseconds

    // Calculate opacity values for each GIF
    let opacityEarth = Math.max(1 - length, 0);
    let opacitySpace = Math.max(Math.min(length - 0.2, 1), 0); // Ensure opacitySpace stays between 0 and 1
    let opacityTwobody = Math.max(Math.min(length - 0.5, 1), 0); // Ensure opacityTwobody stays between 0 and 1

    // Calculate transition durations based on remaining time and ensure they sum up to totalDuration
    let transitionDurationEarth = totalDuration * opacityEarth;
    let transitionDurationSpace = totalDuration * (opacitySpace - opacityEarth);
    let transitionDurationTwobody = totalDuration * (opacityTwobody - opacitySpace);

    // Apply opacity and transition duration to each GIF
    document.getElementById("earth").style.opacity = opacityEarth;
    document.getElementById("space").style.opacity = opacitySpace;
    document.getElementById("twobody").style.opacity = opacityTwobody;

    // Adjust transition durations to synchronize all GIFs
    document.getElementById("earth").style.transition = `opacity ${transitionDurationEarth}ms ease-in-out`;
    document.getElementById("space").style.transition = `opacity ${transitionDurationSpace}ms ease-in-out`;
    document.getElementById("twobody").style.transition = `opacity ${transitionDurationTwobody}ms ease-in-out`;
}
