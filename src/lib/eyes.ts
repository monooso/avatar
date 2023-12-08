const shapes = [
	`<g clip-path="url(#clip0_159_135)">
		<rect x="30" y="36" width="3" height="4" rx="1.5" fill="#1B0B47"/>
		<rect x="40" y="36" width="3" height="4" rx="1.5" fill="#1B0B47"/>
	</g>
	<defs>
		<clipPath id="clip0_159_135">
			<rect width="64" height="64" rx="32" fill="white"/>
		</clipPath>
	</defs>`,

	`<g clip-path="url(#clip0_161_246)">
		<g clip-path="url(#clip1_161_246)">
			<rect x="30" y="36" width="3" height="4" rx="1.5" fill="#1B0B47"/>
			<rect x="40" y="36" width="3" height="4" rx="1.5" fill="#1B0B47"/>
			<rect x="24" y="39" width="5" height="3" rx="1.5" fill="#FF859B"/>
			<rect x="43" y="39" width="4" height="3" rx="1.5" fill="#FF859B"/>
		</g>
	</g>
	<defs>
		<clipPath id="clip0_161_246">
			<rect width="64" height="64" rx="32" fill="white"/>
		</clipPath>
		<clipPath id="clip1_161_246">
			<rect width="64" height="64" rx="32" fill="white"/>
		</clipPath>
	</defs>`,

	`<g clip-path="url(#clip0_164_867)">
		<path d="M43 37.5C43 38.3284 42.3284 39 41.5 39C40.6716 39 40 38.3284 40 37.5L40 36.2727C40 36.1221 40.1221 36 40.2727 36L42.7273 36C42.8779 36 43 36.1221 43 36.2727L43 37.5Z" fill="#1B0B47"/>
		<path d="M33 37.5C33 38.3284 32.3284 39 31.5 39C30.6716 39 30 38.3284 30 37.5L30 36.2727C30 36.1221 30.1221 36 30.2727 36L32.7273 36C32.8779 36 33 36.1221 33 36.2727L33 37.5Z" fill="#1B0B47"/>
		<line x1="29.5" y1="36.5" x2="33.5" y2="36.5" stroke="#1B0B47" stroke-linecap="round"/>
		<line x1="39.5" y1="36.5" x2="43.5" y2="36.5" stroke="#1B0B47" stroke-linecap="round"/>
	</g>
	<defs>
		<clipPath id="clip0_164_867">
			<rect width="64" height="64" rx="32" fill="white"/>
		</clipPath>
	</defs>`,

	`<g clip-path="url(#clip0_164_837)">
		<g clip-path="url(#clip1_164_837)">
			<rect x="24" y="39" width="5" height="3" rx="1.5" fill="#FF859B"/>
			<rect x="43" y="39" width="4" height="3" rx="1.5" fill="#FF859B"/>
			<path d="M43 37.5C43 38.3284 42.3284 39 41.5 39C40.6716 39 40 38.3284 40 37.5L40 36.2727C40 36.1221 40.1221 36 40.2727 36L42.7273 36C42.8779 36 43 36.1221 43 36.2727L43 37.5Z" fill="#1B0B47"/>
			<path d="M33 37.5C33 38.3284 32.3284 39 31.5 39C30.6716 39 30 38.3284 30 37.5L30 36.2727C30 36.1221 30.1221 36 30.2727 36L32.7273 36C32.8779 36 33 36.1221 33 36.2727L33 37.5Z" fill="#1B0B47"/>
			<line x1="29.5" y1="36.5" x2="33.5" y2="36.5" stroke="#1B0B47" stroke-linecap="round"/>
			<line x1="39.5" y1="36.5" x2="43.5" y2="36.5" stroke="#1B0B47" stroke-linecap="round"/>
		</g>
	</g>
	<defs>
		<clipPath id="clip0_164_837">
			<rect width="64" height="64" rx="32" fill="white"/>
		</clipPath>
		<clipPath id="clip1_164_837">
			<rect width="64" height="64" rx="32" fill="white"/>
		</clipPath>
	</defs>`,

	`<g clip-path="url(#clip0_164_996)">
		<path d="M30 37.5C30 36.6716 30.6716 36 31.5 36C32.3284 36 33 36.6716 33 37.5V38.7273C33 38.8779 32.8779 39 32.7273 39H30.2727C30.1221 39 30 38.8779 30 38.7273V37.5Z" fill="#1B0B47"/>
		<path d="M40 37.5C40 36.6716 40.6716 36 41.5 36C42.3284 36 43 36.6716 43 37.5V38.7273C43 38.8779 42.8779 39 42.7273 39H40.2727C40.1221 39 40 38.8779 40 38.7273V37.5Z" fill="#1B0B47"/>
	</g>
	<defs>
		<clipPath id="clip0_164_996">
			<rect width="64" height="64" rx="32" fill="white"/>
		</clipPath>
	</defs>`,

	`<g clip-path="url(#clip0_164_1031)">
		<g clip-path="url(#clip1_164_1031)">
			<rect x="24" y="39" width="5" height="3" rx="1.5" fill="#FF859B"/>
			<rect x="43" y="39" width="4" height="3" rx="1.5" fill="#FF859B"/>
			<path d="M30 37.5C30 36.6716 30.6716 36 31.5 36C32.3284 36 33 36.6716 33 37.5V38.7273C33 38.8779 32.8779 39 32.7273 39H30.2727C30.1221 39 30 38.8779 30 38.7273V37.5Z" fill="#1B0B47"/>
			<path d="M40 37.5C40 36.6716 40.6716 36 41.5 36C42.3284 36 43 36.6716 43 37.5V38.7273C43 38.8779 42.8779 39 42.7273 39H40.2727C40.1221 39 40 38.8779 40 38.7273V37.5Z" fill="#1B0B47"/>
		</g>
	</g>
	<defs>
		<clipPath id="clip0_164_1031">
			<rect width="64" height="64" rx="32" fill="white"/>
		</clipPath>
		<clipPath id="clip1_164_1031">
			<rect width="64" height="64" rx="32" fill="white"/>
		</clipPath>
	</defs>`
];

/**
 * Generates an eyes SVG fragment.
 */
export function generate(key: number): string {
	return shapes[key % shapes.length] as string;
}
