import { defineStore } from 'pinia'
export const useGlobalStore = defineStore('global', {
	state: () => {
		const func = () => {
			const urlLocale = useRoute().fullPath.split('/')[1]
			if (urlLocale === 'en') {
				const { $i18n } = useNuxtApp()
				$i18n.setLocale(urlLocale)
				const locale = useCookie('locale', {
					maxAge: 3600 * 3600
				})
				locale.value = urlLocale
				return urlLocale
			} else {
				const { $i18n } = useNuxtApp()
				$i18n.setLocale('cn')
				const locale = useCookie('locale', {
					maxAge: 3600 * 3600
				})
				locale.value = 'cn'
				return 'cn'
			}
		}
		return {
			localeState: func() || useCookie('locale').value || 'cn',
			documentReadyState: true
		} as {
			localeState: 'cn' | 'en'
			documentReadyState: boolean
		}
	},
	actions: {
		setLocale(newLocale: 'cn' | 'en') {
			const { $i18n } = useNuxtApp()
			$i18n.setLocale(newLocale)
			const locale = useCookie('locale', {
				maxAge: 3600 * 3600
			})
			locale.value = newLocale
			this.localeState = newLocale
		}
	}
})
