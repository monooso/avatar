const colors: string[] = ["#47280B", "#1B0B47", "#AD3A20"];

const shapes = [
	(
		color: string,
	) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M45.9679 32.4833C47.1812 31.7963 48 30.4938 48 29C48 28.5071 47.9108 28.035 47.7478 27.599C49.0811 26.9503 50 25.5824 50 24C50 21.7909 48.2091 20 46 20C45.5755 20 45.1665 20.0661 44.7827 20.1886C46.2002 23.8625 46.0964 28.4069 45.9679 32.4833Z" fill="${color}"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M36.2967 22.7594C35.4166 23.5317 34.263 24 33 24C31.8485 24 30.788 23.6108 29.9428 22.9567C28.6766 24.2194 26.9294 25 25 25C24.2884 25 23.6016 24.8938 22.9546 24.6964C22.6949 24.9808 22.3947 25.2275 22.0632 25.4275C22.6478 26.123 23 27.0204 23 28C23 29.5965 22.0647 30.9746 20.7121 31.6161C20.8931 31.864 21 32.1695 21 32.5C21 33.3284 20.3284 34 19.5 34C19.4883 34 19.4767 33.9999 19.4651 33.9996C18.7735 35.1954 17.4807 36 16 36C13.7909 36 12 34.2091 12 32C12 31.5931 12.0608 31.2004 12.1737 30.8305C11.4486 30.1065 11 29.1056 11 28C11 26.8944 11.4486 25.8935 12.1737 25.1695C12.0608 24.7996 12 24.4069 12 24C12 23.0343 12.3422 22.1485 12.912 21.4573C12.3315 20.4374 12 19.2574 12 18C12 14.8253 14.1134 12.1442 17.0101 11.2869C17.0034 11.1921 17 11.0965 17 11C17 8.79086 18.7909 7 21 7C21.7027 7 22.363 7.18118 22.9368 7.49936C24.1473 5.40741 26.4093 4 29 4C30.3733 4 31.6543 4.39549 32.7352 5.07878C33.9222 3.80011 35.6177 3 37.5 3C40.2166 3 42.5439 4.66648 43.5155 7.03291C45.4811 7.2858 47 8.96552 47 11C47 11.2076 46.9842 11.4114 46.9537 11.6104C48.8091 12.9839 50 15.1116 50 17.5C50 21.6421 46.4183 25 42 25C39.7671 25 37.7479 24.1424 36.2967 22.7594Z" fill="${color}"/>`,

	(color: string) =>
		`<path d="M20.6733 28.2207V34.2387C20.6733 35.0008 20 36 19.5 36.5C19 37 17.5 38 16.6509 38C15.8018 38 13.1111 37.5486 11.824 35.7432C10.5368 33.9378 10.9315 24.4207 11.824 22.2027C12.7164 19.9847 16.0066 15.3153 20.6733 11.7507C24.0531 9.16908 28.3394 7.03361 33.5451 6.40552C58.4841 3.3965 49.2179 20.9865 46 25.5C40.5 23.5 36.5 23 29.2828 23.9823C22.0657 24.9646 21.2668 25.964 20.6733 28.2207Z" fill="${color}"/>`,

	(color: string) =>
		`<path fill-rule="evenodd" clip-rule="evenodd" d="M28.1177 27.4639C35.9142 28.6061 49.5988 30.611 51 18.0001C52 9.00006 38.5 -1.49995 24 8.00005C14.8908 9.34956 12.611 16.2779 12.0917 22.2539C11.4149 22.9703 11 23.9367 11 25.0001C11 25.5305 11.1033 26.0368 11.2908 26.5001C11.1033 26.9633 11 27.4696 11 28.0001C11 29.1057 11.4486 30.1066 12.1737 30.8306C12.0608 31.2005 12 31.5932 12 32.0001C12 34.2092 13.7909 36.0001 16 36.0001C18.2091 36.0001 20 34.2092 20 32.0001C22.2091 32.0001 24 30.2092 24 28.0001C24 27.6553 23.9564 27.3207 23.8744 27.0015C23.9163 27.0005 23.9582 27.0001 24 27.0001C24.9517 27.0001 26.3901 27.2108 28.1177 27.4639Z" fill="${color}"/>`,

	(color: string) =>
		`<path fill-rule="evenodd" clip-rule="evenodd" d="M28.9649 26.2012C34.576 28.0641 42.3537 30.6463 50.5 22.5C54.5 18.5 36.5 1.50004 22 11C10.6667 12.679 11.3144 19.4699 11.8143 24.7107C11.9099 25.7126 12 26.6579 12 27.5C12 28.0329 12.0697 28.4317 12.2003 28.7183C12.0396 29.9514 12 31.1853 12 32C12 34.2092 13.7909 36 16 36C18.2091 36 20 34.2092 20 32C22.2091 32 24 30.2092 24 28C24 27.654 23.9561 27.3183 23.8735 26.9981C23.9155 26.9994 23.9577 27 24 27C25.2237 27 26.3191 26.4505 27.0528 25.5848C27.6574 25.7671 28.2957 25.979 28.9649 26.2012Z" fill="${color}"/>`,

	(color: string) => `<g clip-path="url(#clip0_602_153)">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M48 25C48 22.6362 47.5344 20.2956 46.6298 18.1117C45.7252 15.9278 44.3994 13.9435 42.7279 12.2721C41.0565 10.6006 39.0722 9.27475 36.8883 8.37017C34.7044 7.46558 32.3638 7 30 7C27.6362 7 25.2956 7.46558 23.1117 8.37017C20.9278 9.27475 18.9435 10.6006 17.2721 12.2721C15.6006 13.9435 14.2748 15.9278 13.3702 18.1117C12.5295 20.1412 12.068 22.306 12.007 24.4991L12 24.5V25V65H23V34.5975C25.4847 34.1193 29.7793 33.0675 35.2083 30.8407C40.6717 28.5996 44.0812 26.4823 45.8758 25.2039C46.1179 27.7278 46.0341 30.3637 45.9562 32.8148C45.9198 33.96 45.8846 35.0649 45.8846 36.0992C45.8846 36.5069 45.8765 36.9167 45.8604 37.3279C46.0914 37.255 46.3074 37.1751 46.4988 37.0877C47.9988 36.4035 47.9988 35.4912 47.9988 35.4912V25H48ZM15 33C14.8111 33.1416 14.6321 33.2968 14.4645 33.4645C14.0002 33.9288 13.6319 34.48 13.3806 35.0866C13.1293 35.6932 13 36.3434 13 37C13 37.6566 13.1293 38.3068 13.3806 38.9134C13.6319 39.52 14.0002 40.0712 14.4645 40.5355C14.6321 40.7032 14.8111 40.8584 15 41V33Z" fill="${color}"/>
		</g>
		<defs>
			<clipPath id="clip0_602_153">
				<rect width="64" height="64" fill="white"/>
			</clipPath>
		</defs>`,

	(color: string) =>
		`<path d="M22 28C21.3707 31 23 34.9811 23 35.7433C23 36.5054 19.0688 38.7684 18 39.5C16.9312 40.2316 16.5 32.5 16.5 32.5C13.4999 32.5 13 38 13 38C13 38 10.7553 37.2599 9.99997 33.5C9.48969 30.9601 10.2984 25.4111 10.5 24C11 20.5 11.5 12.5 18 8.50001C24.5 4.50001 41 4.50001 45 5.50002C54.8935 7.97341 56.2179 21.4865 53 26C48 31.5 34 25 29.5 25C25 25 22.6292 25 22 28Z" fill="${color}"/>`,

	(
		color: string,
	) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M24 25C24 25.5305 23.8967 26.0368 23.7092 26.5C23.8967 26.9632 24 27.4695 24 28C24 30.2091 22.2091 32 20 32C20 34.2091 18.2091 36 16 36C13.7909 36 12 34.2091 12 32C12 30.9541 12.0652 29.2176 12.3683 27.6787C12.1319 27.1682 12 26.5995 12 26C12 23.7909 13.7909 22 16 22C16.4069 22 16.7996 22.0607 17.1695 22.1737C17.8935 21.4486 18.8944 21 20 21C22.2091 21 24 22.7909 24 25Z" fill="${color}"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M45.8487 33.8926C47.6122 33.4755 48.9245 31.891 48.9245 29.9999C48.9245 29.4695 48.8213 28.9631 48.6338 28.4999C48.8213 28.0367 48.9245 27.5304 48.9245 26.9999C48.9245 24.9862 47.4365 23.32 45.5 23.041C46.0928 26.1815 45.9824 29.6519 45.8819 32.8147C45.8703 33.1784 45.8589 33.538 45.8487 33.8926Z" fill="${color}"/>`,

	(color: string) => `<g clip-path="url(#clip0_602_183)">
			<path d="M-0.000994921 9.99802C7.99624 2.00187 13.0009 12.9993 13.0009 12.9993L10.9995 20.9987C10.9995 20.9987 8.99916 23.4984 10.9995 30.9984C12.9998 38.4984 8.49915 42.4984 8.49915 42.4984C8.49915 42.4984 4.99998 45 1.99998 43C-1.00002 41 -1.39763 39.0784 -1.00002 35.5C-0.500025 31 0.999121 32.4984 0.999121 27.9984C0.999121 23.4984 -7.99823 17.9942 -0.000994921 9.99802Z" fill="${color}"/>
			<path d="M13.0307 13.1813L18.538 15.5626L14.966 23.8234L9.45879 21.4421C9.45879 21.4421 8.49992 19.5 9.99818 16.5009C11.4964 13.5018 13.0307 13.1813 13.0307 13.1813Z" fill="#FF6C98"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M18 41L16.6766 32.177C14.5574 32.7572 13 34.6967 13 37C13 39.7614 15.2386 42 18 42V50.3C16.4507 48.9346 15.0744 47.3086 13.9174 45.4696C12.2165 42.7662 11.0292 39.6655 10.4354 36.3768C9.84164 33.0881 9.85532 29.6881 10.4755 26.4061C11.0957 23.1242 12.308 20.0368 14.0305 17.3524C15.753 14.668 17.9456 12.4491 20.4603 10.8456C22.975 9.24202 25.7533 8.2911 28.6075 8.05703C29.2305 8.00594 29.854 7.98926 30.476 8.00666C30.6505 8.00222 30.8252 8 31 8C33.4951 8 35.9658 8.45265 38.271 9.33211C40.5762 10.2116 42.6707 11.5006 44.435 13.1256C46.1993 14.7507 47.5989 16.6798 48.5537 18.803C49.3002 20.4629 49.7634 22.2159 49.9301 24H50V25.5V28.2857C50 28.2857 49.6712 28.4383 49.0015 28.6525V37.1404C49.0015 37.1404 49.0015 38.5439 47.5015 39.5965C46.9824 39.9608 46.2837 40.241 45.5918 40.4517C45.7881 39 45.8888 37.5359 45.8888 36.0992C45.8888 35.0649 45.924 33.96 45.9604 32.8148V32.8148C45.9959 31.6968 46.0327 30.5404 46.0392 29.3736C44.1879 29.7129 41.6726 30 38.4615 30C30.6154 30 26 28.2857 26 28.2857V27.2872C25.3194 28.3507 24.5839 29.6375 24 31C23.25 32.75 23.25 34.5439 23.25 36.0515C23.25 37.5592 23.25 38.7807 22.5 39.386C21 40.5965 18 41 18 41Z" fill="${color}"/>
		</g>
		<defs>
			<clipPath id="clip0_602_183">
				<rect width="64" height="64" fill="white"/>
			</clipPath>
		</defs>`,

	(
		color: string,
	) => `<rect x="14" y="26" width="9" height="2" rx="1" fill="${color}"/>
		<rect x="14" y="33" width="7" height="2" rx="1" fill="${color}"/>
		<rect x="12" y="29" width="13" height="3" rx="1.5" fill="${color}"/>`,

	(color: string) =>
		`<path fill-rule="evenodd" clip-rule="evenodd" d="M28.9649 26.2012C34.576 28.0641 42.3537 30.6463 50.5 22.5C54.5 18.5 36.5 1.50004 22 11C10.6667 12.679 11.3144 19.4699 11.8143 24.7107C11.9099 25.7126 12 26.6579 12 27.5C12 28.0329 12.0697 28.4317 12.2003 28.7183C12.0396 29.9514 12 31.1853 12 32C12 34.2092 13.7909 36 16 36C18.2091 36 20 34.2092 20 32C22.2091 32 24 30.2092 24 28C24 27.654 23.9561 27.3183 23.8735 26.9981C23.9155 26.9994 23.9577 27 24 27C25.2237 27 26.3191 26.4505 27.0528 25.5848C27.6574 25.7671 28.2957 25.979 28.9649 26.2012Z" fill="${color}"/>`,
];

export function generate(key: number): string {
	const color = colors[key % colors.length];
	const template = shapes[key % shapes.length];
	return template(color);
}
