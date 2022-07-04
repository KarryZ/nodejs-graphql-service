import { RESTDataSource } from 'apollo-datasource-rest';

export class GenreApi extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = process.env.genres_url || 'http://localhost:3001/v1/genres';
    }

    async getGenres () {
        const data = await this.get("");        
        return data.items;
    }

    getGenreById (Id) {        
        return this.get(`/${Id}`);
    }

}
