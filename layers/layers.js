var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_PEAINDEC_3 = new ol.format.GeoJSON();
var features_PEAINDEC_3 = format_PEAINDEC_3.readFeatures(json_PEAINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_3.addFeatures(features_PEAINDEC_3);
var lyr_PEAINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_3, 
                style: style_PEAINDEC_3,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_3_0.png" /> 2.800 - 12.000<br />\
    <img src="styles/legend/PEAINDEC_3_1.png" /> 12.001 - 35.000<br />\
    <img src="styles/legend/PEAINDEC_3_2.png" /> 35.001 - 70.000<br />\
    <img src="styles/legend/PEAINDEC_3_3.png" /> 70.001 - 150.000<br />\
    <img src="styles/legend/PEAINDEC_3_4.png" /> 150.001 o más<br />'
        });
var format_PoblacinpordepartamentoINDEC_4 = new ol.format.GeoJSON();
var features_PoblacinpordepartamentoINDEC_4 = format_PoblacinpordepartamentoINDEC_4.readFeatures(json_PoblacinpordepartamentoINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordepartamentoINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordepartamentoINDEC_4.addFeatures(features_PoblacinpordepartamentoINDEC_4);
var lyr_PoblacinpordepartamentoINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordepartamentoINDEC_4, 
                style: style_PoblacinpordepartamentoINDEC_4,
                interactive: true,
    title: 'Población por departamento (INDEC)<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_4_0.png" /> 4.500 - 37.000<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_4_1.png" /> 37.001 - 109.550<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_4_2.png" /> 109.551 - 225.150<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_4_3.png" /> 225.151 o más<br />'
        });
var format_ViviendasenreasruralesINDEC_5 = new ol.format.GeoJSON();
var features_ViviendasenreasruralesINDEC_5 = format_ViviendasenreasruralesINDEC_5.readFeatures(json_ViviendasenreasruralesINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasenreasruralesINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasenreasruralesINDEC_5.addFeatures(features_ViviendasenreasruralesINDEC_5);
var lyr_ViviendasenreasruralesINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasenreasruralesINDEC_5, 
                style: style_ViviendasenreasruralesINDEC_5,
                interactive: true,
    title: 'Viviendas en áreas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_5_0.png" /> 900 - 2.500<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_5_1.png" /> 2.501 - 4.000<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_5_2.png" /> 4.001 - 6.500<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_5_3.png" /> 6.501 - 9.000<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_5_4.png" /> 9.001 - 15.000<br />'
        });
var format_CabezasporcinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasporcinosMAGyP_6 = format_CabezasporcinosMAGyP_6.readFeatures(json_CabezasporcinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasporcinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasporcinosMAGyP_6.addFeatures(features_CabezasporcinosMAGyP_6);
var lyr_CabezasporcinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasporcinosMAGyP_6, 
                style: style_CabezasporcinosMAGyP_6,
                interactive: true,
    title: 'Cabezas porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_6_0.png" /> 800 - 7.000<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_6_1.png" /> 7.001 - 27.500<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_6_2.png" /> 27.501 - 62.500<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_6_3.png" /> 62.501 o más<br />'
        });
var format_CabezasdeovinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasdeovinosMAGyP_7 = format_CabezasdeovinosMAGyP_7.readFeatures(json_CabezasdeovinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosMAGyP_7.addFeatures(features_CabezasdeovinosMAGyP_7);
var lyr_CabezasdeovinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosMAGyP_7, 
                style: style_CabezasdeovinosMAGyP_7,
                interactive: true,
    title: 'Cabezas de ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_0.png" /> 250 - 8.500<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_1.png" /> 8.501 - 16.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_2.png" /> 16.001 o más<br />'
        });
var format_CabezasdecaprinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasdecaprinosMAGyP_8 = format_CabezasdecaprinosMAGyP_8.readFeatures(json_CabezasdecaprinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdecaprinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdecaprinosMAGyP_8.addFeatures(features_CabezasdecaprinosMAGyP_8);
var lyr_CabezasdecaprinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdecaprinosMAGyP_8, 
                style: style_CabezasdecaprinosMAGyP_8,
                interactive: true,
    title: 'Cabezas de caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_0.png" /> 800 - 4.500<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_1.png" /> 4.501 - 10.000<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_2.png" /> 10.001 - 22.500<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_3.png" /> 22.501 o más<br />'
        });
