const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&APPID=1eda715dd541d754cf13bfa855859e6d&units=metric`);


    return resp.data.main.temp;
};

module.exports = {
    getClima,
}