var turf = require('@turf/turf');
var fs = require('fs');
var wells = fs.readFileSync('./data/wells.geojson');
var tracts = fs.readFileSync('./data/tracts.geojson');

wells = JSON.parse(wells);
tracts = JSON.parse(tracts);
var wells_options = {gridType: 'hex', property: 'nitr_con', units: 'miles'}
var idw_wells = turf.interpolate(wells,5,wells_options);
fs.writeFileSync('./data/idw_wells.geojson', JSON.stringify(idw_wells));


//calculate mean area for census tracts
var tracts_area = [];
var tracts_centroid = [];
console.log(tracts.features.length);
for (var i = 0; i < tracts.features.length; i++) {
    var canrate = tracts.features[i].canrate;
    tracts_area.push(turf.area(tracts.features[i]));
    tracts_centroid.push(turf.centroid(tracts.features[i], {'canrate': tracts.features[i].properties.canrate}));
}
console.log(tracts_area.length);
console.log(tracts_centroid[199]);
fs.writeFileSync('./data/centroids_tracts.geojson', JSON.stringify(tracts_centroid));
console.log('saved centroid_tracts.geojson');


console.log('saved idw_wells.geojson');


