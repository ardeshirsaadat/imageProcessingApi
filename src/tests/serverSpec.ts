import supertest from 'supertest'
import {app} from '../server'

const request = supertest(app);
describe('Test endpoint responses', () => {
    it('gets the /api endpoint', async (done) => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
        done();
    })
    it('gets the /api/images endpoint', async (done) => {
        const response = await request.get('/api/images');
        expect(response.status).toBe(200);
        done();
    })
    
    it('gets the /api/images endpoint', async (done) => {
        const response = await request.get('/api/image');
        expect(response.status).toBe(404);
        done();
    })
});
