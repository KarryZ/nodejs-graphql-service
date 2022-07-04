import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs.js";
import { BandApi } from "./bands/services/bands-api.js";
import { GenreApi } from "./genres/services/genres-api.js";
import { resolvers } from "./resolvers.js";
import { TrackApi } from "./tracks/services/track-api.js";
import { ArtistApi } from "./artists/services/artists-api.js";
import { AlbumApi } from "./album/services/albums-api.js";
import { FavouritesApi } from "./favourites/services/favourites-api.js";
import { UserApi } from "./users/services/users-api.js";

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const token = req.headers.jwt || process.env.token;
    },
    dataSources: () => {
        return {
            TrackApi: new TrackApi(),
            BandApi: new BandApi(),
            GenreApi: new GenreApi(),
            ArtistApi: new ArtistApi(),
            AlbumApi: new AlbumApi(),
            FavouritesApi: new FavouritesApi(),
            UserApi: new UserApi()            

        }
    }
});
const PORT = process.env.PORT || 3000;
server.listen({port: PORT})
.then(() => console.log('Server works!'));