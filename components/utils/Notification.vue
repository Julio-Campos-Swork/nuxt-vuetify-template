<template>
	<v-snackbar
		v-model="$generalStore.notificationAttrs.isOpen"
		location="top"
		:color="$generalStore.notificationAttrs.color"
		timeout="6000"
		max-width="350"
	>
		<div class="d-flex justify-space-between">
			{{ $generalStore.notificationAttrs.message }}
			<div class="align-self-center p-2">
				<v-icon
					size="small"
					icon="mdi-close"
					@click="$generalStore.notificationAttrs.isOpen = false"
				/>
			</div>
		</div>
	</v-snackbar>
</template>

<script setup>
	const { $generalStore } = useNuxtApp()
</script>
