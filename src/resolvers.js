

export const resolvers = {
    Query: {
        getTracks: (_, __, context) => {
            return context.dataSources.TrackApi.getTracks()
        },
        track: (_, { id }, { dataSources }) => {
            return dataSources.TrackApi.getTrackById(id)
        },
        getBands:  (_, __, context) => {
            return context.dataSources.BandApi.getBands()
        },
        band: (_, { id }, { dataSources }) => {
            return dataSources.BandApi.getBandById(id)
        },
        getGenres: (_, __, context) => {
                return context.dataSources.GenreApi.getGenres()
        },
        genre: (_, { id }, { dataSources }) => {
            return dataSources.GenreApi.getGenreById(id)
        },
        getArtists: (_, __, context) => {
            return context.dataSources.ArtistApi.getArtists()
        },
        artist: (_, { id }, { dataSources }) => {
            return dataSources.ArtistApi.getArtistById(id)
        },
        getAlbums:  (_, __, context) => {
            return context.dataSources.AlbumApi.getAlbums()
        },
        album: (_, { id }, { dataSources }) => {
            return dataSources.AlbumApi.getAlbumtById(id)
        },
        getFavourites: (_, __, context) => {
            return context.dataSources.FavouritesApi.getFavourites()
        }
    },
    Track: {
        bands: ({ _id }, _, { dataSources }) => {   
            console.log(dataSources);         
            return dataSources.TrackApi.getTrackBandsIds(_id, dataSources.BandApi)
        },
        genres: ({ _id }, _, { dataSources }) => {            
            return dataSources.TrackApi.getTrackGenresIds(_id, dataSources.GenreApi)
        },
        artists: ({ _id }, _, { dataSources }) => {            
            return dataSources.TrackApi.getTrackArtistIds(_id, dataSources.ArtistApi)
        },
    },

    Album: {
        bands: ({ _id }, _, { dataSources }) => {   
            console.log(dataSources);         
            return dataSources.AlbumApi.getBands(_id, dataSources.BandApi)
        },
        genres: ({ _id }, _, { dataSources }) => {            
            return dataSources.AlbumApi.getGenres(_id, dataSources.GenreApi)
        },
        artists: ({ _id }, _, { dataSources }) => {            
            return dataSources.AlbumApi.getArtist(_id, dataSources.ArtistApi)
        },
        tracks: ({ _id }, _, { dataSources }) => {            
            return dataSources.AlbumApi.getTracks(_id, dataSources.TrackApi)
        },
    },

    Artist: {
        bands: ({ _id }, _, { dataSources }) => {                  
            return dataSources.ArtistApi.getBands(_id, dataSources.BandApi)
        }
    },

    Band: {
        genres: ({ _id }, _, { dataSources }) => {            
            return dataSources.BandApi.getGenres(_id, dataSources.GenreApi)
        },
    },

    Favourites: {
        bands: ({ _id }, _, { dataSources }) => {   
            console.log(dataSources);         
            return dataSources.FavouritesApi.getBands(_id, dataSources.BandApi)
        },
        genres: ({ _id }, _, { dataSources }) => {            
            return dataSources.FavouritesApi.getGenres(_id, dataSources.GenreApi)
        },
        artists: ({ _id }, _, { dataSources }) => {            
            return dataSources.FavouritesApi.getArtist(_id, dataSources.ArtistApi)
        },
        tracks: ({ _id }, _, { dataSources }) => {            
            return dataSources.FavouritesApi.getTracks(_id, dataSources.TrackApi)
        },
    },
    

    Mutation: {
        registerUser: (_, data, context) => {
           return context.dataSources.UserApi.registerUser(data);
        },
        getJWT: async (_, data, context) => {
            const sJWT = await context.dataSources.UserApi.getJWT(data, context);
            process.env.token = sJWT;
            return  { jwt: sJWT }
        },
        
    }
}
