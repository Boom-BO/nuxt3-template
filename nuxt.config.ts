import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export default defineNuxtConfig({
	app: {
		head: {
			title: 'Nuxt3 官网快速开发模板',
			meta: [
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{
					hid: 'description',
					name: 'description',
					content: 'Nuxt3 官网快速开发模板'
				}
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
		}
	},
	css: ['@/assets/styles/index.scss'],
	postcss: {
		plugins: {
			tailwindcss: {}
		}
	},
	typescript: {
		strict: true,
		shim: false
	},
	vite: {
		plugins: [
			createSvgIconsPlugin({
				iconDirs: [path.resolve(process.cwd(), 'assets/svg')]
			})
		],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/styles/export.scss" as *;'
				}
			}
		}
	},
	// build modules
	modules: [
		'@vueuse/nuxt',
		'@pinia/nuxt',
		'@nuxtjs/i18n',
		'nuxt-swiper',
		'nuxt-lodash'
	],
	i18n: {
		vueI18n: './i18n/index.ts'
	},
	// runtimeConfig: {
	// 	// The private keys which are only available server-side
	// 	// apiSecret: '123',
	// 	// Keys within public are also exposed client-side
	// 	public: {
	// 		apiBase: '/api'
	// 	}
	// },
	plugins: ['~/plugins/pinia-plugin-persist.client']
})
