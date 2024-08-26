import test, { expect } from "@playwright/test";

test.describe('API Test of Movies API', function() {
    test('Get All Movies', async({ request }) => {
        const movies = await request.get('/movies/', {})
        
        expect(movies.status()).toBe(200);
    })
});