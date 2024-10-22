import { defineConfig, defaultExclude } from 'vitest/config';

export default defineConfig({
	test: {
		globals: false,
		passWithNoTests: true, // not recommended but enabled for workshop purposes
		coverage: {
			reporter: ['lcov', 'html'],
			reportOnFailure: true,
			include: [`exercises/**/*.ts`],
			exclude: [...defaultExclude],
		},
	},
});