var format_CabezasdebovinosMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_9 = format_CabezasdebovinosMAGyP_9.readFeatures(json_CabezasdebovinosMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_9.addFeatures(features_CabezasdebovinosMAGyP_9);
var lyr_CabezasdebovinosMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_9, 
                style: style_CabezasdebovinosMAGyP_9,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_0.png" /> 100 - 50.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_1.png" /> 50.001 - 150.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_2.png" /> 150.001 - 300.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_3.png" /> 300.001 o más<br />'
        });
var format_HectreasmazMAGyP_10 = new ol.format.GeoJSON();
var features_HectreasmazMAGyP_10 = format_HectreasmazMAGyP_10.readFeatures(json_HectreasmazMAGyP_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasmazMAGyP_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasmazMAGyP_10.addFeatures(features_HectreasmazMAGyP_10);
var lyr_HectreasmazMAGyP_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasmazMAGyP_10, 
                style: style_HectreasmazMAGyP_10,
                interactive: true,
    title: 'Hectáreas maíz (MAGyP)<br />\
    <img src="styles/legend/HectreasmazMAGyP_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreasmazMAGyP_10_1.png" /> 1.200 - 45.000<br />\
    <img src="styles/legend/HectreasmazMAGyP_10_2.png" /> 45.001 - 125.000<br />\
    <img src="styles/legend/HectreasmazMAGyP_10_3.png" /> 125.001 - 300.000<br />\
    <img src="styles/legend/HectreasmazMAGyP_10_4.png" /> 300.001 o más<br />'
        });
var format_HectreasHortalizasINDEC_11 = new ol.format.GeoJSON();
var features_HectreasHortalizasINDEC_11 = format_HectreasHortalizasINDEC_11.readFeatures(json_HectreasHortalizasINDEC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasHortalizasINDEC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasHortalizasINDEC_11.addFeatures(features_HectreasHortalizasINDEC_11);
var lyr_HectreasHortalizasINDEC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasHortalizasINDEC_11, 
                style: style_HectreasHortalizasINDEC_11,
                interactive: true,
    title: 'Hectáreas Hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreasHortalizasINDEC_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreasHortalizasINDEC_11_1.png" /> 1 - 445<br />\
    <img src="styles/legend/HectreasHortalizasINDEC_11_2.png" /> 446 - 1.400<br />\
    <img src="styles/legend/HectreasHortalizasINDEC_11_3.png" /> 1.401 - 2.500<br />\
    <img src="styles/legend/HectreasHortalizasINDEC_11_4.png" /> 2.501 o más<br />'
        });
var format_HectreasLegumbresINDEC_12 = new ol.format.GeoJSON();
var features_HectreasLegumbresINDEC_12 = format_HectreasLegumbresINDEC_12.readFeatures(json_HectreasLegumbresINDEC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasLegumbresINDEC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasLegumbresINDEC_12.addFeatures(features_HectreasLegumbresINDEC_12);
var lyr_HectreasLegumbresINDEC_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasLegumbresINDEC_12, 
                style: style_HectreasLegumbresINDEC_12,
                interactive: true,
    title: 'Hectáreas Legumbres (INDEC)<br />\
    <img src="styles/legend/HectreasLegumbresINDEC_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreasLegumbresINDEC_12_1.png" /> 1 - 70<br />\
    <img src="styles/legend/HectreasLegumbresINDEC_12_2.png" /> 71 - 200<br />\
    <img src="styles/legend/HectreasLegumbresINDEC_12_3.png" /> 201 - 380<br />'
        });
var format_HectreasOlivosINDEC_13 = new ol.format.GeoJSON();
var features_HectreasOlivosINDEC_13 = format_HectreasOlivosINDEC_13.readFeatures(json_HectreasOlivosINDEC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasOlivosINDEC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasOlivosINDEC_13.addFeatures(features_HectreasOlivosINDEC_13);
var lyr_HectreasOlivosINDEC_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasOlivosINDEC_13, 
                style: style_HectreasOlivosINDEC_13,
                interactive: true,
    title: 'Hectáreas Olivos (INDEC)<br />\
    <img src="styles/legend/HectreasOlivosINDEC_13_0.png" /> 0<br />\
    <img src="styles/legend/HectreasOlivosINDEC_13_1.png" /> 1 - 30<br />\
    <img src="styles/legend/HectreasOlivosINDEC_13_2.png" /> 31 - 250<br />\
    <img src="styles/legend/HectreasOlivosINDEC_13_3.png" /> 251 - 2.000<br />'
        });
