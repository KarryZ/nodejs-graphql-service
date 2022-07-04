import { gql } from "apollo-server";

export const Artist = gql`
    type Artist {
        _id: ID!
        firstName: String
        secondName: String
        middleName: String
        birthDate: String
        birthPlace: String
        country: String!
        bands: [Band]
        instruments: String
    }

    type Query {   
        getArtists: [Artist]
        artist(id: ID!): Artist
    }

`;