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

    type Query {   
        getAlbums: [Album]
        album(id: ID!): Album
    }

`;


// input CreateAlbumInput {
//     released: Int
//     image: String
//     name: String!
//     artists: [ID!]
//     bands: [ID!]
//     tracks: [ID!]
//     genres: [ID!]
//   }