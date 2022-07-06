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
        instruments: [String]
    }

    input UpdateArtistInput {        
            firstName: String
            secondName: String
            middleName: String
            country: String
            bandsIds: [ID]
            instruments: [String]      
        }
        
        input CreateArtistInput {       
            firstName: String!
            secondName: String
            middleName: String
            country: String!
            bandsIds: [ID]
            instruments: [String]
        }
        
        
        type ChangedArtist {
            _id: ID
            firstName: String
            secondName: String
            middleName: String
            country: String
            bandsIds: [ID]
            instruments: [String]      
        }
        
        type DeleteArtist {
            acknowledged: Boolean
            deletedCount: Int
        }

 
        type Mutation {
            createArtist(input:CreateArtistInput): ChangedArtist
            updateArtist(id: ID!, input:UpdateArtistInput): ChangedArtist
            deleteArtist(id: ID!): DeleteArtist
        }


    type Query {   
        getArtists: [Artist]
        artist(id: ID!): Artist
    }

`;




    

