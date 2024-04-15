<template>
	<v-main class="centerdiv">
		<v-container fluid>
			<div>
				<h1 class="text-center text-xl">{{ $generalStore.counter }}</h1>
				<v-btn color="red" size="x-large" @click="$generalStore.increment"
					>Incrementar</v-btn
				>
			</div>
		</v-container>
	</v-main>
	<!-- <Icon name="material-symbols:menu" size="40" color="black" /> -->
</template>

<script setup>
	const { $generalStore } = useNuxtApp()
	useHead({
		title: 'Template',
	})
</script>
