import { gql } from "apollo-server";

export const Favourites = gql`
    type Favourites {
        _id: ID!
        userId: ID!
        bands: [Band]
        genres: [Genre]
        artists: [Artist]
        tracks: [Track]
    }

    type Query {   
        getFavourites: Favourites
    }

    type UpdatedFavorite {
        _id: ID        
        userId: String,
        bandsIds: [String]
        genresIds: [String]
        artistsIds: [String]
        tracksIds: [String]
    }

    input UpdateFavourites {  
        type: String!
        id: String!       
    }

    input addItem {        
        id: String!       
    }

    type Mutation {
        addTrackToFavourites(input:addItem): UpdatedFavorite
        addBandToFavourites(input:addItem): UpdatedFavorite
        addArtistToFavourites(input:addItem): UpdatedFavorite
        addGenreToFavourites(input:addItem): UpdatedFavorite
    }

`;