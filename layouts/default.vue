<template>
	<div class="body" :key="$route.fullPath">
		<ClientOnly class="flex-shrink-0">
			<Header />
		</ClientOnly>
		<div class="context flex items-center justify-center">
			<slot></slot>
		</div>
		<div class="footer">
			<Footer />
		</div>
	</div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
@media screen and (min-width: 320px) {
	.body {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		min-width: 320px;
		overflow: hidden;
	}
}
@media screen and (min-width: 1024px) {
	.body {
		min-width: 1024px;
	}
}
</style>
