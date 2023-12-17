import { OPENAI_API_KEY } from '$env/static/private';
import OpenAI from 'openai';

console.log('OPENAI_API_KEY:', OPENAI_API_KEY);

export const openai = new OpenAI({
  apiKey: OPENAI_API_KEY
});
