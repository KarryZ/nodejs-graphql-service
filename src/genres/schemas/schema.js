import { gql } from "apollo-server";

export const Genre = gql`
    type Genre {
        _id: ID!
        name: String
        description: String
        country: String
        year: Int
    }

    type ChangedGenre {
        _id: ID
        name: String
        description: String
        country: String
        year: Int
    }

    type DeleteGenre {
        acknowledged: Boolean
        deletedCount: Int
    }
    
    input UpdateGenreInput {        
        name: String
        description: String
        country: String
        year: Int
    }

    input CreateGenreInput {        
        name: String!
        description: String
        country: String
        year: Int
    }

    type Mutation {
        createGenre(input:CreateGenreInput): ChangedGenre
        updateGenre(id: ID!, input:UpdateGenreInput): ChangedGenre
        deleteGenre(id: ID!): DeleteGenre
    }

    type Query {   
        getGenres: [Genre]
        genre(id: ID!): Genre
    }

`;