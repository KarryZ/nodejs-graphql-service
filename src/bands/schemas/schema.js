import { gql } from "apollo-server";

export const Band = gql`
    type Band {
        _id: ID!
        name: String
        origin: String
        website: String
        genres: [Genre]
    }

    type ChangedBand {
        _id: ID
        name: String
        members: [String]
        genresIds: [String]
    }

    type DeleteBand {
        acknowledged: Boolean
        deletedCount: Int
    }
    
    input UpdateBandInput {        
        name: String
        members: [String]
        genresIds: [String]
    }

    input CreateBandInput {        
        name: String!
        members: [String]
        genresIds: [String]
    }

    type Mutation {
        createBand(input:CreateBandInput): ChangedBand
        updateBand(id: ID!, input:UpdateBandInput): ChangedBand
        deleteBand(id: ID!): DeleteBand
    }

    type Query {   
        getBands: [Band]
        band(id: ID!): Band
    }

`;