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

    async getBands (Id, BandApi) {
        const albums = await this.get(`/${Id}`);
        const bandsData = albums.bandsIds.map(bandId => BandApi.getBandById(bandId));
        return bandsData;
 
     }
 
     async getGenres (Id, GenreApi) {       
         const albums = await this.get(`/${Id}`);
         const genressData = albums.genresIds.map(Id => GenreApi.getGenreById(Id));
         return genressData;
     }

     async getArtist (Id, ArtistApi) {       
        const albums = await this.get(`/${Id}`);
        const artists = albums.artistsIds.map(Id => ArtistApi.getArtistById(Id));
        return artists;
    }

    async getTracks (Id, TrackApi) {       
        const albums = await this.get(`/${Id}`);
        const artists = albums.trackIds.map(Id => TrackApi.getTrackById(Id));
        return artists;
    }

}
