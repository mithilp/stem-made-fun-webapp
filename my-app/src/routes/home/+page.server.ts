import { fail } from '@sveltejs/kit';
import { writeFileSync } from 'fs';

export const actions = {
    default: async ({ request }) => {
        const formData = Object.fromEntries(await request.formData());
        if (
            !(formData.pdf as File).name ||
            (formData.pdf as File).name === 'undefined'
        ) {
            return fail(400, {
                error: true,
                message: 'You must provide a file to upload'
            });
        }
        
        const { pdf } = formData as { pdf: File};

        writeFileSync(`static/${pdf.name}`, Buffer.from(await pdf.arrayBuffer()));

        return {
            success: true
        };
    }
}
