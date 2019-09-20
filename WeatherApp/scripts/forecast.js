class Forecast{
    constructor(){
        this.key = 'DsFs9QfJB3KaArtBaAxLQPYxrCc6OrWS';
        this.baseCityUri = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        this.baseWeatherUri = 'http://dataservice.accuweather.com/currentconditions/v1/';
    }

    async updateCity(city){
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);

        return { cityDets, weather };
    }

    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;

        const response = await fetch(this.baseCityUri + query);
        const data = await response.json();

        return data[0];
    }

    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;

        const response = await fetch(this.baseWeatherUri + query);
        const data = await response.json();

        return data[0];
    }
}