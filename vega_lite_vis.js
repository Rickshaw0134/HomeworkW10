var vg_1 = "Population_Density_Map.vg.json"; 
vegaEmbed("#chloropleth_map", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

var vg_2 = "population_line.vg.json";
vegaEmbed("#line_chart", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
