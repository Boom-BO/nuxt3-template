import cn from './locales/cn.json'
import en from './locales/en.json'
const message = { cn, en }
export default defineI18nConfig(nuxt => {
	return {
		legacy: false,
		globalInjection: true,
		locale: 'cn',
		warnHtmlMessage: false,
		messages: message
	}
})