var format_HectreastrigoMAGyP_14 = new ol.format.GeoJSON();
var features_HectreastrigoMAGyP_14 = format_HectreastrigoMAGyP_14.readFeatures(json_HectreastrigoMAGyP_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreastrigoMAGyP_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreastrigoMAGyP_14.addFeatures(features_HectreastrigoMAGyP_14);
var lyr_HectreastrigoMAGyP_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreastrigoMAGyP_14, 
                style: style_HectreastrigoMAGyP_14,
                interactive: true,
    title: 'Hectáreas trigo (MAGyP)<br />\
    <img src="styles/legend/HectreastrigoMAGyP_14_0.png" /> 0<br />\
    <img src="styles/legend/HectreastrigoMAGyP_14_1.png" /> 1 - 25.000<br />\
    <img src="styles/legend/HectreastrigoMAGyP_14_2.png" /> 25.001 - 85.000<br />\
    <img src="styles/legend/HectreastrigoMAGyP_14_3.png" /> 85.001 - 200.000<br />\
    <img src="styles/legend/HectreastrigoMAGyP_14_4.png" /> 200.001 o más<br />'
        });
var format_HectreasGirasolMAGyP_15 = new ol.format.GeoJSON();
var features_HectreasGirasolMAGyP_15 = format_HectreasGirasolMAGyP_15.readFeatures(json_HectreasGirasolMAGyP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasGirasolMAGyP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasGirasolMAGyP_15.addFeatures(features_HectreasGirasolMAGyP_15);
var lyr_HectreasGirasolMAGyP_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasGirasolMAGyP_15, 
                style: style_HectreasGirasolMAGyP_15,
                interactive: true,
    title: 'Hectáreas Girasol (MAGyP)<br />\
    <img src="styles/legend/HectreasGirasolMAGyP_15_0.png" /> 0<br />\
    <img src="styles/legend/HectreasGirasolMAGyP_15_1.png" /> 1 - 500<br />\
    <img src="styles/legend/HectreasGirasolMAGyP_15_2.png" /> 501 - 3.500<br />\
    <img src="styles/legend/HectreasGirasolMAGyP_15_3.png" /> 3.501 o más<br />'
        });
var format_HectreassojaMAGyP_16 = new ol.format.GeoJSON();
var features_HectreassojaMAGyP_16 = format_HectreassojaMAGyP_16.readFeatures(json_HectreassojaMAGyP_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreassojaMAGyP_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreassojaMAGyP_16.addFeatures(features_HectreassojaMAGyP_16);
var lyr_HectreassojaMAGyP_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreassojaMAGyP_16, 
                style: style_HectreassojaMAGyP_16,
                interactive: true,
    title: 'Hectáreas soja (MAGyP)<br />\
    <img src="styles/legend/HectreassojaMAGyP_16_0.png" /> 0<br />\
    <img src="styles/legend/HectreassojaMAGyP_16_1.png" /> 1.500 - 100.000<br />\
    <img src="styles/legend/HectreassojaMAGyP_16_2.png" /> 100.001 - 250.000<br />\
    <img src="styles/legend/HectreassojaMAGyP_16_3.png" /> 250.001 - 450.000<br />\
    <img src="styles/legend/HectreassojaMAGyP_16_4.png" /> 450.001 o más<br />'
        });
var format_HectreasManMAGyP_17 = new ol.format.GeoJSON();
var features_HectreasManMAGyP_17 = format_HectreasManMAGyP_17.readFeatures(json_HectreasManMAGyP_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasManMAGyP_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasManMAGyP_17.addFeatures(features_HectreasManMAGyP_17);
var lyr_HectreasManMAGyP_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasManMAGyP_17, 
                style: style_HectreasManMAGyP_17,
                interactive: true,
    title: 'Hectáreas Maní (MAGyP)<br />\
    <img src="styles/legend/HectreasManMAGyP_17_0.png" /> 0<br />\
    <img src="styles/legend/HectreasManMAGyP_17_1.png" /> 1 - 1.000<br />\
    <img src="styles/legend/HectreasManMAGyP_17_2.png" /> 1.001 - 3.500<br />\
    <img src="styles/legend/HectreasManMAGyP_17_3.png" /> 3.501 - 10.000<br />\
    <img src="styles/legend/HectreasManMAGyP_17_4.png" /> 10.001 o más<br />'
        });
