import { RESTDataSource } from 'apollo-datasource-rest';

export class FavouritesApi extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = process.env.favourites_url || 'http://localhost:3007/v1/favourites';
    }

    willSendRequest(request) {
        console.log("willSendRequest", this.context.token)
        request.headers.set('Authorization', this.context.token);
    }

    async getFavourites () {
        const data = await this.get("");
        console.log("getFavourites data", data)
        return data;
    }
    async getBands(Id, BandApi) {
        const favorites = await this.get("");
        const bandsData = favorites.bandsIds.map(bandId => BandApi.getBandById(bandId));
        return bandsData;
 
     }
    async getGenres(Id, GenreApi) {       
        const favorites = await this.get("");
        const genressData = favorites.genresIds.map(Id => GenreApi.getGenreById(Id));
        return genressData;
    }
    async getArtist(Id, ArtistApi) {       
        const favorites = await this.get("");
        const artistsData = favorites.artistsIds.map(Id => ArtistApi.getArtistById(Id));
        return artistsData;
    }
    async getTracks(Id, TrackApi) {       
        const favorites = await this.get("");
        const artists = favorites.tracksIds.map(Id => TrackApi.getTrackById(Id));
        return artists;
    }

    addTrackToFavourites(data) {       
        const favorites = this.put("/add", {
            type: 'tracks',
            ...data 
        });
        return favorites;
    }

    addBandToFavourites(data) {       
        const favorites = this.put("/add", {
            type: 'bands',
            ...data 
        });
        return favorites;
    }

    addArtistToFavourites(data) {       
        const favorites = this.put("/add", {
            type: 'artists',
            ...data 
        });
        return favorites;
    }

    addGenreToFavourites(data) {       
        const favorites = this.put("/add", {
            type: 'genres',
            ...data 
        });
        return favorites;
    }
    
}
