import { gql } from "apollo-server";

export const Album = gql`
    type Album {
        _id: ID
        name: String
        released: Int
        artists: [Artist]
        bands: [Band]
        tracks: [Track]
        genres: [Genre]
        image: String
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