var format_LocalidadesCrdobaNorte_18 = new ol.format.GeoJSON();
var features_LocalidadesCrdobaNorte_18 = format_LocalidadesCrdobaNorte_18.readFeatures(json_LocalidadesCrdobaNorte_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesCrdobaNorte_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesCrdobaNorte_18.addFeatures(features_LocalidadesCrdobaNorte_18);
var lyr_LocalidadesCrdobaNorte_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LocalidadesCrdobaNorte_18, 
                style: style_LocalidadesCrdobaNorte_18,
                interactive: true,
                title: '<img src="styles/legend/LocalidadesCrdobaNorte_18.png" /> Localidades Córdoba Norte'
            });
var format_Capacitaciones2020difusin_19 = new ol.format.GeoJSON();
var features_Capacitaciones2020difusin_19 = format_Capacitaciones2020difusin_19.readFeatures(json_Capacitaciones2020difusin_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2020difusin_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2020difusin_19.addFeatures(features_Capacitaciones2020difusin_19);
var lyr_Capacitaciones2020difusin_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2020difusin_19, 
                style: style_Capacitaciones2020difusin_19,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2020difusin_19.png" /> Capacitaciones 2020 (difusión)'
            });
var format_Capacitaciones2019tcnicas_20 = new ol.format.GeoJSON();
var features_Capacitaciones2019tcnicas_20 = format_Capacitaciones2019tcnicas_20.readFeatures(json_Capacitaciones2019tcnicas_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2019tcnicas_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2019tcnicas_20.addFeatures(features_Capacitaciones2019tcnicas_20);
var lyr_Capacitaciones2019tcnicas_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2019tcnicas_20, 
                style: style_Capacitaciones2019tcnicas_20,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2019tcnicas_20.png" /> Capacitaciones 2019 (técnicas)'
            });
var format_Capacitaciones2018_21 = new ol.format.GeoJSON();
var features_Capacitaciones2018_21 = format_Capacitaciones2018_21.readFeatures(json_Capacitaciones2018_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2018_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2018_21.addFeatures(features_Capacitaciones2018_21);
var lyr_Capacitaciones2018_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2018_21, 
                style: style_Capacitaciones2018_21,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2018_21.png" /> Capacitaciones 2018'
            });
var format_Capacitaciones2017difusin_22 = new ol.format.GeoJSON();
var features_Capacitaciones2017difusin_22 = format_Capacitaciones2017difusin_22.readFeatures(json_Capacitaciones2017difusin_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2017difusin_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2017difusin_22.addFeatures(features_Capacitaciones2017difusin_22);
var lyr_Capacitaciones2017difusin_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2017difusin_22, 
                style: style_Capacitaciones2017difusin_22,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2017difusin_22.png" /> Capacitaciones 2017 (difusión)'
            });
var format_BERCrdobaNorte_23 = new ol.format.GeoJSON();
var features_BERCrdobaNorte_23 = format_BERCrdobaNorte_23.readFeatures(json_BERCrdobaNorte_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERCrdobaNorte_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERCrdobaNorte_23.addFeatures(features_BERCrdobaNorte_23);
var lyr_BERCrdobaNorte_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERCrdobaNorte_23, 
                style: style_BERCrdobaNorte_23,
                interactive: true,
                title: '<img src="styles/legend/BERCrdobaNorte_23.png" /> BER Córdoba Norte'
            });
var format_BERCrdobaNorte_24 = new ol.format.GeoJSON();
var features_BERCrdobaNorte_24 = format_BERCrdobaNorte_24.readFeatures(json_BERCrdobaNorte_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERCrdobaNorte_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERCrdobaNorte_24.addFeatures(features_BERCrdobaNorte_24);
var lyr_BERCrdobaNorte_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERCrdobaNorte_24, 
                style: style_BERCrdobaNorte_24,
                interactive: true,
                title: '<img src="styles/legend/BERCrdobaNorte_24.png" /> BER Córdoba Norte'
            });
