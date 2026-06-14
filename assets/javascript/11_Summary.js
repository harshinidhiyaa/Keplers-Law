/*Slider properties*/ 
$("#slider11").roundSlider({
    circleShape: "custom-quarter",
    radius: 480,
    width: 5,
    startAngle: 225,
    handleSize: "34,12", // Cleaned up the double definition and kept explicit dimension string
    handleShape: "square",
    value: 100,
    sliderType: "min-range",
    showTooltip: false,
    lineCap: "round"
});

/*Discrete initializations*/ 
d3.select("#curve").attr("visibility", "hidden");
d3.select("#reverse_curve").attr("visibility", "hidden");
d3.select("#st_line").attr("visibility", "hidden");

$("#slider11").on("update", function (e) {
    let i = e.value;
    console.log(i);
    var p = (100 - i) * 13 / 100;

    if (i == 100) {
        d3.select("#guitar-body")
            .attr("stroke-opacity", 0.99)
            .attr("opacity", 0.99);

        d3.selectAll("#text_reality")
            .attr("visibility", "");
    }

    if (i < 100) {
        d3.select("#text_first").style("visibility", "hidden");
    } else {
        d3.select("#text_first").style("visibility", "visible");
    }

    // Fixed bitwise operational bug here using logical &&
    if (i < 100 && i > 75) { 
        d3.select("#labels_drag_summary").attr("visibility", "hidden");
        d3.select("#text_reality").style("visibility", "visible");

        d3.select("#guitar-body")
            .attr("stroke-opacity", (i) * 0.5 / 100)
            .attr("opacity", (i) * 0.2 / 100);

        d3.select("#strings_h1").transition().duration(400).attr("stroke", "black");
        d3.select("#strings_h2").transition().duration(400).attr("stroke", "black");
        d3.select("#strings_h3").transition().duration(400).attr("stroke", "black");
        d3.select("#strings_h4").transition().duration(400).attr("stroke", "black");

        d3.selectAll("#strings_v").transition().duration(400).attr("opacity", p);
    } else {
        d3.select("#text_reality").style("visibility", "hidden");
    }

    if (i == 75) {
        d3.select("#guitar-body").attr("stroke-opacity", 0).attr("opacity", 0);
        d3.select("#strings_h1").attr("visibility", "hidden");
        d3.select("#strings_h3").attr("visibility", "hidden");
        d3.select("#strings_h4").attr("visibility", "hidden");
    }

    /*Idealization */
    if (i < 75 && i > 49) {
        d3.select("#text_ideal").style("visibility", "visible");
    } else {
        d3.select("#text_ideal").style("visibility", "hidden");
    }

    if (i < 75 && i > 66) {
        d3.select("#strings_h2")
            .attr("stroke-width", (1.3 + (75 - i) * 2))
            .attr("stroke", "green");
    }

    if (i == 66) {
        d3.select("#strings_h2").attr("visibility", "hidden");
        d3.select("#st_line").attr("visibility", "");
    }

    if (i > 67) {
        d3.select("#st_line").attr("visibility", "hidden");
        d3.select("#strings_h2").attr("visibility", "");
    }

    if (i < 67 && i > 49) {
        d3.selectAll("#str" + (66 - i)).attr("visibility", "hidden");
        d3.selectAll("#str" + (67 - i)).attr("visibility", "");

        d3.select("#curve").attr("visibility", "hidden");
        d3.select("#st_line").attr("visibility", "");
    }

    if (i < 63 && i > 45) {
        d3.select("#dx_label").attr("visibility", "");
    } else { 
        d3.select("#dx_label").attr("visibility", "hidden");
    }

    /*Discretization*/
    if (i < 50 && i > 25) {
        d3.select("#text_dis").style("visibility", "visible");
    } else {
        d3.select("#text_dis").style("visibility", "hidden");
    }

    if (i < 50) {
        d3.selectAll("#text_ideal").attr("visibility", "hidden");
        d3.selectAll("#text_dis").attr("visibility", "");
        d3.select("#textholder_center").attr("visibility", "");
        d3.select("#st_line").attr("visibility", "hidden");
        d3.select("#curve").attr("visibility", "");
    } else {
        d3.selectAll("#text_dis").attr("visibility", "hidden");
        d3.select("#textholder_center").attr("visibility", "hidden");
    }

    if (i < 45) {
        d3.select("#curve_nonfocus").attr("opacity", i / 200);
    } else {
        d3.select("#curve_nonfocus").attr("opacity", 1);
        d3.select("#curve_focus").attr("opacity", 1);
    }

    if (i < 41 && i > 33) {
        d3.select("#curve_nonfocus").attr("opacity", i / 400);
        d3.select("#curve_focus").attr("opacity", i / 400);
        d3.select("#zoom_into11").attr("opacity", (40 - i) / 5);
        d3.select("#xaxis").style("opacity", (40 - i) / 5);
        d3.select("#yaxis").style("opacity", (40 - i) / 5);
        d3.select("#s-l_11")
            .style("opacity", (40 - i) / 5);
        d3.select("#s-r_11")
            .style("opacity", (40 - i) / 5);
    }

    if (i < 41) {
        d3.select("#guitar1").attr("visibility", "hidden");
    } else {
        d3.select("#guitar1").attr("visibility", "");
    }

    if (i < 34 && i > 24) {
        d3.select("#curve").attr("visibility", "hidden");
        d3.select("#zoom_into11").attr("opacity", 1);
        d3.select("#xaxis").style("opacity", 1);
        d3.select("#yaxis").style("opacity", 1);
        d3.select("#s-l_11").style("opacity", 1);
        d3.select("#s-r_11").style("opacity", 1);
    }

    if (i < 34) {
        d3.select("#curve").attr("visibility", "hidden");
    }

    /*Geometric Structure*/
    if (i < 25) {
        d3.select("#text_geo").style("visibility", "visible");
    } else {
        d3.select("#text_geo").style("visibility", "hidden");
    }

    if (i < 25 && i > 17) {
        d3.selectAll("#text_dis").attr("visibility", "hidden");
        d3.select("#textholder_center").attr("visibility", "hidden");
        d3.select("#textholder_right").attr("visibility", "");

        d3.select("#zoom_into11").attr("opacity", 0);
        d3.select("#s-l_11").style("opacity", 0);
        d3.select("#s-r_11").style("opacity", 0);
        
        d3.select("#xaxis").style("opacity", 0);
        d3.select("#yaxis").style("opacity", 0);
        
        d3.select("#maths1").style("opacity", 1);
    } else {
        d3.select("#maths1").style("opacity", 0);
    }

    if (i < 18 && i > 10) {
        d3.select("#maths2").style("opacity", 1);
    } else {
        d3.select("#maths2").style("opacity", 0);
    }

    if (i < 11) {
        d3.select("#maths3").style("opacity", 1);
    } else {
        d3.select("#maths3").style("opacity", 0);
    }

    /*Maths*/
    if (i == 0) {
        d3.selectAll("#text_mat").attr("visibility", "");
        d3.selectAll("#text_geo").attr("visibility", "hidden");
        d3.select("#exp_arrow").attr("visibility", "");
    } else {
        d3.selectAll("#text_mat").attr("visibility", "hidden");
        d3.select("#exp_arrow").attr("visibility", "hidden");
    }
});