const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodeUrl = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '7c059b86efmsh73886e7012ce2f7p13d715jsn60dcf9a06fb8' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    } else {
        const data = resp.data.Results[0];
        const direc = data.name;
        const lat = data.lat;
        const lng = data.lon;
        return {
            direc,
            lat,
            lng
        }
    }
}

module.exports = {
    getLugarLatLng,
}