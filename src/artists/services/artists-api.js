import { RESTDataSource } from 'apollo-datasource-rest';

export class ArtistApi extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = process.env.artists_url || 'http://localhost:3002/v1/artists';
    }

    async getArtists () {
        const data = await this.get("");
        return data.items;
    }

    getArtistById (Id) {        
        return this.get(`/${Id}`);
    }

    async getBands (Id, BandApi) {       
        const artists = await this.get(`/${Id}`);
        const bands = artists.bandsIds.map(bandId => BandApi.getBandById(bandId));
        return bands;
    }


}
