import { gql } from "apollo-server";

export const Band = gql`
    type Band {
        _id: ID!
        name: String
        origin: String
        website: String
        genres: [Genre]
    }

    type Query {   
        getBands: [Band]
        band(id: ID!): Band
    }

`;