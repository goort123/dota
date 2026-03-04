import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['react', 'react-dom', '@apollo/client', 'graphql', 'rxjs']
				}
			}
		}
	},
	preview: {
		allowedHosts: ['xq80fd-45-80-68-73.ru.tuna.am']
	}
})
