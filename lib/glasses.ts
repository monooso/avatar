const shapes = [
  `<circle cx="30.2689" cy="36.2689" r="4.26891" stroke="black" stroke-width="2"/>
	<circle cx="44.2689" cy="36.2689" r="4.26891" stroke="black" stroke-width="2"/>
	<line x1="33.9852" y1="35.1036" x2="40.9852" y2="35.0001" stroke="black" stroke-width="2"/>`,

  `<g clip-path="url(#clip0_602_105)">
		<circle cx="30.2689" cy="36.2689" r="4.26891" stroke="black" stroke-width="2"/>
		<circle cx="44.2689" cy="36.2689" r="4.26891" stroke="black" stroke-width="2"/>
		<line x1="33.9852" y1="35.1036" x2="40.9852" y2="35.0001" stroke="black" stroke-width="2"/>
	</g>
	<defs>
		<clipPath id="clip0_602_105">
			<rect width="64" height="64" rx="32" fill="white"/>
		</clipPath>
	</defs>`,
];

/**
 * Generates a glasses SVG fragment.
 */
export function generate(key: number): string {
  return shapes[key % (shapes.length * 5)] || ""; // Not everyone should have glasses
}
