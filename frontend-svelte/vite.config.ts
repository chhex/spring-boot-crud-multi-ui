import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	const BACKEND_URL = env.VITE_BACKEND_URL || 'http://localhost:8080';

	return {
		plugins: [sveltekit(), tailwindcss()],
		server: {
			port: 5174,
			proxy: {
				'/api/clients': {
					target: BACKEND_URL,
					changeOrigin: true
				},
				'/api/tenantInfo': {
					target: BACKEND_URL,
					changeOrigin: true
				}
			}
		}
	};
});
