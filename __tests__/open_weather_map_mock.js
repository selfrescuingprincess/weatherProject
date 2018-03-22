import OpenWeatherMap from '../open_weather_map';


describe('OpenWeatherMapMock', () => {
    global.fetch = jest.fn().mockImplementation((zip) => 
        Promise.resolve({
            status: 200, 
            json: () => Promise.resolve({"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"main":{"temp":77}})
        }));
    it('can fetch mock', async () => {
        const response = await OpenWeatherMap.fetchForecast("95117");
        expect(response.main).not.toBeNull();
        console.log(response);
    });
});