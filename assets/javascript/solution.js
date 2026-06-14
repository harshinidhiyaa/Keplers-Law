// Declared in outer scope so variables are safely shared between setEq and sliderReady
let step1, step2, step3, step4, step5;

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
    step1 = document.createElement('p');
    step2 = document.createElement('p');
    step3 = document.createElement('p');
    step4 = document.createElement('p');
    step5 = document.createElement('p');
    step1.setAttribute('id', 'step1');
    step2.setAttribute('id', 'step2');
    step3.setAttribute('id', 'step3');
    step4.setAttribute('id', 'step4');
    step5.setAttribute('id', 'step5');

// Derivation steps
    let text1 = "Use the slider to derive the equation";
    let text2 = "Consider calculating the area of the triangle,<div class=\"der\" id=\"step\">$$dA = \\frac{1}{2}(r)(r\\,d\\theta)$$</div>";
    let text3 = "Using angular momentum formula, $$L = I \\omega$$";
    let text4 = "<div class=\"der\" id=\"stepInt\">$$\\frac{dA}{dt} = \\frac{1}{2}r^2 \\omega$$</div>";
    let text5 = "<div class=\"der\" id=\"stepFinal\">$$\\frac{dA}{dt} = \\frac{1}{2}\\frac{L}{m} = \\text{constant}$$</div>We have shown that aerial velocity is constant. This implies that the planet covers equal areas in equal time as it moves through its orbit, meaning it must move faster when closer to the Sun.";

// Setting the inner html
    step1.innerHTML = text1;
    step2.innerHTML = text2;
    step3.innerHTML = text3;
    step4.innerHTML = text4;
    step5.innerHTML = text5;
    
    step1.style.fontSize = '12px';
    step2.style.fontSize = '12px';
    step3.style.fontSize = '12px';
    step4.style.fontSize = '12px';
    step5.style.fontSize = '12px';
    
    step2.style.visibility = "hidden";
    step3.style.visibility = "hidden";
    step4.style.visibility = "hidden";
    step5.style.visibility = "hidden";

// Properly adding to desired parent
    $('#exp').append(divRow);
    $('#row').append(divCol1);
    $('#row').append(divCol2);
    $('#col1').append(step1);
    $('#col1').append(step2);
    $('#col1').append(step3);
    $('#col1').append(step4);
    $('#col1').append(step5);

// Setup slider monitoring
    sliderReady();
    
// Render the math blocks via MathJax
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

// Safely attach click bindings after elements exist in the DOM
    MathJax.Hub.Queue(() => {
        d3.select("#step").on("click", () => {
            let moreSteps = document.getElementById("moreSteps");
            if(moreSteps) moreSteps.style.visibility = "visible";
        });
        d3.select("#stepInt").on("click", () => {
            let moreSteps2 = document.getElementById("moreSteps2");
            if(moreSteps2) moreSteps2.style.visibility = "visible";
        });
    });
}

function sliderReady()
{
    d3.select("#mySlider").on("input", function()
    {
        let value = d3.select(this).property("value");
        let max = d3.select(this).property("max");
        let min = d3.select(this).property("min");
        let length = value / (max - min);
        
        let moreSteps = document.getElementById("moreSteps");
        let moreSteps2 = document.getElementById("moreSteps2");

        if(length < 1/4)
        {
            if(moreSteps2) moreSteps2.style.visibility = "hidden";
            if(moreSteps) moreSteps.style.visibility = "hidden";
            step2.style.visibility = "hidden";
            step3.style.visibility = "hidden";
            step4.style.visibility = "hidden";
            step5.style.visibility = "hidden";
        }
        else if(length >= 1/4 && length < 2/5)
        {
            if(moreSteps2) moreSteps2.style.visibility = "hidden";
            step2.style.visibility = "visible";
            step3.style.visibility = "hidden";
            step4.style.visibility = "hidden";
            step5.style.visibility = "hidden";
        }
        else if(length >= 2/5 && length < 3/5)
        {
            if(moreSteps2) moreSteps2.style.visibility = "hidden";
            step2.style.visibility = "visible";
            step3.style.visibility = "visible";
            step4.style.visibility = "hidden";
            step5.style.visibility = "hidden";
        }
        else if(length >= 3/5 && length < 4/5)
        {
            step2.style.visibility = "visible";
            step3.style.visibility = "visible";
            step4.style.visibility = "visible";
            step5.style.visibility = "hidden";
        }
        else if(length >= 4/5)
        {
            step2.style.visibility = "visible";
            step3.style.visibility = "visible";
            step4.style.visibility = "visible";
            step5.style.visibility = "visible";
            
            d3.select(".arrowBody")
                .style("visibility", "visible")
                .on("click", () => {
                    window.location = "11_Summary.html";
                });
        }
    });
}