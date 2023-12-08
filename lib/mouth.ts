const shapes = [
	`<g clip-path="url(#clip0_159_90)">
		<path d="M27.9297 46C27.9297 45.4477 28.3774 45 28.9297 45H38.0725C38.6248 45 39.0725 45.4477 39.0725 46C39.0725 48.7614 36.834 51 34.0725 51H32.9297C30.1683 51 27.9297 48.7614 27.9297 46Z" fill="#66253C"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M35.7558 50.7081C35.2298 50.8961 34.6631 50.9985 34.0725 50.9985H32.9297C30.2352 50.9985 28.0385 48.8671 27.9336 46.1984C28.6976 45.9125 29.8316 45.9454 30.951 45.9779C31.3066 45.9882 31.6608 45.9985 32.0011 45.9985C34.2103 45.9985 36.0011 47.5655 36.0011 49.4985C36.0011 49.9236 35.9145 50.3311 35.7558 50.7081Z" fill="#B03E67"/>
		<path d="M29 45H39V46C39 46.5523 38.5523 47 38 47H30C29.4477 47 29 46.5523 29 46V45Z" fill="white"/>
		<path d="M31 45.3C31 45.1343 31.1343 45 31.3 45H32.7C32.8657 45 33 45.1343 33 45.3V47.7C33 47.8657 32.8657 48 32.7 48H31.3C31.1343 48 31 47.8657 31 47.7V45.3Z" fill="#B03E67"/>
	</g>
	<defs>
		<clipPath id="clip0_159_90">
			<rect width="64" height="64" fill="white"/>
		</clipPath>
	</defs>`,

	`<path d="M27.9297 46C27.9297 45.4477 28.3774 45 28.9297 45H38.0725C38.6248 45 39.0725 45.4477 39.0725 46C39.0725 48.7614 36.834 51 34.0725 51H32.9297C30.1683 51 27.9297 48.7614 27.9297 46Z" fill="#66253C"/>
	<path fill-rule="evenodd" clip-rule="evenodd" d="M35.7558 50.7081C35.2298 50.8961 34.6631 50.9985 34.0725 50.9985H32.9297C30.2352 50.9985 28.0385 48.8671 27.9336 46.1984C28.6976 45.9125 29.8316 45.9454 30.951 45.9779C31.3066 45.9882 31.6608 45.9985 32.0011 45.9985C34.2103 45.9985 36.0011 47.5655 36.0011 49.4985C36.0011 49.9236 35.9145 50.3311 35.7558 50.7081Z" fill="#B03E67"/>
	<path d="M29 45H39V46C39 46.5523 38.5523 47 38 47H30C29.4477 47 29 46.5523 29 46V45Z" fill="white"/>`,
];

export function generate(key: number): string {
	return shapes[key % shapes.length];
}
