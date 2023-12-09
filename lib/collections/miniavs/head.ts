type ColorMap = { primary: string; secondary: string; shadow: string };

const colors: ColorMap[] = [
  { primary: "#836055", secondary: "#68463C", shadow: "#553329" },
  { primary: "#F5D0C5", secondary: "#EAC0B3", shadow: "#C99688" },
  { primary: "#FFCB7E", secondary: "#F0BD70", shadow: "#E9B05B" },
];

const shapes = [
  (colors: ColorMap) =>
    `<g clip-path="url(#clip0_602_9)">
		<circle cx="18" cy="37" r="5" fill="${colors.secondary}"/>
		<path d="M18 41H35V65.8705C35 65.8705 31.3571 68 26.5 68C21.6429 68 18 64.5226 18 64.5226V41Z" fill="${colors.secondary}"/>
		<path d="M34.8114 53.1122C34.8114 58.4968 33.9402 57.9871 28.2776 57.9871C22.6151 57.9871 20.0016 53.6219 20.0016 48.2373C20.0016 42.8526 19.7867 38 24.3574 38C37.2799 38.4762 34.8114 47.7275 34.8114 53.1122Z" fill="${colors.shadow}"/>
		<path d="M45.8858 36.0992C45.8858 45.0216 44.5 55.9932 33.5 55.9932C22.5 55.9932 17.4284 45.0216 17.4284 36.0992C15 25.5 15.5 13 32 13C48.5 13 45.8858 27.1767 45.8858 36.0992Z" fill="${colors.primary}"/>
		<rect x="36" y="41" width="3" height="2" rx="1" fill="${colors.secondary}"/>
	</g>
	<defs>
		<clipPath id="clip0_602_9">
			<rect width="64" height="64" fill="white"/>
		</clipPath>
	</defs>`,

  (colors: ColorMap) =>
    `<g clip-path="url(#clip0_602_16)">
		<circle cx="18" cy="37" r="5" fill="${colors.secondary}"/>
		<path d="M18 41H35V65.8705C35 65.8705 31.3571 68 26.5 68C21.6429 68 18 64.5226 18 64.5226V41Z" fill="${colors.secondary}"/>
		<path d="M35 53.8678C35 59.5217 34.1177 58.9864 28.3831 58.9864C22.6484 58.9864 20.0016 54.403 20.0016 48.7491C20.0016 43.0953 19.7839 38 24.4129 38C37.5 38.5 35 48.2139 35 53.8678Z" fill="${colors.shadow}"/>
		<path d="M45.8858 36.0992C45.8858 45.0216 49.5716 55.9932 33.5 55.9932C17.4284 55.9932 17.4284 45.0216 17.4284 36.0992C15 25.5 15.5 13 32 13C48.5 13 45.8858 27.1767 45.8858 36.0992Z" fill="${colors.primary}"/>
		<rect x="36" y="41" width="3" height="2" rx="1" fill="${colors.secondary}"/>
	</g>
	<defs>
		<clipPath id="clip0_602_16">
			<rect width="64" height="64" fill="white"/>
		</clipPath>
	</defs>`,

  (colors: ColorMap) =>
    `<g clip-path="url(#clip0_602_23)">
		<circle cx="18" cy="37" r="5" fill="${colors.secondary}"/>
		<path d="M18 41H35V65.8705C35 65.8705 31.3571 68 26.5 68C21.6429 68 18 64.5226 18 64.5226V41Z" fill="${colors.secondary}"/>
		<path d="M35 53.8678C35 59.5217 31.4998 59.9996 28.383 58.9865C25.2663 57.9733 18.9998 49.1535 18.9998 43.4996C18.9998 37.8457 19.7839 38 24.4129 38C37.5 38.5 35 48.2139 35 53.8678Z" fill="${colors.shadow}"/>
		<path d="M45.8858 36.0992C45.8858 45.0216 41.9984 55 35.4984 56.5C25.9984 55.5 17.4284 45.0216 17.4284 36.0992C15 25.5 15.5 13 32 13C48.5 13 45.8858 27.1767 45.8858 36.0992Z" fill="${colors.primary}"/>
		<rect x="36" y="41" width="3" height="2" rx="1" fill="${colors.secondary}"/>
	</g>
	<defs>
		<clipPath id="clip0_602_23">
			<rect width="64" height="64" fill="white"/>
		</clipPath>
	</defs>`,

  (colors: ColorMap) =>
    `<g clip-path="url(#clip0_602_30)">
		<circle cx="18" cy="37" r="5" fill="${colors.secondary}"/>
		<path d="M18 41H35V65.8705C35 65.8705 31.3571 68 26.5 68C21.6429 68 18 64.5226 18 64.5226V41Z" fill="${colors.secondary}"/>
		<path d="M34.8114 53.1122C34.8114 58.4968 33.9402 57.9871 28.2776 57.9871C22.6151 57.9871 20.0016 53.6219 20.0016 48.2373C20.0016 42.8526 19.7867 38 24.3574 38C37.2799 38.4762 34.8114 47.7275 34.8114 53.1122Z" fill="${colors.shadow}"/>
		<path d="M45.8858 36.0992C45.8858 45.0216 44.5 55.9932 33.5 55.9932C22.5 55.9932 17.4284 45.0216 17.4284 36.0992C15 25.5 15.5 13 32 13C48.5 13 45.8858 27.1767 45.8858 36.0992Z" fill="${colors.primary}"/>
		<rect x="36" y="41" width="3" height="2" rx="1" fill="${colors.secondary}"/>
	</g>
	<defs>
		<clipPath id="clip0_602_30">
			<rect width="64" height="64" fill="white"/>
		</clipPath>
	</defs>`,
];

/**
 * Generates a hair SVG fragment.
 */
export function generate(key: number): string {
  const color = colors[key % colors.length] as ColorMap;
  const template = shapes[key % shapes.length] as (colors: ColorMap) => string;
  return template(color);
}
