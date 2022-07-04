

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
        },
       
        
        // getUserById: (parent, __, context) => {
        //     const userId = '62bc09e84e9ff95eb9ca20aa';
        //     co
        //     return context.dataSources.UserApi.getUserById(userId)
        // }, 
        // getAlbumById: (_, __, context) => {
        //     return context.dataSources.TrackApi.getTracks()
        // },
    },
    Track: {
        bands: ({ _id }, _, { dataSources }) => {   
            console.log(dataSources);         
            return dataSources.TrackApi.getTrackBandsIds(_id, dataSources.BandApi)
        },
        // genresIds: ({ _id }, _, { dataSources }) => {            
        //     return dataSources.TrackApi.getTrackGenresIds(_id, dataSources.GenreApi)
        // },
        // artistsIds: ({ _id }, _, { dataSources }) => {            
        //     return dataSources.TrackApi.getTrackArtistIds(_id, dataSources.ArtistApi)
        // },
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
