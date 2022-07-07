import { gql } from "apollo-server";

export const Album = gql`
    type Album {
        _id: ID
        name: String
        released: Int
        image: String
        bands: [Band]
        genres: [Genre]
        artists: [Artist]       
        tracks: [Track]
    }

    type ChangedAlbum {
        _id: ID
        released: Int
        image: String
        name: String!
        artistsIds: [ID]
        bandsIds: [ID]
        genresIds: [ID]
        trackIds: [ID]
    }

    type DeleteAlbum {
        acknowledged: Boolean
        deletedCount: Int
    }
    
    input UpdateAlbumInput {        
        released: Int
        image: String
        name: String
        artistsIds: [ID]
        bandsIds: [ID]
        genresIds: [ID]
        trackIds: [ID]
    }

    input CreateAlbumInput {        
        released: Int
        image: String
        name: String!
        artistsIds: [ID]
        bandsIds: [ID]
        genresIds: [ID]
        trackIds: [ID]
    }

    type Mutation {
        createAlbum(input:CreateAlbumInput): ChangedAlbum
        updateAlbum(id: ID!, input:UpdateAlbumInput): ChangedAlbum
        deleteAlbum(id: ID!): DeleteAlbum
    }

    type Query {   
        getAlbums: [Album]
        album(id: ID!): Album
    }

`;
