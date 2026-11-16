import { openai } from '#lib/server/openai';
import { streamText } from 'ai';

export async function POST({ request }) {
	const { prompt }: { prompt: string } = await request.json();

	const result = streamText({
		model: openai('gpt-4o-mini'),
		system:
			'You are to act as an assistant on a stem website for students. Prove a brief definition of a given term, using a simple analogy that a high schooler will be able to understand. Be brief and do not exceed 3 sentences.',
		prompt,
		maxOutputTokens: 250
	});

	return result.toTextStreamResponse();
}
