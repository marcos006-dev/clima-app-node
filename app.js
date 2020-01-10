const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true,
    }
}).argv;

const getInfo = async(direccion) => {

    try {
        const coord = await lugar.getLugarLatLng(argv.direccion);
        const temp = await clima.getClima(coord.lat, coord.lng);
        return `La temperatura de ${coord.direc} es igual a: ${ temp }`;
    } catch (e) {
        return `NO existe el clima de: ${direccion}`;
    }

}
const direccion = argv.direccion;

getInfo(direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(err => {
        console.log(err);
    })