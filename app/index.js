const tubeStations = require('./tubeStations');

const stations = [
"Bank", 
"Archway", 
"Vauxhall", 
"Brixton", 
"Uxbridge",
"St James\'s Park", 
"Victoria", 
"Aldgate", 
"Queensway", 
"Putney", 
"Tooting", 
"Upminster", 
"Temple", 
"Finchley Road and Frognal", 
"Shadwell",
"Belsize Park",
"Sloan Square",
"Picadilly",
"Oxford Circus",
];

const result = tubeStations.findAllLetersOfAlphabetWithMinStationNames(stations);
console.log(result);