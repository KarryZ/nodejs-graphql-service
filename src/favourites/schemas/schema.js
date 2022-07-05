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

`;