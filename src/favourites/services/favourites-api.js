import { RESTDataSource } from 'apollo-datasource-rest';

export class FavouritesApi extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = process.env.favourites_url || 'http://localhost:3007/v1/favourites';
    }

    async getFavourites () {
        const data = await this.get("");
        return data.items;
    }

}
