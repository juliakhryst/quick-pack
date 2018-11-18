const fs = require('fs');
const jsonfile  = require('jsonfile');
const readline  = require('readline');

const file = './cities.json';

/*
 * These cities comes from GeoNames Gazetteer: http://www.geonames.org

 * geonameid         : integer id of record in geonames database
 * name              : name of geographical point (utf8) varchar(200)
 * asciiname         : name of geographical point in plain ascii characters, varchar(200)
 * alternatenames    : alternatenames, comma separated, ascii names automatically transliterated, convenience attribute from alternatename table, varchar(10000)
 * latitude          : latitude in decimal degrees (wgs84)
 * longitude         : longitude in decimal degrees (wgs84)
 * feature class     : see http://www.geonames.org/export/codes.html, char(1)
 * feature code      : see http://www.geonames.org/export/codes.html, varchar(10)
 * country code      : ISO-3166 2-letter country code, 2 characters
 * cc2               : alternate country codes, comma separated, ISO-3166 2-letter country code, 200 characters
 * admin1 code       : fipscode (subject to change to iso code), see exceptions below, see file admin1Codes.txt for display names of this code; varchar(20)
 * admin2 code       : code for the second administrative division, a county in the US, see file admin2Codes.txt; varchar(80)
 * admin3 code       : code for third level administrative division, varchar(20)
 * admin4 code       : code for fourth level administrative division, varchar(20)
 * population        : bigint (8 byte int)
 * elevation         : in meters, integer
 * dem               : digital elevation model, srtm3 or gtopo30, average elevation of 3''x3'' (ca 90mx90m) or 30''x30'' (ca 900mx900m) area in meters, integer. srtm processed by cgiar/ciat.
 * timezone          : the iana timezone id (see file timeZone.txt) varchar(40)
 * modification date : date of last modification in yyyy-MM-dd format
*/

const CITY_COLUMNS_INDEX = {
  city: 1,
  country: 8,
  lat: 4,
  lng: 5,
};

const COLUMN_SEPARATOR = "\t";
const cities = [];

readline.createInterface({
  input: fs.createReadStream('./cities15000.txt'),
  output: process.stdout,
  terminal: false
}).on('line', (line) => {
  // @NOTE: we receive a cities file with a `tab` as column separator.
  const rowColumn = line.split(COLUMN_SEPARATOR);
  const cityName = rowColumn[CITY_COLUMNS_INDEX.city];

  cities.push({
    [cityName]: {
      country: rowColumn[CITY_COLUMNS_INDEX.country],
      name: cityName,
      lat: rowColumn[CITY_COLUMNS_INDEX.lat],
      lng: rowColumn[CITY_COLUMNS_INDEX.lng],
    }
  });
}).on('close', () => {
  jsonfile.writeFile(file, cities, {spaces: 2}, (err) => {
    if (err) {
      console.error(err)
    }
  })
});
