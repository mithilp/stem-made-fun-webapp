import { openai } from '$lib/server/openai';
import { streamText } from 'ai';

export async function POST({ request }) {
	const { prompt }: { prompt: string } = await request.json();

	const result = streamText({
		model: openai('gpt-4o-mini'),
		system:
			'You are to act as an assistant on a stem website for students. You are to provide one or two real world examples of a given subject, likely in the realm of physics. Make it simple, brief, and understandable for high school students. Do not exceed three sentences.',
		prompt,
		maxOutputTokens: 250
	});

	return result.toTextStreamResponse();
}
