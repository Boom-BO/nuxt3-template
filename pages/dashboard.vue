<template>
	<div class="dashboard">
		<div class="banner">
			<div class="solgan">World Peace<br />世界和平 {{ $t('confirm') }}</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// import lodash from 'lodash'

const { t, locale } = useI18n()
</script>
<style lang="scss" scoped>
.dashboard {
	.banner {
		width: 100%;
		height: 0;
		padding-bottom: 48%;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		background: url('@/assets/img/dashboard/banner.jpeg') no-repeat center/cover;

		.solgan {
			position: absolute;
			top: 30%;
			left: 10%;
			color: #fff;
			font-size: 80px;
			font-weight: 700;
			text-align: left;
		}
	}
}
</style>
