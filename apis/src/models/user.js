import mongoose from "mongoose";

// mytests = collection name
export const User = mongoose.model('mytest', new mongoose.Schema({
	name: String,
	email: String,
	age: Number,
	password: String
}))