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

    type Query {   
       getTracks: [Track]
       track(id: ID!): Track      
    }

`;