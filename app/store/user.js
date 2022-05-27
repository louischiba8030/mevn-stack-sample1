export const state = () => ({
	id: "",
	name: "",
	email: "",
	age: "",
	password: ""
})

export const mutations = {
	setId: (state, data) => {
		state.id = data
	},
	setName: (state, data) => {
		state.name = data
	},
	setEmail: (state, data) => {
		state.email = data
	},
	setAge: (state, data) => {
		state.age = data
	},
	setPassword: (state, data) => {
		state.password = data
	}
}
