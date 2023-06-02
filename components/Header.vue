<template>
	<header>
		<nav
			class="header"
			@mouseenter="headerFocus = true"
			@mouseleave="headerFocus = false"
		>
			<div class="header-content">
				<svg-icon
					class="icon-logo"
					:name="headerFocus ? 'logo' : 'logo-white'"
				></svg-icon>
				<div class="nav">
					<ul class="nav-menu clearfix">
						<li
							v-for="(item, index) in menuList"
							:key="index"
							class="nav-menu-item"
							:class="activeIndex === item.route && 'active'"
							@click="onMenuClick(index, item)"
						>
							<span class="label">{{ item.name }}</span>
							<ul v-if="item.children" class="sub-menu">
								<li
									v-for="(subItem, index) in item.children"
									:key="index"
									class="sub-menu-item"
									:class="activeIndex === item.route && 'active'"
									@click="onMenuClick(index, subItem)"
								>
									<span class="label">{{ subItem.name }}</span>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup lang="ts">
const headerFocus = ref(false)
const activeIndex = ref('/dashboard')
const menuList = reactive([
	{
		name: '首页',
		route: '/',
		children: []
	},
	{
		name: '关于我们',
		route: '/about',
		children: []
	},
	{
		name: '产品中心',
		route: '/product',
		children: [
			{
				name: '产品1',
				route: '/product/1'
			},
			{
				name: '产品2',
				route: '/product/2'
			},
			{
				name: '产品3',
				route: '/product/3'
			}
		]
	},
	{
		name: '新闻中心',
		route: '/news',
		children: [
			{
				name: '新闻1',
				route: '/news/1'
			},
			{
				name: '新闻2',
				route: '/news/2'
			},
			{
				name: '新闻3',
				route: '/news/3'
			}
		]
	},
	{
		name: '联系我们',
		route: '/contact',
		children: []
	}
])
const onMenuClick = (index: string | number, { route: string }: any) => {
	activeIndex.value = string
}
</script>
<style lang="scss" scoped>
.header {
	position: fixed;
	left: 0;
	top: 0;
	height: 70px;
	width: 100%;
	box-sizing: border-box;
	z-index: 99;
	transition: all 0.5s;

	&:hover {
		background-color: #fff;
		.nav {
			// 字体变为黑色
			.nav-menu {
				.nav-menu-item {
					color: #000;
					&:hover {
						& > .sub-menu {
							max-height: 300px;
						}

						&::before {
							width: 100%;
						}
					}

					&.active {
						&::before {
							width: 100%;
						}
					}
				}
			}
		}
	}

	&-content {
		width: 100%;
		padding: 0 70px;
		.icon-logo {
			float: left;
			width: 210px;
			height: 70px;
		}
		.nav {
			// 优化下面的代码
			float: right;
			.nav-menu {
				float: left;
				.nav-menu-item {
					float: left;
					position: relative;
					height: 70px;
					line-height: 70px;
					padding: 0 20px;
					font-size: 16px;
					color: #fff;
					cursor: pointer;
					transition: all 0.5s;

					&::before {
						content: '';
						position: absolute;
						left: 50%;
						bottom: 0;
						width: 0;
						height: 4px;
						background: #001eb4;
						transform: translate(-50%);
						transition: all 0.36s;
					}

					&:hover {
						// background-color: rgba(255, 255, 255, 0.1);
						& > .label {
							color: #001eb4;
						}
					}
					&.active {
						background-color: rgba(255, 255, 255, 0.1);
					}
					.sub-menu {
						position: absolute;
						left: 0;
						top: 70px;
						width: 100%;
						max-height: 0;
						overflow: hidden;
						transition: max-height 0.5s;
						background-color: rgba(255, 255, 255, 1);
						.sub-menu-item {
							position: relative;
							height: 50px;
							line-height: 50px;
							padding: 0 20px;
							font-size: 16px;
							color: #000;
							text-align: center;
							cursor: pointer;
							transition: all 0.5s;
							&:hover {
								color: #001eb4;
							}
							&.active {
								color: #001eb4;
							}
						}
					}
				}
			}
		}
	}
}
@media screen and (max-width: 1680px) {
	.header-content {
		width: 93.705%;
		margin: 0 auto;
		padding: 0 20px;
	}
}
</style>
