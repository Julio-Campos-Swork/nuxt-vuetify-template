<template>
	<v-app>
		<!-- <LayoutNavBar /> -->
		<ClientOnly>
			<LazyLayoutNavBar />
		</ClientOnly>

		<slot />
		<UtilsNotification />
		<LazyLayoutFooter />
	</v-app>
</template>

<script setup></script>

<style>
	* {
		position: relative;
		box-sizing: border-box;
		min-width: 0;
	}
	html {
		min-height: 100dvb;
	}

	.centerdiv {
		margin: 0 auto;
		align-content: center;
	}
</style>
