<template>
	<v-app-bar color="indigo-accent-2" elevation="0">
		<v-app-bar-nav-icon @click="drawer = !drawer"/>
		<v-spacer />
		<NuxtLink to="/">
			<v-app-bar-title class="text-center mr-16 pr-8 text-sm-caption text-md-h6"
				>Nombre de la APP</v-app-bar-title
			>
		</NuxtLink>
		<v-spacer />
		<p class="text-sm-caption">Tema</p>
		<v-btn
			:color="bText == 'Light' ? 'white' : 'black'"
			size="large"
			icon="mdi-theme-light-dark"
			@click="toggleTheme"
		/>
	</v-app-bar>
	<v-navigation-drawer
		v-model="drawer"
		class="bg-indigo-accent-2 z-1"
		disable-resize-watcher
	>
		<p class="text-center text-sm-caption text-md-h5 mt-2">Menu</p>

		<v-list color="transparent" class="mt-4">
			<NuxtLink v-for="(link, index) in navLinks" :key="index" :to="link.linkTo"
				><v-list-item
					v-if="link.isVisible"
					:prepend-icon="link.prependIcon"
					class="text-sm-body-1 text-md-subtitle-1"
					@click="drawer = !drawer"
					>{{ link.listText }}
				</v-list-item></NuxtLink
			>
		</v-list>

		<p class="text-center mt-4">Version: <span class="text-orange">1</span></p>
		<template #append>
			<div class="pa-8">
				<NuxtLink to="/" @click="drawer = !drawer">
					<v-btn color="red" block> Cerrar Sesion </v-btn>
				</NuxtLink>
			</div>
		</template>
	</v-navigation-drawer>
</template>

<script setup>
	// import { ref, computed } from 'vue'
	import { useTheme } from 'vuetify'
	// import { useUserStore } from '@/stores/UserStore'
	// import { useGeneralStore } from '@/stores/GeneralStore'
	// const useGeneral = useGeneralStore()
	// const AppVersion = ref(window?.appVersion)
	// const useUser = useUserStore()
	const bText = ref('Light')
	const theme = useTheme()
	const drawer = ref(false)
	const toggleTheme = () => {
		theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
		bText.value = bText.value === 'Dark' ? 'Light' : 'Dark'
	}
	const navLinks = ref([
		{
			linkTo: '/',
			prependIcon: 'mdi-home',
			listText: 'Inicio',
			isVisible: true,
		},
		{
			linkTo: '/login',
			prependIcon: 'mdi-login',
			listText: 'Iniciar Sesión',
			isVisible: computed(() => true),
		},

		{
			linkTo: '/register',
			prependIcon: 'mdi-account-plus',
			listText: 'Registrar',
			isVisible: computed(() => true),
		},
		{
			linkTo: '/admin/panel',
			prependIcon: 'mdi-account-plus',
			listText: 'Admin Panel',
			isVisible: computed(() => true),
		},
	])

	// function updateVersion() {
	// 	useGeneral.versionisUpdate = false
	// 	location.reload()
	// }
</script>

<style scoped>
	a:link,
	a:visited,
	a:active {
		text-decoration: none;
		color: white;
	}
</style>
