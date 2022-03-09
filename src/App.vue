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
				<strong>ID: </strong> {{id}} <br>
				<b-button @click="carregar(id)" size="lg" variant="warning">Carregar</b-button>
				<b-button @click="excluir(id)" size="lg" variant="danger" class="ml-2">Excluir</b-button>
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
			id: null,
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		limpar() {
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
		},
		carregar(id) {
			this.id = id,
			this.usuario = { ...this.usuarios[id] }
		},
		excluir(id) {
			this.$http.delete(`/usuarios/${id}.json`)
				.then(() => this.limpar())
				
		},
		salvar() {
			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
				.then(() => {this.limpar()})
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
