export default defineNuxtRouteMiddleware((to, from) => {
	if (to.path === '/') {
		// const locale = useCookie('i18n_redirected')
		// if (locale.value === 'cn') {
		return navigateTo('/dashboard')
		// } else {
		// 	if (locale.value) return navigateTo(`/${locale.value}/dashboard`)
		// 	else return navigateTo('/dashboard')
		// }
	}
	return
})
