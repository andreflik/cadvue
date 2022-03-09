<template>
	<div id="app" class="container">
		<h1>Cadastro de Contatos</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe um nome"></b-form-input>
			</b-form-group>
			<b-form-group label="Email:">
				<b-form-input type="email" size="lg" v-model="usuario.email" placeholder="Informe um email"></b-form-input>
			</b-form-group>
			<b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
			<b-button @click.prevent="obterUsuario" size="lg" variant="success" class="ml-2">Lista de Contatos</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome: </strong> {{usuario.nome}} <br>
				<strong>E-mail: </strong> {{usuario.email}} <br>
				<strong>ID: </strong> {{usuario.id}}
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
// import axios from 'axios'
export default {
	
	data() {
		return {
			usuarios: [],
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		salvar() {
			// Axios Local - POST
			// axios('https://cadvue-default-rtdb.firebaseio.com/usuarios.json', this.usuario)


			this.$http.post('usuarios.json', this.usuario)
				.then( () => {
					this.usuario.nome = ''
					this.usuario.email = ''
				})
		},
		
		obterUsuario() {
			this.$http.get('usuarios.json').then(res => {
				this.usuarios = res.data

				// Axios Local - GET
			// axios('https://cadvue-default-rtdb.firebaseio.com/usuarios.json').then(res => {
			// 	this.usuarios = res.data
				
			})
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
