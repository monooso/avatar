import * as crypto from 'node:crypto';
import * as background from './background.js';
import * as body from './body.js';
import * as eyes from './eyes.js';
import * as glasses from './glasses.js';
import * as hair from './hair.js';
import * as head from './head.js';
import * as mouth from './mouth.js';
import * as mustache from './mustache.js';

/**
 * Generates a reproducible numeric key from the given string.
 */
async function generateKey(input: string): Promise<number> {
	// Encode the input text as UTF-8
	const encoder = new TextEncoder();
	const data = encoder.encode(input);

	const buffer = await crypto.subtle.digest('SHA-256', data);
	const bytes = Array.from(new Uint8Array(buffer));

	return bytes.reduce((sum, byte) => sum + byte);
}

/**
 * Generates a reproducible SVG image for the given "id".
 */
export async function generate(id: string): Promise<string> {
	const key = await generateKey(id);

	return `
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${background.generate(key)}
    ${body.generate(key)}
    ${head.generate(key)}
    ${eyes.generate(key)}
    ${mouth.generate(key)}
    ${mustache.generate(key)}
    ${hair.generate(key)}
    ${glasses.generate(key)}
</svg>
  `;
}
