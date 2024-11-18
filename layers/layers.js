var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Patimuan_1 = new ol.format.GeoJSON();
var features_Patimuan_1 = format_Patimuan_1.readFeatures(json_Patimuan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Patimuan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Patimuan_1.addFeatures(features_Patimuan_1);
var lyr_Patimuan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Patimuan_1, 
                style: style_Patimuan_1,
                popuplayertitle: "Patimuan",
                interactive: true,
    title: 'Patimuan<br />\
    <img src="styles/legend/Patimuan_1_0.png" /> RW 01<br />\
    <img src="styles/legend/Patimuan_1_1.png" /> RW 02<br />\
    <img src="styles/legend/Patimuan_1_2.png" /> RW 03<br />\
    <img src="styles/legend/Patimuan_1_3.png" /> RW 04<br />\
    <img src="styles/legend/Patimuan_1_4.png" /> RW 05<br />\
    <img src="styles/legend/Patimuan_1_5.png" /> RW 06<br />\
    <img src="styles/legend/Patimuan_1_6.png" /> RW 07<br />\
    <img src="styles/legend/Patimuan_1_7.png" /> RW 08<br />\
    <img src="styles/legend/Patimuan_1_8.png" /> RW 09<br />\
    <img src="styles/legend/Patimuan_1_9.png" /> RW 10<br />\
    <img src="styles/legend/Patimuan_1_10.png" /> RW 11<br />\
    <img src="styles/legend/Patimuan_1_11.png" /> RW 12<br />\
    <img src="styles/legend/Patimuan_1_12.png" /> RW 13<br />\
    <img src="styles/legend/Patimuan_1_13.png" /> RW 14<br />\
    <img src="styles/legend/Patimuan_1_14.png" /> <br />'
        });
var format_Kebun_2 = new ol.format.GeoJSON();
var features_Kebun_2 = format_Kebun_2.readFeatures(json_Kebun_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kebun_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kebun_2.addFeatures(features_Kebun_2);
var lyr_Kebun_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kebun_2, 
                style: style_Kebun_2,
                popuplayertitle: "Kebun",
                interactive: true,
                title: '<img src="styles/legend/Kebun_2.png" /> Kebun'
            });
var format_Sungai_3 = new ol.format.GeoJSON();
var features_Sungai_3 = format_Sungai_3.readFeatures(json_Sungai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_3.addFeatures(features_Sungai_3);
var lyr_Sungai_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_3, 
                style: style_Sungai_3,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_3.png" /> Sungai'
            });
var format_Sier_4 = new ol.format.GeoJSON();
var features_Sier_4 = format_Sier_4.readFeatures(json_Sier_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sier_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sier_4.addFeatures(features_Sier_4);
var lyr_Sier_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sier_4, 
                style: style_Sier_4,
                popuplayertitle: "Sier",
                interactive: true,
                title: '<img src="styles/legend/Sier_4.png" /> Sier'
            });
var format_Jalan_5 = new ol.format.GeoJSON();
var features_Jalan_5 = format_Jalan_5.readFeatures(json_Jalan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_5.addFeatures(features_Jalan_5);
var lyr_Jalan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_5, 
                style: style_Jalan_5,
                popuplayertitle: "Jalan",
                interactive: true,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_5_0.png" /> 2<br />\
    <img src="styles/legend/Jalan_5_1.png" /> 3<br />\
    <img src="styles/legend/Jalan_5_2.png" /> 4<br />\
    <img src="styles/legend/Jalan_5_3.png" /> 5<br />\
    <img src="styles/legend/Jalan_5_4.png" /> 8<br />\
    <img src="styles/legend/Jalan_5_5.png" /> <br />'
        });
var format_makam_6 = new ol.format.GeoJSON();
var features_makam_6 = format_makam_6.readFeatures(json_makam_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_makam_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_makam_6.addFeatures(features_makam_6);
var lyr_makam_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_makam_6, 
                style: style_makam_6,
                popuplayertitle: "makam",
                interactive: true,
                title: '<img src="styles/legend/makam_6.png" /> makam'
            });
