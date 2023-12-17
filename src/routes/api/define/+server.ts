import { openai } from '$lib/server/openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

export async function POST({ request }) {
	const { prompt }: { prompt: string } = await request.json();

  
	const response = await openai.chat.completions.create({
		// model: 'gpt-3.5-turbo-1106',
		model: 'gpt-4-1106-preview',
    // response_format: { "type": "json_object" },
		stream: true,
    seed: 1,
		messages: [
			{
				role: 'system',
				content:
				'You are to act as an assistant on a stem website for students. Prove a brief definition of a given term, using a simple analogy that a high schooler will be able to understand. Be brief and do not exceed 3 sentences.'
			},
			{ role: 'user', content: prompt }
		],
		max_tokens: 250
	});
  

	const stream = OpenAIStream(response);
	return new StreamingTextResponse(stream);
}
