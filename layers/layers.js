var wms_layers = [];

var format_Casospositivospordepartamentos_0 = new ol.format.GeoJSON();
var features_Casospositivospordepartamentos_0 = format_Casospositivospordepartamentos_0.readFeatures(json_Casospositivospordepartamentos_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casospositivospordepartamentos_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casospositivospordepartamentos_0.addFeatures(features_Casospositivospordepartamentos_0);
var lyr_Casospositivospordepartamentos_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Casospositivospordepartamentos_0, 
                style: style_Casospositivospordepartamentos_0,
                interactive: true,
    title: 'Casos positivos por departamentos<br />\
    <img src="styles/legend/Casospositivospordepartamentos_0_0.png" /> 13700 - 25500<br />\
    <img src="styles/legend/Casospositivospordepartamentos_0_1.png" /> 25500 - 31900<br />\
    <img src="styles/legend/Casospositivospordepartamentos_0_2.png" /> 31900 - 44400<br />\
    <img src="styles/legend/Casospositivospordepartamentos_0_3.png" /> 44400 - 64100<br />\
    <img src="styles/legend/Casospositivospordepartamentos_0_4.png" /> 64100 - 82100<br />\
    <img src="styles/legend/Casospositivospordepartamentos_0_5.png" /> 82100 - 111300<br />'
        });
var format_Vacunadospordepartamentos_1 = new ol.format.GeoJSON();
var features_Vacunadospordepartamentos_1 = format_Vacunadospordepartamentos_1.readFeatures(json_Vacunadospordepartamentos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vacunadospordepartamentos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vacunadospordepartamentos_1.addFeatures(features_Vacunadospordepartamentos_1);
var lyr_Vacunadospordepartamentos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vacunadospordepartamentos_1, 
                style: style_Vacunadospordepartamentos_1,
                interactive: false,
    title: 'Vacunados por departamentos<br />\
    <img src="styles/legend/Vacunadospordepartamentos_1_0.png" /> 13800 - 40300<br />\
    <img src="styles/legend/Vacunadospordepartamentos_1_1.png" /> 40300 - 62300<br />\
    <img src="styles/legend/Vacunadospordepartamentos_1_2.png" /> 62300 - 91100<br />\
    <img src="styles/legend/Vacunadospordepartamentos_1_3.png" /> 91100 - 181700<br />\
    <img src="styles/legend/Vacunadospordepartamentos_1_4.png" /> 181700 - 234800<br />\
    <img src="styles/legend/Vacunadospordepartamentos_1_5.png" /> 234800 - 2677500<br />'
        });
var format_Fallecidospordepartamentos_2 = new ol.format.GeoJSON();
var features_Fallecidospordepartamentos_2 = format_Fallecidospordepartamentos_2.readFeatures(json_Fallecidospordepartamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fallecidospordepartamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fallecidospordepartamentos_2.addFeatures(features_Fallecidospordepartamentos_2);
var lyr_Fallecidospordepartamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fallecidospordepartamentos_2, 
                style: style_Fallecidospordepartamentos_2,
                interactive: false,
    title: 'Fallecidos por departamentos<br />\
    <img src="styles/legend/Fallecidospordepartamentos_2_0.png" /> 800 - 1500<br />\
    <img src="styles/legend/Fallecidospordepartamentos_2_1.png" /> 1500 - 2100<br />\
    <img src="styles/legend/Fallecidospordepartamentos_2_2.png" /> 2100 - 3900<br />\
    <img src="styles/legend/Fallecidospordepartamentos_2_3.png" /> 3900 - 6600<br />\
    <img src="styles/legend/Fallecidospordepartamentos_2_4.png" /> 6600 - 8500<br />\
    <img src="styles/legend/Fallecidospordepartamentos_2_5.png" /> 8500 - 11800<br />'
        });

lyr_Casospositivospordepartamentos_0.setVisible(true);lyr_Vacunadospordepartamentos_1.setVisible(false);lyr_Fallecidospordepartamentos_2.setVisible(false);
var layersList = [lyr_Casospositivospordepartamentos_0,lyr_Vacunadospordepartamentos_1,lyr_Fallecidospordepartamentos_2];
lyr_Casospositivospordepartamentos_0.set('fieldAliases', {'fid': 'ID', 'NOMBDEP': 'Departamento', 'Infectados': 'Infectados', 'Vacunados': 'Vacunados', 'Fallecidos': 'Fallecidos', });
lyr_Vacunadospordepartamentos_1.set('fieldAliases', {'fid': 'fid', 'NOMBDEP': 'NOMBDEP', 'Infectados': 'Infectados', 'Vacunados': 'Vacunados', 'Fallecidos': 'Fallecidos', });
lyr_Fallecidospordepartamentos_2.set('fieldAliases', {'fid': 'fid', 'NOMBDEP': 'NOMBDEP', 'Infectados': 'Infectados', 'Vacunados': 'Vacunados', 'Fallecidos': 'Fallecidos', });
lyr_Casospositivospordepartamentos_0.set('fieldImages', {'fid': 'TextEdit', 'NOMBDEP': 'TextEdit', 'Infectados': 'Range', 'Vacunados': 'Range', 'Fallecidos': 'Range', });
lyr_Vacunadospordepartamentos_1.set('fieldImages', {'fid': 'TextEdit', 'NOMBDEP': 'TextEdit', 'Infectados': 'Range', 'Vacunados': 'Range', 'Fallecidos': 'Range', });
lyr_Fallecidospordepartamentos_2.set('fieldImages', {'fid': 'TextEdit', 'NOMBDEP': 'TextEdit', 'Infectados': 'Range', 'Vacunados': 'Range', 'Fallecidos': 'Range', });
lyr_Casospositivospordepartamentos_0.set('fieldLabels', {'fid': 'no label', 'NOMBDEP': 'inline label', 'Infectados': 'inline label', 'Vacunados': 'inline label', 'Fallecidos': 'inline label', });
lyr_Vacunadospordepartamentos_1.set('fieldLabels', {'fid': 'no label', 'NOMBDEP': 'inline label', 'Infectados': 'inline label', 'Vacunados': 'inline label', 'Fallecidos': 'inline label', });
lyr_Fallecidospordepartamentos_2.set('fieldLabels', {'fid': 'no label', 'NOMBDEP': 'inline label', 'Infectados': 'inline label', 'Vacunados': 'inline label', 'Fallecidos': 'inline label', });
lyr_Fallecidospordepartamentos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});