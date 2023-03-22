import openai from 'openai';

class OpenAIClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    openai.apiKey = apiKey;
  }

  async createCompletion(prompt, options) {
    try {
      const result = await openai.Completion.create({
        prompt,
        ...options,
      });
      return result.choices[0].text;
    } catch (error) {
      console.error('Error in OpenAI completion:', error);
      throw error;
    }
  }
}

export default OpenAIClient;