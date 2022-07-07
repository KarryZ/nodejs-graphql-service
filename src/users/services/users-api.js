import { RESTDataSource } from 'apollo-datasource-rest';

export class UserApi extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = process.env.users_url || 'http://localhost:3004/v1/users';
        this.token = null;
    }

    willSendRequest(request) {
        request.headers.set('jwt', this.context.token);
    }

    async getUserById (userId) {
        const data = await this.get(`/${userId}`);
        return data;
    }
    async registerUser (userData) {
        const data = await this.post(`/register`, {...userData});
        return data;
    }

    async getJWT (userData, context) {       
        const data = await this.post( `/login`,{...userData} );
        this.token = data.jwt;
        return data.jwt;
    }

}
