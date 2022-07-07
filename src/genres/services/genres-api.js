import { RESTDataSource } from 'apollo-datasource-rest';

export class GenreApi extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = process.env.genres_url || 'http://localhost:3001/v1/genres';
    }

    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token);
    }

    async getGenres () {
        const data = await this.get("");        
        return data.items;
    }

    getGenreById (Id) {        
        return this.get(`/${Id}`);
    }

    createGenre(data) {       
        const genre = this.post("", {...data });
        return genre;
    }

    updateGenre(Id, data) {       
        const genre = this.put(`/${Id}`, {...data});
        return genre;
    }

    deleteGenre(Id) {       
        const genre = this.delete(`/${Id}`);
        return genre;
    }

}
