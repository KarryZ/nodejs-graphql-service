import { Track } from "./tracks/schemas/schema.js";
import { Band } from "./bands/schemas/schema.js";
import { Genre } from "./genres/schemas/schema.js";
import { Artist } from "./artists/schemas/schema.js";
import { Album } from "./album/schemas/schema.js";
import { Favourites } from "./favourites/schemas/schema.js";
import { User } from "./users/schemas/schema.js";


export default [Track, Band, Genre, Artist, Album, Favourites, User];






























// export const typeDefs = gql`
//     type Query {   
//         getTracks: [Track]
//     }
//     type Track: ${Track}
// `;






// type Query {   
//     getTracks: [Track]
// }
// Track: ${Track}



















// type Query {   
//     //getTracks: [Track]  
//     //getArtist: [Artist]
//     //getGenres: [Genre]
//    // getBands: [Band]
//    // getAlbums: [Album]
//    //getFavourites: [Favourites]
//     getJWT: String
//     getUsers: [User]
//    

//     getUserById(id: String!): User
//     getAlbumById(id: String!): Album 
// }

// type Track {
//     _id: ID!
//     title: String
//     albums: String
//     bands: [Band]
//     duration: Int
//     released: Int
//     genres: [Genre]
// }
// type Genre {
//     _id: ID!
//     name: String
//     description: String
//     country: String
//     year: Int
//   }

//   type Band {
//     _id: ID!
//     name: String
//     origin: String
//     website: String
//     genres: String
//   }
// type Artist {
//         id: ID!
//         firstName: String
//         secondName: String
//         middleName: String
//         birthDate: String
//         birthPlace: String
//         country: String!
//         bands: [Band]
//         instruments: String
// }
// type Favourites {
//     id: ID!
//     userId: ID!
//     bands: [ID]
//     genres: [ID]
//     artists: [ID]
//     tracks: [ID]
// }
// type Album {
//     id: ID
//     name: String
//     released: Int
//     artists: [Artist]
//     bands: [Band]
//     tracks: [Track]
//     genres: [Genre]
//     image: String
// }
// type User {
//     id: ID!
//     firstName: String
//     secondName: String
//     middleName: String
//     password: String!
//     email: String!
// }