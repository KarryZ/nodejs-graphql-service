import { gql } from "apollo-server";

export const User = gql`
    type JWT {
        jwt: String
    }
    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        password: String!
        email: String!
    } 

    type Query {   
        getUserById(id: ID!): User       
    }
    type Mutation {
        registerUser(
            firstName: String!
            lastName: String!
            password: String!
            email: String!
        ): User

        getJWT(
            password: String!
            email: String!
        ): JWT
    }
`;