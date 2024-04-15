<template>
	<v-main>
		<v-container fluid>
			<v-text-field v-model="text"/>
			<v-btn color="red" @click="notifi()">Boton notificacion</v-btn>
		</v-container>
	</v-main>
</template>

<script setup>
	useHead({
		title: 'Admin Panel',
	})
	const text = ref('')
	const { $generalStore } = useNuxtApp()

	function notifi() {
		$generalStore.showNotification(text.value, 'green')
	}
</script>

<style lang="scss" scoped></style>
