const colors = [
	"#6F6FFB",
	"#68DBF2",
	"#E4ECF7",
	"#FFBAF8",
	"#F16063",
	"#70E0BF",
];

export function generate(key: number): string {
	const index = key % colors.length;
	return `<rect x="0" y="0" width="100%" height="100%" fill="${colors[index]}" />`;
}
