import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],

	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	build: {
		rollupOptions: {
			external: ['graphql'],
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return id
							.toString()
							.split('node_modules/')[1]
							.split('/')[0]
							.toString()
					}
				}
			}
		}
	},
	preview: {
		allowedHosts: ['xq80fd-45-80-68-73.ru.tuna.am']
	}
})
