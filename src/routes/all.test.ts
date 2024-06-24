
import app from '../app';

describe('POST /all', () => {
  it('Should return a response from ollama with an example input', async () => {
    const params = {
      method: 'POST',
      duplex: 'half',
      headers: new Headers({
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`
      }),
      body: JSON.stringify({
        model: "llama3",
        prompt: "Why is the sky blue?",
        stream: false
      })
    }
    const response = await app.request('/api/generate', params)
    const result = await response.json();
    expect(response.status).toEqual(200);
    expect(result?.response).toBeDefined();
  }, 30000);
});
