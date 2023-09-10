function svgResize()
{
    d3.select("#marker1")
        .attr("x", 0);
    d3.select("#marker2")
        .attr("x", (1/6)*d3.select("#svg").style("width").replace("px", ""));
        d3.select("#marker3")
        .attr("x", (2.3/6)*d3.select("#svg").style("width").replace("px", ""));
    d3.select("#marker4")
        .attr("x", (3.3/6)*d3.select("#svg").style("width").replace("px", ""));
        d3.select("#marker5")
        .attr("x", (4.4/6)*d3.select("#svg").style("width").replace("px", ""));
    d3.select("#marker6")
        .attr("x", (5.8/6)*d3.select("#svg").style("width").replace("px", ""));
}
window.addEventListener("load",svgResize());
// window.addEventListener("resize",svgResize());

d3.select('#myRange02').on("input",function(){
    let value = d3.select(this).property("value");
    let max = d3.select(this).property("max");
    let min = d3.select(this).property("min");
    let length = value/(max - min);

    setAnim(length);
    setImage(length);
    setText(length);
    setBtn(length);
    setAxisSelection(length);
    setZoomCurve(length);
})

function setAxisSelection(length)
{
    if(length < 5.7/6)
        document.getElementById("selection").style.zIndex = "0";
    else
        document.getElementById("selection").style.zIndex = "25";
}

function setAnim(length)
{
    if(length < (1/6)){
        document.getElementById("earth").style.webkitAnimationPlayState = "running";
    }
    else if(length > 1/6){
        document.getElementById("earth").style.webkitAnimationPlayState = "paused";
        document.getElementById("earth").style.webkitAnimationTimingFunction = "cubic-bezier(0,0,1,1)";
    }
}

function setImage(length)
{
    document.getElementById("earth").style.opacity = opacity(length,2.7/6,3/6).toString() + "%";
    document.getElementById("space").style.opacity = opacity(length,2.8/6,3/6).toString() + "%";
}
function opacity(length,min,max)
{
    if(length < min)
        return 100;
    if(length > max)
        return 0;
    var opacity = (max - length) * 600;
    return opacity;
}

function setText(length)
{
    if(length < 1/6){
        document.getElementById("marker2").style.fill = "#a6a5a2";
        document.getElementById("marker3").style.fill = "#a6a5a2";
        document.getElementById("marker4").style.fill = "#a6a5a2";
        document.getElementById("marker5").style.fill = "#a6a5a2";
        document.getElementById("marker6").style.fill = "#a6a5a2";
    }
    else if(length > (1/6) && length < (2/6)){
        document.getElementById("marker2").style.fill = "#5999e3";
        document.getElementById("marker3").style.fill = "#a6a5a2";
        document.getElementById("marker4").style.fill = "#a6a5a2";
        document.getElementById("marker5").style.fill = "#a6a5a2";
        document.getElementById("marker6").style.fill = "#a6a5a2";
    }
 
    }
}

function setZoomCurve(length)
{
    if(length < 2/6){
        let len = 0;
        let top = len * 90;
        let radius = -180*len + 110;
    //    let zoom = 5400*length - 700;
        let dim = 300 * len + 100;
        let left = -150*len;
        let zoom = 2400 * len + 1100;

        document.getElementById("earth").style.backgroundSize = zoom.toString() + "px";
        document.getElementById("earth").style.height = dim.toString() + "%";
        document.getElementById("earth").style.width = dim.toString() + "%";
        document.getElementById("earthContainer").style.borderRadius = radius.toString() + "%";
        document.getElementById("earth").style.top = top.toString() + "%";
        document.getElementById("earth").style.left = left.toString() + "%";
        document.getElementById("space").style.borderRadius = radius.toString() + "%";

    }
    else if(length > 4/6){
        let len = 2;
        let top = len * 90;
        let radius = -180*len + 110;
    //    let zoom = 5400*length - 700;
        let dim = 300 * len + 100;
        let left = -150*len;
        let zoom = 2400 * len + 1100;

        document.getElementById("earth").style.backgroundSize = zoom.toString() + "px";
        document.getElementById("earth").style.height = dim.toString() + "%";
        document.getElementById("earth").style.width = dim.toString() + "%";
        document.getElementById("earthContainer").style.borderRadius = radius.toString() + "%";
        document.getElementById("earth").style.top = top.toString() + "%";
        document.getElementById("earth").style.left = left.toString() + "%";
        document.getElementById("space").style.borderRadius = radius.toString() + "%";
   
    }
    else{
        let len = (length - 2/6) * 6;
        let top = len * 90;
        let radius = -180*len + 110;
    //    let zoom = 5400*length - 700;
        let dim = 300 * len + 100;
        let left = -150*len;
        let zoom = 2400 * len + 1100;
    
        document.getElementById("earth").style.backgroundSize = zoom.toString() + "px";
        document.getElementById("earth").style.height = dim.toString() + "%";
        document.getElementById("earth").style.width = dim.toString() + "%";
        document.getElementById("earthContainer").style.borderRadius = radius.toString() + "%";
        document.getElementById("earth").style.top = top.toString() + "%";
        document.getElementById("earth").style.left = left.toString() + "%";
        document.getElementById("space").style.borderRadius = radius.toString() + "%";
    }
}
function setBtn(length)
{
    if(length < (1/6)){
        resetButton(-1);
    }
    else if(length > (1/6) && length < (2/6)){
        document.getElementById("rotBt").style.background = "rgba(48, 51, 100, 0.75)";
        resetButton(0);
    }
    else if(length > (2.3/6) && length < (3.3/6)){
        document.getElementById("curBt").style.background = "rgba(48, 51, 100, 0.75)";
        resetButton(1);
    }
    else if(length > (3.3/6) && length < (4.4/6)){
        document.getElementById("htBt").style.background = "rgba(48, 51, 100, 0.75)";
        resetButton(2);
    }
    else if(length > (4.4/6) && length < (5.8/6)){
        document.getElementById("grBt").style.background = "MediumSeaGreen";
        resetButton(3);
    }
    else if(length >= (5.8/6) && length < (5.9/6)){
        document.getElementById("airBt").style.background = "rgba(48, 51, 100, 0.75)";
        resetButton(4);
    }
}

var btnId = ["rotBt", "curBt", "htBt", "grBt", "airBt"];

function resetButton(i)
{
    for(let j = 0; j < 5; j++)
    {
        if(j <= i)
        {
            continue;
        }
        document.getElementById(btnId[j]).style.background = "rgba(47, 60, 238, 0.75)";
    }
}

d3.select('#selection').on("mouseover",function(){
    this.style.backgroundColor = "#466999";
})

d3.select('#selection').on("mouseout",function(){
    this.style.backgroundColor = "";
})
