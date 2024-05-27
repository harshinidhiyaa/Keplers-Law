function morphGIFs(length) {
    const transitionDuration = 500; // Duration of the opacity transition in milliseconds

    // Calculate opacity values for each GIF
    let opacityEarth = Math.max(1 - length, 0);
    let opacitySpace = Math.min(Math.max(length - 0.2, 0), 1);
    let opacityTwobody = Math.min(length - 0.5, 1);

    // Apply opacity transition to each GIF
    document.getElementById("earth").style.opacity = opacityEarth;
    document.getElementById("space").style.opacity = opacitySpace;
    document.getElementById("twobody").style.opacity = opacityTwobody;

    // Adjust transition duration to synchronize all GIFs
    document.getElementById("earth").style.transition = `opacity ${transitionDuration}ms ease-in-out`;
    document.getElementById("space").style.transition = `opacity ${transitionDuration}ms ease-in-out`;
    document.getElementById("twobody").style.transition = `opacity ${transitionDuration}ms ease-in-out`;
}