var format_PlantasyempresasdelmanCamaraArgdelman_25 = new ol.format.GeoJSON();
var features_PlantasyempresasdelmanCamaraArgdelman_25 = format_PlantasyempresasdelmanCamaraArgdelman_25.readFeatures(json_PlantasyempresasdelmanCamaraArgdelman_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlantasyempresasdelmanCamaraArgdelman_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantasyempresasdelmanCamaraArgdelman_25.addFeatures(features_PlantasyempresasdelmanCamaraArgdelman_25);
var lyr_PlantasyempresasdelmanCamaraArgdelman_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PlantasyempresasdelmanCamaraArgdelman_25, 
                style: style_PlantasyempresasdelmanCamaraArgdelman_25,
                interactive: true,
                title: '<img src="styles/legend/PlantasyempresasdelmanCamaraArgdelman_25.png" /> Plantas y empresas del maní (Camara Arg. del maní)'
            });
var format_DelegacinCrdobaNorte_26 = new ol.format.GeoJSON();
var features_DelegacinCrdobaNorte_26 = format_DelegacinCrdobaNorte_26.readFeatures(json_DelegacinCrdobaNorte_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelegacinCrdobaNorte_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelegacinCrdobaNorte_26.addFeatures(features_DelegacinCrdobaNorte_26);
var lyr_DelegacinCrdobaNorte_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DelegacinCrdobaNorte_26, 
                style: style_DelegacinCrdobaNorte_26,
                interactive: true,
                title: '<img src="styles/legend/DelegacinCrdobaNorte_26.png" /> Delegación Córdoba Norte'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_PEAINDEC_3.setVisible(true);lyr_PoblacinpordepartamentoINDEC_4.setVisible(true);lyr_ViviendasenreasruralesINDEC_5.setVisible(true);lyr_CabezasporcinosMAGyP_6.setVisible(true);lyr_CabezasdeovinosMAGyP_7.setVisible(true);lyr_CabezasdecaprinosMAGyP_8.setVisible(true);lyr_CabezasdebovinosMAGyP_9.setVisible(true);lyr_HectreasmazMAGyP_10.setVisible(true);lyr_HectreasHortalizasINDEC_11.setVisible(true);lyr_HectreasLegumbresINDEC_12.setVisible(true);lyr_HectreasOlivosINDEC_13.setVisible(true);lyr_HectreastrigoMAGyP_14.setVisible(true);lyr_HectreasGirasolMAGyP_15.setVisible(true);lyr_HectreassojaMAGyP_16.setVisible(true);lyr_HectreasManMAGyP_17.setVisible(true);lyr_LocalidadesCrdobaNorte_18.setVisible(true);lyr_Capacitaciones2020difusin_19.setVisible(true);lyr_Capacitaciones2019tcnicas_20.setVisible(true);lyr_Capacitaciones2018_21.setVisible(true);lyr_Capacitaciones2017difusin_22.setVisible(true);lyr_BERCrdobaNorte_23.setVisible(true);lyr_BERCrdobaNorte_24.setVisible(true);lyr_PlantasyempresasdelmanCamaraArgdelman_25.setVisible(true);lyr_DelegacinCrdobaNorte_26.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamentos_2,lyr_PEAINDEC_3,lyr_PoblacinpordepartamentoINDEC_4,lyr_ViviendasenreasruralesINDEC_5,lyr_CabezasporcinosMAGyP_6,lyr_CabezasdeovinosMAGyP_7,lyr_CabezasdecaprinosMAGyP_8,lyr_CabezasdebovinosMAGyP_9,lyr_HectreasmazMAGyP_10,lyr_HectreasHortalizasINDEC_11,lyr_HectreasLegumbresINDEC_12,lyr_HectreasOlivosINDEC_13,lyr_HectreastrigoMAGyP_14,lyr_HectreasGirasolMAGyP_15,lyr_HectreassojaMAGyP_16,lyr_HectreasManMAGyP_17,lyr_LocalidadesCrdobaNorte_18,lyr_Capacitaciones2020difusin_19,lyr_Capacitaciones2019tcnicas_20,lyr_Capacitaciones2018_21,lyr_Capacitaciones2017difusin_22,lyr_BERCrdobaNorte_23,lyr_BERCrdobaNorte_24,lyr_PlantasyempresasdelmanCamaraArgdelman_25,lyr_DelegacinCrdobaNorte_26];
