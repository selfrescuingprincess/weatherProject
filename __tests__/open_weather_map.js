import fetch from 'node-fetch';
import OpenWeatherMap from '../open_weather_map';


describe('OpenWeatherMap', () => {
    global.fetch = fetch;
    it('can fetch', async () => {
        const response = await OpenWeatherMap.fetchForecast("95117");
        console.log(response);
    });
});
