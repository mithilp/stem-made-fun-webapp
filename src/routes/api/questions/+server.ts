import { openai } from '$lib/server/openai';
import { streamText } from 'ai';

export async function POST({ request }) {
	const { prompt }: { prompt: string } = await request.json();

	const result = streamText({
		model: openai('gpt-4o-mini'),
		system:
			'You are to act as an assistant on a stem website for students. Answer any questions briefly, with a maximum of 4 sentences.',
		prompt,
		maxOutputTokens: 250
	});

	return result.toTextStreamResponse();
}
