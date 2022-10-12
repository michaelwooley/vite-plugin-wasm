import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

const config: UserConfig = {
	build: {
		minify: false
	},
	plugins: [wasm(), topLevelAwait(), sveltekit()],
	optimizeDeps: {
		// exclude: ['@michaelwooley/my-crate']
	}
};

export default config;
