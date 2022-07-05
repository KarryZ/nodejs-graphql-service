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
       const tracks = await this.get(`/${trackId}`);
       const bandsData = tracks.bandsIds.map(bandId => BandApi.getBandById(bandId));
       return bandsData;

    }

    async getTrackGenresIds (trackId, GenreApi) {       
        const tracks = await this.get(`/${trackId}`);
        const genressData = tracks.genresIds.map(Id => GenreApi.getGenreById(Id));
        return genressData;
    }

    async getTrackArtistIds (trackId, ArtistApi) {       
        const tracks = await this.get(`/${trackId}`);
        const artistsData = tracks.artistsIds.map(Id => ArtistApi.getArtistById(Id));
        return artistsData;
    }

}
