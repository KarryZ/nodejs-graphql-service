import { RESTDataSource } from 'apollo-datasource-rest';

export class AlbumApi extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = process.env.albums_url || 'http://localhost:3005/v1/albums';
    }

    async getAlbums () {
        const data = await this.get("");
        return data.items;
    }

    getAlbumtById (Id) {        
        return this.get(`/${Id}`);
    }

}
