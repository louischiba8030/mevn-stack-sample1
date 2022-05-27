import { User } from '../../models/user'

export const all = async () => User.find({})

export const byId = async (id) => User.findById(id)
