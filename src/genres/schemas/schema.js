import { gql } from "apollo-server";

export const Genre = gql`
    type Genre {
        _id: ID!
        name: String
        description: String
        country: String
        year: Int
    }

    type Query {   
        getGenres: [Genre]
        genre(id: ID!): Genre
    }

`;