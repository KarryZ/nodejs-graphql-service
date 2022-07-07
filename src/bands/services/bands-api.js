import { RESTDataSource } from 'apollo-datasource-rest';

export class BandApi extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = process.env.bands_url || 'http://localhost:3003/v1/bands';
    }

    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token);
    }

    async getBands () {
        const data = await this.get("");
        return data.items;
    }

    getBandById (Id) {
        return this.get(`/${Id}`);
    }

    async getGenres (id, GenreApi) {       
        const bands = await this.get(`/${id}`);
        const genressData = bands.genresIds.map(Id => GenreApi.getGenreById(Id));
        return genressData;
    }

    createBand(data) {       
        const band = this.post("", {...data });
        return band;
    }

    updateBand(Id, data) {       
        const band = this.put(`/${Id}`, {...data});
        return band;
    }

    deleteBand(Id) {       
        const band = this.delete(`/${Id}`);
        return band;
    }


}
