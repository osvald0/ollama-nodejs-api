import app from '../app';

describe('GET /health', () => {
  it('Should return SUCCESS if the ollama api is up', async () => {
    const params = {
      duplex: 'half',
      headers: new Headers({
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`
      }),
    }
    const response = await app.request('/health', params)
    const result = await response.json();
    expect(response.status).toEqual(200);
    expect(result?.alive).toEqual(true);
  });
});
