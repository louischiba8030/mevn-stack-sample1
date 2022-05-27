import * as getUserService from '../services/user/get'
import * as putUserService from '../services/user/put'
import * as postUserService from '../services/user/post'
import * as deleteUserService from '../services/user/delete'

export const fetchUsers = async (req, res) => {
	try {
		res.status(200).json((await getUserService.all()))
	} catch (e) {
		res.status(500).json(e)
	}
}

export const fetchUserbyId = async (req, res) => {
	try {
		res.status(200).json((await getUserService.byId(req.params.id)))
	} catch (e) {
		res.status(500).json(e)
	}
}

export const createUser = async (req, res) => {
	try {
		const {
			name,
			email,
			age,
			password
		} = req.body
		console.log("req.body.name", req.body.name)
		const newUser = await postUserService.create({
			name,
			email,
			age,
			password
		})
		console.log(newUser)
		res.status(201).json(newUser)
	} catch (e) {
		console.error(e)
		res.status(500).json(e)
	}
}

export const updateUser = async (req, res) => {
	try {
		const {
			name,
			email,
			age,
			password
		} = req.body
		console.log("req.body: ", req.body)
		res.status(200).json((await putUserService.byId(req.params.id, {
			name,
			email,
			age,
			password
		})))
	} catch (e) {
		res.status(500).json(e)
	}
}

export const deleteUser = async (req, res) => {
	try {
		const {
			name,
			email,
			age,
			password
		} = req.body
		res.status(200).json((await deleteUserService.byId(req.params.id)))
	} catch (e) {
		res.status(500).json(e)
	}
}
