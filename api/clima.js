import axios from 'axios';
import { apiKey } from './constants';

const forecastEndPoint = params =>`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=7&aqi=no&alerts=no`


const locationsEndPoint = params =>`http://api.weatherapi.com/v1/search.json?key=7bf612ccf99741a4a6a24027242907&q=${params.cityName}`

const apiCall = async (endpoint) => {
    const options = {
        method: 'GET',
        url: endpoint
    }
    try {
        const response = await axios.request(options);
        return response.data;
    }
    catch (err) {
        console.log('error:', err);
        return null;
    }
}
export const fetchWeatherForecast = params => {
 return apiCall (forecastEndPoint(params));
}

export const fetchLocations = params => {
    return apiCall (locationsEndPoint(params));
   }