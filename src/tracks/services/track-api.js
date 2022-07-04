import { RESTDataSource } from 'apollo-datasource-rest';
import { isTypeSystemDefinitionNode } from 'graphql';

export class TrackApi extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = process.env.tracks_url || 'http://localhost:3006/v1/tracks';
    }

    async getTracks () {
        const data = await this.get("");
        return data.items;
    }

     getTrackById (trackId) {        
        return this.get(`/${trackId}`);
    }

    async getTrackBandsIds (trackId, BandApi) {
       const data = await this.get(`/${trackId}`);
       const bandsData = data.bandsIds.map(bandId => BandApi.getBandById(bandId));
       return bandsData;

    }

    async getTrackGenresIds (trackId) {       
        const data = await this.get(`/${trackId}`);
        return data.genresIds;
    }

    async getTrackArtistIds (trackId) {       
        const data = await this.get(`/${trackId}`);
        return data.artistsIds;
    }

}
