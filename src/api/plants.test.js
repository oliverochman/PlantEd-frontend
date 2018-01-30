const request = require('supertest');

describe('the plant API', () => {
  it('returns a list of all the plants', async () => {
    const res = await request('http://localhost:3000')
      .get('/api/v1/plants')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0].name).toBe('Aloe Vera');
  });
});
