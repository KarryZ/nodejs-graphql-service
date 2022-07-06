

export const resolvers = {
    Query: {
        
        getUserById: (_, { id }, { dataSources }) => {
            return dataSources.UserApi.getUserById(id)
        },
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
        createAlbum: (_, {input}, {dataSources}) => {
            return dataSources.AlbumApi.createAlbum(input);
        },
        updateAlbum: (_, {id, input}, {dataSources}) => {           
            const album = dataSources.AlbumApi.updateAlbum(id, input);            
            return album; 
        },
        deleteAlbum: (_, {id}, {dataSources}) => {           
            const album = dataSources.AlbumApi.deleteAlbum(id);            
            return album; 
        },

        createArtist: (_, {input}, {dataSources}) => {
            return dataSources.ArtistApi.createArtist(input);
        },
        updateArtist: (_, {id, input}, {dataSources}) => {           
            const data = dataSources.ArtistApi.updateArtist(id, input);            
            return data; 
        },
        deleteArtist: (_, {id}, {dataSources}) => {           
            const data = dataSources.ArtistApi.deleteArtist(id);            
            return data; 
        },


        createGenre: (_, {input}, {dataSources}) => {
            return dataSources.GenreApi.createGenre(input);
        },
        updateGenre: (_, {id, input}, {dataSources}) => {           
            const data = dataSources.GenreApi.updateGenre(id, input);            
            return data; 
        },
        deleteGenre: (_, {id}, {dataSources}) => {           
            const data = dataSources.GenreApi.deleteGenre(id);            
            return data; 
        },


        createBand: (_, {input}, {dataSources}) => {
            return dataSources.BandApi.createBand(input);
        },
        updateBand: (_, {id, input}, {dataSources}) => {           
            const data = dataSources.BandApi.updateBand(id, input);            
            return data; 
        },
        deleteBand: (_, {id}, {dataSources}) => {           
            const data = dataSources.BandApi.deleteBand(id);            
            return data; 
        },

        
        createTrack: (_, {input}, {dataSources}) => {
            return dataSources.TrackApi.createTrack(input);
        },
        updateTrack: async (_, {id, input}, {dataSources}) => {            
            const data = await dataSources.TrackApi.updateTrack(id, input);            
            return data; 
        },
        deleteTrack: (_, {id}, {dataSources}) => {           
            const data = dataSources.TrackApi.deleteTrack(id);            
            return data; 
        },
 
    }
}