var format_lapang_7 = new ol.format.GeoJSON();
var features_lapang_7 = format_lapang_7.readFeatures(json_lapang_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lapang_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lapang_7.addFeatures(features_lapang_7);
var lyr_lapang_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lapang_7, 
                style: style_lapang_7,
                popuplayertitle: "lapang",
                interactive: true,
                title: '<img src="styles/legend/lapang_7.png" /> lapang'
            });
var format_PoliRumah_8 = new ol.format.GeoJSON();
var features_PoliRumah_8 = format_PoliRumah_8.readFeatures(json_PoliRumah_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoliRumah_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoliRumah_8.addFeatures(features_PoliRumah_8);
var lyr_PoliRumah_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoliRumah_8, 
                style: style_PoliRumah_8,
                popuplayertitle: "PoliRumah",
                interactive: true,
                title: '<img src="styles/legend/PoliRumah_8.png" /> PoliRumah'
            });
var format_point_9 = new ol.format.GeoJSON();
var features_point_9 = format_point_9.readFeatures(json_point_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_9.addFeatures(features_point_9);
var lyr_point_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_9, 
                style: style_point_9,
                popuplayertitle: "point",
                interactive: true,
    title: 'point<br />\
    <img src="styles/legend/point_9_0.png" /> bengkel<br />\
    <img src="styles/legend/point_9_1.png" /> cafe<br />\
    <img src="styles/legend/point_9_2.png" /> gereja<br />\
    <img src="styles/legend/point_9_3.png" /> instansi<br />\
    <img src="styles/legend/point_9_4.png" /> kepemilikan<br />\
    <img src="styles/legend/point_9_5.png" /> kesehatan<br />\
    <img src="styles/legend/point_9_6.png" /> mart<br />\
    <img src="styles/legend/point_9_7.png" /> mushola/masjid<br />\
    <img src="styles/legend/point_9_8.png" /> pendidikan<br />\
    <img src="styles/legend/point_9_9.png" /> pom<br />\
    <img src="styles/legend/point_9_10.png" /> RM<br />\
    <img src="styles/legend/point_9_11.png" /> Tb<br />\
    <img src="styles/legend/point_9_12.png" /> wirausaha<br />\
    <img src="styles/legend/point_9_13.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Patimuan_1.setVisible(true);lyr_Kebun_2.setVisible(true);lyr_Sungai_3.setVisible(true);lyr_Sier_4.setVisible(true);lyr_Jalan_5.setVisible(true);lyr_makam_6.setVisible(true);lyr_lapang_7.setVisible(true);lyr_PoliRumah_8.setVisible(true);lyr_point_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Patimuan_1,lyr_Kebun_2,lyr_Sungai_3,lyr_Sier_4,lyr_Jalan_5,lyr_makam_6,lyr_lapang_7,lyr_PoliRumah_8,lyr_point_9];
lyr_Patimuan_1.set('fieldAliases', {'GID_4': 'GID_4', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'RT/RW': 'RT/RW', });
lyr_Kebun_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Sungai_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Sier_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Jalan_5.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'layer': 'layer', 'tunnel': 'tunnel', 'man_made': 'man_made', 'aeroway': 'aeroway', 'capacity': 'capacity', 'parking': 'parking', 'width': 'width', 'covered': 'covered', 'building': 'building', 'operator': 'operator', 'natural': 'natural', 'waterway': 'waterway', 'oneway': 'oneway', 'smoothness': 'smoothness', 'railway': 'railway', 'depth': 'depth', 'blockage': 'blockage', 'name': 'name', 'bridge': 'bridge', 'pump': 'pump', 'landuse': 'landuse', 'amenity': 'amenity', 'barrier': 'barrier', 'highway': 'highway', 'surface': 'surface', 'diameter': 'diameter', 'water': 'water', 'public_tra': 'public_tra', 'lebar': 'lebar', 'namajl': 'namajl', });
lyr_makam_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_lapang_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_PoliRumah_8.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'layer': 'layer', 'tourism': 'tourism', 'health_fac': 'health_fac', 'office': 'office', 'tunnel': 'tunnel', 'man_made': 'man_made', 'aeroway': 'aeroway', 'capacity': 'capacity', 'parking': 'parking', 'staff_coun': 'staff_coun', 'roof_mater': 'roof_mater', 'addr_house': 'addr_house', 'width': 'width', 'military': 'military', 'covered': 'covered', 'building': 'building', 'isced_leve': 'isced_leve', 'operator': 'operator', 'healthcare': 'healthcare', 'natural': 'natural', 'access_roo': 'access_roo', 'health_f_1': 'health_f_1', 'religion': 'religion', 'beds': 'beds', 'shop': 'shop', 'staff_co_1': 'staff_co_1', 'building_m': 'building_m', 'oneway': 'oneway', 'opening_ho': 'opening_ho', 'waterway': 'waterway', 'smoothness': 'smoothness', 'railway': 'railway', 'depth': 'depth', 'toilets_di': 'toilets_di', 'medical_sy': 'medical_sy', 'blockage': 'blockage', 'name': 'name', 'government': 'government', 'bridge': 'bridge', 'operator_t': 'operator_t', 'rooms': 'rooms', 'status': 'status', 'pump': 'pump', 'historic': 'historic', 'addr_stree': 'addr_stree', 'denominati': 'denominati', 'landuse': 'landuse', 'diameter': 'diameter', 'toilets_ha': 'toilets_ha', 'amenity': 'amenity', 'barrier': 'barrier', 'health_f_2': 'health_f_2', 'access': 'access', 'highway': 'highway', 'surface': 'surface', 'emergency': 'emergency', 'water': 'water', 'public_tra': 'public_tra', });
lyr_point_9.set('fieldAliases', {'id': 'id', 'Kelompok': 'Kelompok', 'Nama': 'Nama', });
lyr_Patimuan_1.set('fieldImages', {'GID_4': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', 'id': 'TextEdit', 'RT': 'TextEdit', 'RW': 'TextEdit', 'RT/RW': 'TextEdit', });
lyr_Kebun_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSKBN': 'TextEdit', 'FCODE': 'TextEdit', 'PUDATE': 'DateTime', 'AQDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Sungai_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Sier_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Jalan_5.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'layer': 'TextEdit', 'tunnel': 'TextEdit', 'man_made': 'TextEdit', 'aeroway': 'TextEdit', 'capacity': 'TextEdit', 'parking': 'TextEdit', 'width': 'TextEdit', 'covered': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'natural': 'TextEdit', 'waterway': 'TextEdit', 'oneway': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'depth': 'TextEdit', 'blockage': 'TextEdit', 'name': 'TextEdit', 'bridge': 'TextEdit', 'pump': 'TextEdit', 'landuse': 'TextEdit', 'amenity': 'TextEdit', 'barrier': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'diameter': 'TextEdit', 'water': 'TextEdit', 'public_tra': 'TextEdit', 'lebar': 'TextEdit', 'namajl': 'TextEdit', });
lyr_makam_6.set('fieldImages', {'id': 'TextEdit', 'Nama': '', });
lyr_lapang_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_PoliRumah_8.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'layer': 'TextEdit', 'tourism': 'TextEdit', 'health_fac': 'TextEdit', 'office': 'TextEdit', 'tunnel': 'TextEdit', 'man_made': 'TextEdit', 'aeroway': 'TextEdit', 'capacity': 'TextEdit', 'parking': 'TextEdit', 'staff_coun': 'TextEdit', 'roof_mater': 'TextEdit', 'addr_house': 'TextEdit', 'width': 'TextEdit', 'military': 'TextEdit', 'covered': 'TextEdit', 'building': 'TextEdit', 'isced_leve': 'TextEdit', 'operator': 'TextEdit', 'healthcare': 'TextEdit', 'natural': 'TextEdit', 'access_roo': 'TextEdit', 'health_f_1': 'TextEdit', 'religion': 'TextEdit', 'beds': 'TextEdit', 'shop': 'TextEdit', 'staff_co_1': 'TextEdit', 'building_m': 'TextEdit', 'oneway': 'TextEdit', 'opening_ho': 'TextEdit', 'waterway': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'depth': 'TextEdit', 'toilets_di': 'TextEdit', 'medical_sy': 'TextEdit', 'blockage': 'TextEdit', 'name': 'TextEdit', 'government': 'TextEdit', 'bridge': 'TextEdit', 'operator_t': 'TextEdit', 'rooms': 'TextEdit', 'status': 'TextEdit', 'pump': 'TextEdit', 'historic': 'TextEdit', 'addr_stree': 'TextEdit', 'denominati': 'TextEdit', 'landuse': 'TextEdit', 'diameter': 'TextEdit', 'toilets_ha': 'TextEdit', 'amenity': 'TextEdit', 'barrier': 'TextEdit', 'health_f_2': 'TextEdit', 'access': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'emergency': 'TextEdit', 'water': 'TextEdit', 'public_tra': 'TextEdit', });
lyr_point_9.set('fieldImages', {'id': 'TextEdit', 'Kelompok': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Patimuan_1.set('fieldLabels', {'GID_4': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', 'id': 'no label', 'RT': 'inline label - always visible', 'RW': 'inline label - always visible', 'RT/RW': 'inline label - always visible', });
lyr_Kebun_2.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Sungai_3.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label - always visible', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Sier_4.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Jalan_5.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'layer': 'no label', 'tunnel': 'no label', 'man_made': 'no label', 'aeroway': 'no label', 'capacity': 'no label', 'parking': 'no label', 'width': 'no label', 'covered': 'no label', 'building': 'no label', 'operator': 'no label', 'natural': 'no label', 'waterway': 'no label', 'oneway': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'depth': 'no label', 'blockage': 'no label', 'name': 'no label', 'bridge': 'no label', 'pump': 'no label', 'landuse': 'no label', 'amenity': 'no label', 'barrier': 'no label', 'highway': 'no label', 'surface': 'no label', 'diameter': 'no label', 'water': 'no label', 'public_tra': 'no label', 'lebar': 'no label', 'namajl': 'inline label - always visible', });
lyr_makam_6.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', });
lyr_lapang_7.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', });
lyr_PoliRumah_8.set('fieldLabels', {'osm_id': 'header label - visible with data', 'osm_type': 'no label', 'layer': 'no label', 'tourism': 'no label', 'health_fac': 'no label', 'office': 'no label', 'tunnel': 'no label', 'man_made': 'no label', 'aeroway': 'no label', 'capacity': 'no label', 'parking': 'no label', 'staff_coun': 'no label', 'roof_mater': 'no label', 'addr_house': 'no label', 'width': 'no label', 'military': 'no label', 'covered': 'no label', 'building': 'no label', 'isced_leve': 'no label', 'operator': 'no label', 'healthcare': 'no label', 'natural': 'no label', 'access_roo': 'no label', 'health_f_1': 'no label', 'religion': 'no label', 'beds': 'no label', 'shop': 'no label', 'staff_co_1': 'no label', 'building_m': 'no label', 'oneway': 'no label', 'opening_ho': 'no label', 'waterway': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'depth': 'no label', 'toilets_di': 'no label', 'medical_sy': 'no label', 'blockage': 'no label', 'name': 'no label', 'government': 'no label', 'bridge': 'no label', 'operator_t': 'no label', 'rooms': 'no label', 'status': 'no label', 'pump': 'no label', 'historic': 'no label', 'addr_stree': 'no label', 'denominati': 'no label', 'landuse': 'no label', 'diameter': 'no label', 'toilets_ha': 'no label', 'amenity': 'no label', 'barrier': 'no label', 'health_f_2': 'no label', 'access': 'no label', 'highway': 'no label', 'surface': 'no label', 'emergency': 'no label', 'water': 'no label', 'public_tra': 'no label', });
lyr_point_9.set('fieldLabels', {'id': 'no label', 'Kelompok': 'no label', 'Nama': 'no label', });
lyr_point_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});