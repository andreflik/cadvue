<template>
	<div id="app" class="container">
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe um nome"></b-form-input>
			</b-form-group>
			<b-form-group label="Email:">
				<b-form-input type="email" size="lg" v-model="usuario.email" placeholder="Informe um email"></b-form-input>
			</b-form-group>
			<b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
		</b-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		salvar() {
			console.log(this.usuario)
		}
	}
	// created() {
	// 	this.$http.post('usuarios.json', {
	// 		nome: 'Andre',
	// 		email: 'andreflik@gmail.com'
	// 	}).then(res => console.log(res))
	// }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
