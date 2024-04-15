<template>
	<v-main class="centerdiv">
		<v-card elevation="24" max-width="700" min-width="420">
			<v-card-title class="text-center bg-indigo">Login</v-card-title>
			<v-card-text class="mt-6">
				<v-text-field
					v-model="loginData.username"
					label="Nombre de Usuario o Email"
					:rules="userRules"
					variant="solo-filled"
				/>
				<v-text-field
					v-model="loginData.password"
					label="Contraseña"
					type="password"
					variant="solo-filled"
					:rules="passRules"
					border
				/>
			</v-card-text>
			<v-card-actions class="mb-2">
				<v-spacer/>
				<v-btn class="bg-green" rounded="lg" @click="handleLogin()">Iniciar Sesion</v-btn>
			</v-card-actions>
		</v-card>
	</v-main>
</template>

<script setup>
	useHead({
		title: 'Login',
	})
	const loginData = reactive({
		username: null,
		password: null,
	})

	const { $userStore } = useNuxtApp()
	function handleLogin() {
		$userStore.loginUser(loginData.username, loginData.password)
	}
	const userRules = [
		(v) => !!v || 'Usuario requerido',
		(v) => (v && v.length > 4) || 'Usuario no válido',
	]
	const passRules = [
		(v) => !!v || 'Contraseña requerida',
		(v) => (v && v.length > 3) || 'Demasiado corta',
	]
</script>
