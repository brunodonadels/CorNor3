var size = 0;
var placement = 'point';

var style_DelegacinCrdobaNorte_26 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "18.2px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#000000";
    var bufferWidth = 4.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Localidad") !== null) {
        labelText = String(feature.get("Localidad"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 24.0 + size, points: 5,
            radius2: 12.0, stroke: new ol.style.Stroke({color: 'rgba(14,14,14,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(0,214,207,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
