const request = require('supertest');

describe('get track', () => {
    it('should return first track', async() => {
        await request('https://AzureAPI-DennisPynaerts.azurewebsites.net')
            .get('./track')
            .expect(200)
            .expect('Content-Type', 'application/json; charset-utf-8')
            .expect((res) => {
                console.log(res.body[0])
            })
    });
});