<!-- 首页 -->
<template>
	<NuxtLayout>
		<Transition name="page" mode="out-in">
			<div :key="$route.path" class="w-full h-full">
				<NuxtPage />
			</div>
		</Transition>
	</NuxtLayout>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.title {
	color: $themeColor;
}

.page-enter-active,
.page-leave-active {
	transition: all 0.4s ease;
}

.page-enter-from,
.page-leave-to {
	filter: blur(1rem) brightness(0);
}
</style>
