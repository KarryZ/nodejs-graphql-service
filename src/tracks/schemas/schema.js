import { gql } from "apollo-server";

export const Track = gql`
    type Track {
        _id: ID!
        title: String
        albums: String        
        duration: Int
        released: Int
        genresIds: [Genre]
        bands: [Band]
        artistsIds: [Artist]
    }

    type Query {   
       getTracks: [Track]
       track(id: ID!): Track      
    }

`;