import { gql } from "apollo-server";

export const Favourites = gql`
    type Favourites {
        _id: ID!
        userId: ID!
        bandsIds: [ID]
        genres: [ID]
        artists: [ID]
        tracks: [ID]
    }

    type Query {   
        getFavourites: [Favourites]
    }

`;