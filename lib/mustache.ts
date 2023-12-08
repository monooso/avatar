const colors: string[] = ["#47280B", "#1B0B47", "#AD3A20"];

const shapes = [
	(color: string) =>
		`<path fill-rule="evenodd" clip-rule="evenodd" d="M27 46C27 44.3431 28.3431 43 30 43H41C42.6569 43 44 44.3431 44 46V57C41.7909 57 40 55.2091 40 53V46H31V53C31 55.2091 29.2091 57 27 57V46Z" fill="${color}"/>`,

	(color: string) =>
		`<path d="M28 46C28 44.3431 29.3431 43 31 43H40C41.6569 43 43 44.3431 43 46V46H28V46Z" fill="${color}"/>`,

	(color: string) =>
		`<path fill-rule="evenodd" clip-rule="evenodd" d="M37.5 43C31 44.5 26.5 45 26.5 45C26.5 45 27.5 47.5 30 47C32 46.6 36 45.6667 37.5 45V43ZM38 43C44 44 48 44.7558 48 44.7558C48 44.7558 46.881 46.939 44.5 46.5C44.3967 46.481 44.2897 46.4613 44.1794 46.441C42.2569 46.0876 39.3511 45.5535 38 45V43Z" fill="${color}"/>`,

	(
		color: string,
	) => `<path d="M26.5 45C26.5 45 31 44.5 37.5 43V45C36 45.6667 32 46.6 30 47C27.5 47.5 26.5 45 26.5 45Z" fill="${color}"/>
		<path d="M48 44.7558C48 44.7558 44 44 38 43V45C39.4286 45.5853 42.5952 46.1488 44.5 46.5C46.881 46.939 48 44.7558 48 44.7558Z" fill="${color}"/>
		<path d="M33.3106 55.2425C33.1528 54.6114 33.6302 54 34.2808 54H37.7192C38.3698 54 38.8472 54.6114 38.6894 55.2425L38.4394 56.2425C38.3281 56.6877 37.9281 57 37.4692 57H34.5308C34.0719 57 33.6719 56.6877 33.5606 56.2425L33.3106 55.2425Z" fill="${color}"/>`,

	(color: string) => `<g clip-path="url(#clip0_602_92)">
			<g clip-path="url(#clip1_602_92)">
				<path d="M28 46C28 44.3431 29.3431 43 31 43H40C41.6569 43 43 44.3431 43 46V46H28V46Z" fill="${color}"/>
			</g>
		</g>
		<defs>
			<clipPath id="clip0_602_92">
				<rect width="64" height="64" rx="32" fill="white"/>
			</clipPath>
			<clipPath id="clip1_602_92">
				<rect width="64" height="64" fill="white"/>
			</clipPath>
		</defs>`,
];

export function generate(key: number): string {
	const color = colors[key % colors.length];
	const template = shapes[key % (shapes.length * 5)] || ""; // Not everyone should have a moustache
	return template ? template(color) : "";
}
