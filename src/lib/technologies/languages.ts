import { make_section, make_technology } from './types';

export const typescript = make_technology('TypeScript', {
	icon: 'typescript',
	href: 'https://www.typescriptlang.org/',
	bg: [49, 120, 198, 0.15],
});

export const javascript = make_technology('JavaScript', {
	icon: 'javascript',
	href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
	bg: [247, 223, 30, 0.2],
});

const rust = make_technology('Rust', {
	icon: 'rust',
	href: 'https://www.rust-lang.org/',
	bg: [0, 0, 0, 0.1],
	invert_type: 'invert-both',
});

const swift = make_technology('Swift', {
	icon: 'swift',
	href: 'https://swift.org/',
	bg: [255, 165, 0, 0.15],
});

const dart = make_technology('Dart', {
	icon: 'dart',
	href: 'https://dart.dev/',
	bg: [47, 183, 246, 0.2],
});

const bash = make_technology('Bash', {
	icon: 'bash',
	href: 'https://www.gnu.org/software/bash/',
	bg: [0, 0, 0, 0.15],
	invert_type: 'invert-bg',
});

export default make_section('Languages', [typescript, javascript, rust, swift, dart, bash]);
