type ColorMap = { primary: string; secondary: string };

const colors: ColorMap[] = [
  { primary: "#E05A33", secondary: "#C53926" },
  { primary: "#3633E0", secondary: "#362ABC" },
  { primary: "#FF4DD8", secondary: "#D2499B" },
];

const shapes = [
  (colors: ColorMap) =>
    `<g clip-path="url(#clip0_602_48)">
			<rect x="7" y="60" width="40" height="23" rx="9" fill="${colors.primary}"/>
			<path d="M17 58H36V61C36 61 31 62 26.5 62C22 62 17 61 17 61V58Z" fill="${colors.primary}"/>
			<path d="M17 58H36V60C36 60 33 61.5 26.5 61.5C20 61.5 17 60 17 60V58Z" fill="${colors.secondary}"/>
			<path d="M16.5 59C16.5 57.8954 17.3954 57 18.5 57H34.5C35.6046 57 36.5 57.8954 36.5 59V59C36.5 59 31.5 60 26.5 60C21.5 60 16.5 59 16.5 59V59Z" fill="${colors.primary}"/>
		</g>
		<defs>
			<clipPath id="clip0_602_48">
				<rect width="64" height="64" fill="white"/>
			</clipPath>
		</defs>`,

  (colors: ColorMap) =>
    `<g clip-path="url(#clip0_602_53)">
			<rect x="7" y="60" width="40" height="23" rx="9" fill="${colors.primary}"/>
		</g>
		<defs>
			<clipPath id="clip0_602_53">
				<rect width="64" height="64" fill="white"/>
			</clipPath>
		</defs>`,

  (colors: ColorMap) =>
    `<g clip-path="url(#clip0_602_55)">
			<g clip-path="url(#clip1_602_55)">
				<rect x="7" y="60" width="40" height="23" rx="9" fill="${colors.primary}"/>
				<path d="M17 58H36V61C36 61 31 62 26.5 62C22 62 17 61 17 61V58Z" fill="${colors.primary}"/>
				<path d="M17 58H36V60C36 60 33 61.5 26.5 61.5C20 61.5 17 60 17 60V58Z" fill="${colors.secondary}"/>
				<path d="M16.5 59C16.5 57.8954 17.3954 57 18.5 57H34.5C35.6046 57 36.5 57.8954 36.5 59V59C36.5 59 31.5 60 26.5 60C21.5 60 16.5 59 16.5 59V59Z" fill="${colors.primary}"/>
			</g>
		</g>
		<defs>
			<clipPath id="clip0_602_55">
				<rect width="64" height="64" fill="white"/>
			</clipPath>
			<clipPath id="clip1_602_55">
				<rect width="64" height="64" fill="white"/>
			</clipPath>
		</defs>`,
];

/**
 * Generates a body SVG fragment.
 */
export function generate(key: number): string {
  const color = colors[key % colors.length] as ColorMap;
  const template = shapes[key % shapes.length] as (colors: ColorMap) => string;
  return template(color);
}
