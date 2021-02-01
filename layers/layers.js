var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_1 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_KalkulatorRaster_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Kalkulator Raster",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/KalkulatorRaster_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11883355.642182, -753150.763305, 11911185.514880, -725133.785130]
                            })
                        });
var format_ADMINISTRASIDESA_AR_25K_4 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_4 = format_ADMINISTRASIDESA_AR_25K_4.readFeatures(json_ADMINISTRASIDESA_AR_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_4.addFeatures(features_ADMINISTRASIDESA_AR_25K_4);
var lyr_ADMINISTRASIDESA_AR_25K_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_4, 
                style: style_ADMINISTRASIDESA_AR_25K_4,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_4.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_PEMUKIMAN_AR_25K_5 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_25K_5 = format_PEMUKIMAN_AR_25K_5.readFeatures(json_PEMUKIMAN_AR_25K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_25K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_25K_5.addFeatures(features_PEMUKIMAN_AR_25K_5);
var lyr_PEMUKIMAN_AR_25K_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMAN_AR_25K_5, 
                style: style_PEMUKIMAN_AR_25K_5,
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_25K_5.png" /> PEMUKIMAN_AR_25K'
            });
var format_KESEHATAN_PT_25K_6 = new ol.format.GeoJSON();
var features_KESEHATAN_PT_25K_6 = format_KESEHATAN_PT_25K_6.readFeatures(json_KESEHATAN_PT_25K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KESEHATAN_PT_25K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KESEHATAN_PT_25K_6.addFeatures(features_KESEHATAN_PT_25K_6);
var lyr_KESEHATAN_PT_25K_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KESEHATAN_PT_25K_6, 
                style: style_KESEHATAN_PT_25K_6,
                interactive: true,
                title: '<img src="styles/legend/KESEHATAN_PT_25K_6.png" /> KESEHATAN_PT_25K'
            });
var format_PENDIDIKAN_PT_25K_7 = new ol.format.GeoJSON();
var features_PENDIDIKAN_PT_25K_7 = format_PENDIDIKAN_PT_25K_7.readFeatures(json_PENDIDIKAN_PT_25K_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_PT_25K_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_PT_25K_7.addFeatures(features_PENDIDIKAN_PT_25K_7);
var lyr_PENDIDIKAN_PT_25K_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PENDIDIKAN_PT_25K_7, 
                style: style_PENDIDIKAN_PT_25K_7,
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_PT_25K_7.png" /> PENDIDIKAN_PT_25K'
            });
var format_SARANAIBADAH_PT_25K_8 = new ol.format.GeoJSON();
var features_SARANAIBADAH_PT_25K_8 = format_SARANAIBADAH_PT_25K_8.readFeatures(json_SARANAIBADAH_PT_25K_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SARANAIBADAH_PT_25K_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SARANAIBADAH_PT_25K_8.addFeatures(features_SARANAIBADAH_PT_25K_8);
var lyr_SARANAIBADAH_PT_25K_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SARANAIBADAH_PT_25K_8, 
                style: style_SARANAIBADAH_PT_25K_8,
                interactive: true,
                title: '<img src="styles/legend/SARANAIBADAH_PT_25K_8.png" /> SARANAIBADAH_PT_25K'
            });
var format_AnalisisSaranaIbadah_9 = new ol.format.GeoJSON();
var features_AnalisisSaranaIbadah_9 = format_AnalisisSaranaIbadah_9.readFeatures(json_AnalisisSaranaIbadah_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnalisisSaranaIbadah_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnalisisSaranaIbadah_9.addFeatures(features_AnalisisSaranaIbadah_9);
var lyr_AnalisisSaranaIbadah_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AnalisisSaranaIbadah_9, 
                style: style_AnalisisSaranaIbadah_9,
                interactive: true,
                title: '<img src="styles/legend/AnalisisSaranaIbadah_9.png" /> Analisis Sarana Ibadah'
            });
var format_AnalisisFasilitasKesehatan_10 = new ol.format.GeoJSON();
var features_AnalisisFasilitasKesehatan_10 = format_AnalisisFasilitasKesehatan_10.readFeatures(json_AnalisisFasilitasKesehatan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnalisisFasilitasKesehatan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnalisisFasilitasKesehatan_10.addFeatures(features_AnalisisFasilitasKesehatan_10);
var lyr_AnalisisFasilitasKesehatan_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AnalisisFasilitasKesehatan_10, 
                style: style_AnalisisFasilitasKesehatan_10,
                interactive: true,
                title: '<img src="styles/legend/AnalisisFasilitasKesehatan_10.png" /> Analisis Fasilitas Kesehatan'
            });