lyr_Departamentos_2.set('fieldAliases', {'Depto:': 'Depto:', });
lyr_PEAINDEC_3.set('fieldAliases', {'PEA': 'PEA', });
lyr_PoblacinpordepartamentoINDEC_4.set('fieldAliases', {'Poblacion': 'Poblacion', });
lyr_ViviendasenreasruralesINDEC_5.set('fieldAliases', {'Viv.Rur': 'Viv.Rur', });
lyr_CabezasporcinosMAGyP_6.set('fieldAliases', {'Porcinos': 'Porcinos', });
lyr_CabezasdeovinosMAGyP_7.set('fieldAliases', {'Ovinos': 'Ovinos', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldAliases', {'Caprinos': 'Caprinos', });
lyr_CabezasdebovinosMAGyP_9.set('fieldAliases', {'Bovinos': 'Bovinos', });
lyr_HectreasmazMAGyP_10.set('fieldAliases', {'Maiz': 'Maiz', });
lyr_HectreasHortalizasINDEC_11.set('fieldAliases', {'Hortalizas': 'Hortalizas', });
lyr_HectreasLegumbresINDEC_12.set('fieldAliases', {'Legumbres': 'Legumbres', });
lyr_HectreasOlivosINDEC_13.set('fieldAliases', {'Olivos': 'Olivos', });
lyr_HectreastrigoMAGyP_14.set('fieldAliases', {'Trigo': 'Trigo', });
lyr_HectreasGirasolMAGyP_15.set('fieldAliases', {'Girasol': 'Girasol', });
lyr_HectreassojaMAGyP_16.set('fieldAliases', {'Soja': 'Soja', });
lyr_HectreasManMAGyP_17.set('fieldAliases', {'Mani': 'Mani', });
lyr_LocalidadesCrdobaNorte_18.set('fieldAliases', {'Localidad': 'Localidad', 'Poblacion': 'Poblacion', });
lyr_Capacitaciones2020difusin_19.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo Capa': 'Tipo Capa', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_Capacitaciones2019tcnicas_20.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo capa': 'Tipo capa', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_Capacitaciones2018_21.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo capa': 'Tipo capa', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_Capacitaciones2017difusin_22.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo Capa': 'Tipo Capa', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_BERCrdobaNorte_23.set('fieldAliases', {'Num.': 'Num.', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', });
lyr_BERCrdobaNorte_24.set('fieldAliases', {'Num.': 'Num.', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', });
lyr_PlantasyempresasdelmanCamaraArgdelman_25.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_DelegacinCrdobaNorte_26.set('fieldAliases', {'Localidad': 'Localidad', 'Direccion': 'Direccion', 'Prest 2016': 'Prest 2016', 'Prest 2017': 'Prest 2017', 'Prest 2018': 'Prest 2018', 'Prest 2019': 'Prest 2019', 'Prest 2020': 'Prest 2020', 'CAD': 'CAD', });
lyr_Departamentos_2.set('fieldImages', {'Depto:': 'TextEdit', });
lyr_PEAINDEC_3.set('fieldImages', {'PEA': 'TextEdit', });
lyr_PoblacinpordepartamentoINDEC_4.set('fieldImages', {'Poblacion': 'TextEdit', });
lyr_ViviendasenreasruralesINDEC_5.set('fieldImages', {'Viv.Rur': 'TextEdit', });
lyr_CabezasporcinosMAGyP_6.set('fieldImages', {'Porcinos': 'TextEdit', });
lyr_CabezasdeovinosMAGyP_7.set('fieldImages', {'Ovinos': 'TextEdit', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldImages', {'Caprinos': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_9.set('fieldImages', {'Bovinos': 'TextEdit', });
lyr_HectreasmazMAGyP_10.set('fieldImages', {'Maiz': 'TextEdit', });
lyr_HectreasHortalizasINDEC_11.set('fieldImages', {'Hortalizas': 'TextEdit', });
lyr_HectreasLegumbresINDEC_12.set('fieldImages', {'Legumbres': 'TextEdit', });
lyr_HectreasOlivosINDEC_13.set('fieldImages', {'Olivos': 'TextEdit', });
lyr_HectreastrigoMAGyP_14.set('fieldImages', {'Trigo': '', });
lyr_HectreasGirasolMAGyP_15.set('fieldImages', {'Girasol': 'TextEdit', });
lyr_HectreassojaMAGyP_16.set('fieldImages', {'Soja': 'TextEdit', });
lyr_HectreasManMAGyP_17.set('fieldImages', {'Mani': 'TextEdit', });
lyr_LocalidadesCrdobaNorte_18.set('fieldImages', {'Localidad': '', 'Poblacion': 'TextEdit', });
lyr_Capacitaciones2020difusin_19.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo Capa': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'Range', });
lyr_Capacitaciones2019tcnicas_20.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo capa': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'Range', });
lyr_Capacitaciones2018_21.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo capa': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'Range', });
lyr_Capacitaciones2017difusin_22.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo Capa': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'TextEdit', });
lyr_BERCrdobaNorte_23.set('fieldImages', {'Num.': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', });
lyr_BERCrdobaNorte_24.set('fieldImages', {'Num.': '', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', });
lyr_PlantasyempresasdelmanCamaraArgdelman_25.set('fieldImages', {'Nombre': 'TextEdit', });
lyr_DelegacinCrdobaNorte_26.set('fieldImages', {'Localidad': '', 'Direccion': '', 'Prest 2016': '', 'Prest 2017': '', 'Prest 2018': '', 'Prest 2019': '', 'Prest 2020': '', 'CAD': '', });
lyr_Departamentos_2.set('fieldLabels', {'Depto:': 'inline label', });
lyr_PEAINDEC_3.set('fieldLabels', {'PEA': 'inline label', });
lyr_PoblacinpordepartamentoINDEC_4.set('fieldLabels', {'Poblacion': 'inline label', });
lyr_ViviendasenreasruralesINDEC_5.set('fieldLabels', {'Viv.Rur': 'inline label', });
lyr_CabezasporcinosMAGyP_6.set('fieldLabels', {'Porcinos': 'inline label', });
lyr_CabezasdeovinosMAGyP_7.set('fieldLabels', {'Ovinos': 'inline label', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldLabels', {'Caprinos': 'inline label', });
lyr_CabezasdebovinosMAGyP_9.set('fieldLabels', {'Bovinos': 'inline label', });
lyr_HectreasmazMAGyP_10.set('fieldLabels', {'Maiz': 'inline label', });
lyr_HectreasHortalizasINDEC_11.set('fieldLabels', {'Hortalizas': 'inline label', });
lyr_HectreasLegumbresINDEC_12.set('fieldLabels', {'Legumbres': 'inline label', });
lyr_HectreasOlivosINDEC_13.set('fieldLabels', {'Olivos': 'inline label', });
lyr_HectreastrigoMAGyP_14.set('fieldLabels', {'Trigo': 'inline label', });
lyr_HectreasGirasolMAGyP_15.set('fieldLabels', {'Girasol': 'inline label', });
lyr_HectreassojaMAGyP_16.set('fieldLabels', {'Soja': 'inline label', });
lyr_HectreasManMAGyP_17.set('fieldLabels', {'Mani': 'inline label', });
lyr_LocalidadesCrdobaNorte_18.set('fieldLabels', {'Localidad': 'inline label', 'Poblacion': 'inline label', });
lyr_Capacitaciones2020difusin_19.set('fieldLabels', {'Localidad': 'inline label', 'Tipo Capa': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_Capacitaciones2019tcnicas_20.set('fieldLabels', {'Localidad': 'inline label', 'Tipo capa': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_Capacitaciones2018_21.set('fieldLabels', {'Localidad': 'inline label', 'Tipo capa': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_Capacitaciones2017difusin_22.set('fieldLabels', {'Localidad': 'inline label', 'Tipo Capa': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_BERCrdobaNorte_23.set('fieldLabels', {'Num.': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', });
lyr_BERCrdobaNorte_24.set('fieldLabels', {'Num.': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', });
lyr_PlantasyempresasdelmanCamaraArgdelman_25.set('fieldLabels', {'Nombre': 'inline label', });
lyr_DelegacinCrdobaNorte_26.set('fieldLabels', {'Localidad': 'inline label', 'Direccion': 'inline label', 'Prest 2016': 'inline label', 'Prest 2017': 'inline label', 'Prest 2018': 'inline label', 'Prest 2019': 'inline label', 'Prest 2020': 'inline label', 'CAD': 'inline label', });
lyr_DelegacinCrdobaNorte_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});