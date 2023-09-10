
setEq();
function setEq(){
// Row and Column div
    let divRow = document.createElement('div');
    let divCol1 = document.createElement('div');
    let divCol2 = document.createElement('div');
    divRow.setAttribute('class', 'row');
    divRow.setAttribute('id', 'row');
    divCol1.setAttribute('class', 'col-md-11');
    divCol1.setAttribute('id', 'col1');
    divCol2.setAttribute('class', 'col-md-1');
    divCol2.setAttribute('id', 'col2');
// Heading and lists
    let step1 = document.createElement('p');
    let step2 = document.createElement('p');
    let step3 = document.createElement('p');
    let step4 = document.createElement('p');
    step1.setAttribute('id', 'step1');
    step2.setAttribute('id', 'step2');
    step3.setAttribute('id', 'step3');
    step4.setAttribute('id', 'step4');
// Derivation steps
    let text1 = "Consider calculating the area of the triangle,";
    let text2 = "From the Ideal gas equation, <div class=\"der\" id=\"step\">$$ =dA = \frac{1}{2}(r)(rd\theta) $$</div>";
    let text3 = "Using angular momentum formula, $$ frac{dA}{dt}=frac{1}{2}frac{L}{m}$$<div class=\"der\" id=\"stepInt\">$$ P(z) = P_0e^{-\\frac{Mg}{RT}z} $$</div>";
    let text4 ="As angular momentum is constant and mass is constant. So, $$frac{dA}{dt}=frac{1}{2}frac{L}{m}=constant$$ $$\int dA = \int \frac{1}{2}(\frac{L}{m})dt$$ $$A=\frac{1}{2}\frac{L}{m}T$$ $$A∝T$$";
// The Slider
// Setting the inner html
    step1.innerHTML = text1;
    step2.innerHTML = text2;
    step3.innerHTML = text3;
    step4.innerHTML = text4;
    step2.style.visibility = "hidden";
    step3.style.visibility = "hidden";
    step4.style.visibility = "hidden";
// Properly adding to desired parent
    $('#exp').append(divRow);
    $('#row').append(divCol1);
    $('#row').append(divCol2);
    $('#col1').append(step1);
    $('#col1').append(step2);
    $('#col1').append(step3);
    $('#col1').append(step4);
//Navigation Button
    sliderReady();
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}
function sliderReady()
{
    d3.select("#mySlider").on("input", function()
    {
        let value = d3.select(this).property("value");
        let max = d3.select(this).property("max");
        let min = d3.select(this).property("min");
        let length = value/(max - min);
        if(length < 1/4)
        {
            document.getElementById("moreSteps2").style.visibility = "hidden";
            document.getElementById("moreSteps").style.visibility = "hidden";
            step2.style.visibility = "hidden";
            step3.style.visibility = "hidden";
            step4.style.visibility = "hidden";
        }
        else if(length > 1/4 && length < 2/4)
        {
            document.getElementById("moreSteps2").style.visibility = "hidden";
            step2.style.visibility = "visible";
            step3.style.visibility = "hidden";
            step4.style.visibility = "hidden";
        }
        else if(length > 2/4 && length < 3/4)
        {
            document.getElementById("moreSteps2").style.visibility = "hidden";
            step2.style.visibility = "visible";
            step3.style.visibility = "visible";
            step4.style.visibility = "hidden";
        }
        else if(length > 3/5)
        {
            step2.style.visibility = "visible";
            step3.style.visibility = "visible";
            step4.style.visibility = "visible";
            d3.select(".arrowBody").style("visibility" , "visible")
            .on("click", ()=>{
                window.location = "06_solution2.html";
            });
        }
    });
}

d3.select("#step").on("click", ()=>{
    document.getElementById("moreSteps").style.visibility = "visible";
});
d3.select("#stepInt").on("click", ()=>{
    document.getElementById("moreSteps2").style.visibility = "visible";
});
