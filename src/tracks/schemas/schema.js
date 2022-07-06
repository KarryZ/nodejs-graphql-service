import { gql } from "apollo-server";

export const Track = gql`
    type Track {
        _id: ID!
        title: String
        albums: String        
        duration: Int
        released: Int
        genres: [Genre]
        bands: [Band]
        artists: [Artist]
    }

    type ChangedTrack {
        _id: ID    
        title: String,
        bandsIds: [String],
        artistsIds: [String],
        duration: Int,
        released: Int,
        genresIds: [String],
    }

    type DeleteTrack {
        acknowledged: Boolean
        deletedCount: Int
    }
    
    input UpdateTrackInput {        
        title: String,
        bandsIds: [String],
        artistsIds: [String],
        duration: Int,
        released: Int,
        genresIds: [String]
    }

    input CreateTrackInput {        
        title: String!,
        bandsIds: [String],
        artistsIds: [String],
        duration: Int,
        released: Int!,
        genresIds: [String]
    }

    type Mutation {
        createTrack(input:CreateTrackInput): ChangedTrack
        updateTrack(id: ID!, input:UpdateTrackInput): ChangedTrack
        deleteTrack(id: ID!): DeleteTrack
    }

    type Query {   
       getTracks: [Track]
       track(id: ID!): Track      
    }

`;