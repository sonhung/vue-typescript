<template>
	<div>
		<h1>login page ne</h1>
		<input v-model="user.name"/>
		<input v-model="user.password"/>
		<button @click="submitLogin">Login</button>

	</div>
</template>

<script src="./index.ts" lang="ts"></script>