var format_AnalisisSaranaPendidikan_11 = new ol.format.GeoJSON();
var features_AnalisisSaranaPendidikan_11 = format_AnalisisSaranaPendidikan_11.readFeatures(json_AnalisisSaranaPendidikan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnalisisSaranaPendidikan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnalisisSaranaPendidikan_11.addFeatures(features_AnalisisSaranaPendidikan_11);
var lyr_AnalisisSaranaPendidikan_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AnalisisSaranaPendidikan_11, 
                style: style_AnalisisSaranaPendidikan_11,
                interactive: true,
                title: '<img src="styles/legend/AnalisisSaranaPendidikan_11.png" /> Analisis Sarana Pendidikan'
            });
var format_FiturJarak_12 = new ol.format.GeoJSON();
var features_FiturJarak_12 = format_FiturJarak_12.readFeatures(json_FiturJarak_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FiturJarak_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FiturJarak_12.addFeatures(features_FiturJarak_12);
var lyr_FiturJarak_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FiturJarak_12, 
                style: style_FiturJarak_12,
                interactive: true,
                title: '<img src="styles/legend/FiturJarak_12.png" /> Fitur Jarak'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleTerrain_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_KalkulatorRaster_3.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_4.setVisible(true);lyr_PEMUKIMAN_AR_25K_5.setVisible(true);lyr_KESEHATAN_PT_25K_6.setVisible(true);lyr_PENDIDIKAN_PT_25K_7.setVisible(true);lyr_SARANAIBADAH_PT_25K_8.setVisible(true);lyr_AnalisisSaranaIbadah_9.setVisible(true);lyr_AnalisisFasilitasKesehatan_10.setVisible(true);lyr_AnalisisSaranaPendidikan_11.setVisible(true);lyr_FiturJarak_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleTerrain_1,lyr_OSMStandard_2,lyr_KalkulatorRaster_3,lyr_ADMINISTRASIDESA_AR_25K_4,lyr_PEMUKIMAN_AR_25K_5,lyr_KESEHATAN_PT_25K_6,lyr_PENDIDIKAN_PT_25K_7,lyr_SARANAIBADAH_PT_25K_8,lyr_AnalisisSaranaIbadah_9,lyr_AnalisisFasilitasKesehatan_10,lyr_AnalisisSaranaPendidikan_11,lyr_FiturJarak_12];
lyr_ADMINISTRASIDESA_AR_25K_4.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_25K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KESEHATAN_PT_25K_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'REMARK': 'REMARK', 'TIPSHT': 'TIPSHT', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FSKADD': 'FSKADD', });
lyr_PENDIDIKAN_PT_25K_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_SARANAIBADAH_PT_25K_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_AnalisisSaranaIbadah_9.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'JUMLAHIB': 'JUMLAHIB', });
lyr_AnalisisFasilitasKesehatan_10.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'JUMLAHFASKES': 'JUMLAHFASKES', });
lyr_AnalisisSaranaPendidikan_11.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'JUMLAHPEND': 'JUMLAHPEND', });
lyr_FiturJarak_12.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASIDESA_AR_25K_4.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PEMUKIMAN_AR_25K_5.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_KESEHATAN_PT_25K_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'REMARK': 'TextEdit', 'TIPSHT': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FSKADD': 'TextEdit', });
lyr_PENDIDIKAN_PT_25K_7.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KATPDK': '', 'JLPDDK': '', 'FGGPDK': '', 'REMARK': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JJGPDF': '', 'JNSPDL': '', });
lyr_SARANAIBADAH_PT_25K_8.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'FGSIBD': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_AnalisisSaranaIbadah_9.set('fieldImages', {'fid': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'JUMLAHIB': 'TextEdit', });
lyr_AnalisisFasilitasKesehatan_10.set('fieldImages', {'fid': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'JUMLAHFASKES': 'TextEdit', });
lyr_AnalisisSaranaPendidikan_11.set('fieldImages', {'fid': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'JUMLAHPEND': 'TextEdit', });
lyr_FiturJarak_12.set('fieldImages', {'fid': '', 'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_ADMINISTRASIDESA_AR_25K_4.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_25K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_KESEHATAN_PT_25K_6.set('fieldLabels', {'NAMOBJ': 'inline label', 'LUAS': 'no label', 'REMARK': 'no label', 'TIPSHT': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FSKADD': 'no label', });
lyr_PENDIDIKAN_PT_25K_7.set('fieldLabels', {'NAMOBJ': 'inline label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_SARANAIBADAH_PT_25K_8.set('fieldLabels', {'NAMOBJ': 'inline label', 'LUAS': 'no label', 'FGSIBD': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_AnalisisSaranaIbadah_9.set('fieldLabels', {'fid': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'JUMLAHIB': 'no label', });
lyr_AnalisisFasilitasKesehatan_10.set('fieldLabels', {'fid': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'JUMLAHFASKES': 'no label', });
lyr_AnalisisSaranaPendidikan_11.set('fieldLabels', {'fid': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'JUMLAHPEND': 'no label', });
lyr_FiturJarak_12.set('fieldLabels', {'fid': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_FiturJarak_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});