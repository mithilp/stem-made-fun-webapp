import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	OPENAI_API_KEY: {
		description: 'OpenAI key used by the /api/questions, /api/define and /api/examples routes'
	}
});
