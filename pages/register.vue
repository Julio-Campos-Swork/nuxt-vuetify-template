<template>
	<v-main class="centerdiv">
		<v-card elevation="24" max-width="1000" min-width="620">
			<v-card-title class="text-center bg-indigo">Registrar</v-card-title>
			<v-card-text class="mt-6">
				<v-text-field
					v-model="registerData.name"
					label="Nombre"
					:rules="userRules"
					variant="solo-filled"
					class="py-2"
				/>
				<v-text-field
					v-model="registerData.email"
					label="Email/Usuario"
					type="email"
					:rules="emailRules"
					variant="solo-filled"
					class="py-2"
				/>
				<v-text-field
					v-model="registerData.password"
					label="Contraseña"
					type="password"
					variant="solo-filled"
					class="py-2"
					:rules="passRules"
					border
					@keypress.enter="handleRegister()"
				/>

				<div class="d-flex justify-center">
					<v-btn class="bg-green" rounded="lg" @click="handleRegister()">Registrar</v-btn>
				</div>
			</v-card-text>
		</v-card>
	</v-main>
</template>

<script setup>
	const registerData = reactive({
		username: null,
		email: null,
		password: null,
	})
	const userRules = [
		(v) => !!v || 'Usuario requerido',
		(v) => (v && v.length > 4) || 'Usuario invalido',
	]
	const passRules = [
		(v) => !!v || 'Contraseña requerida',
		(v) => (v && v.length >= 6) || 'La contraseña debe ser minimo 6 caracteres',
	]

	const emailRules = [
		(v) => !!v || 'Correo requerido',
		(v) =>
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				v
			) || 'Ingresa correo válido',
	]

	async function handleRegister() {}
</script>
