const User = require('./models');

async function createUser(userData) {
	try {
		const newUser = new User(userData);
		await newUSer.save();
		return newUser;
	} catch (error) {
		console.error(error);
		throw new Error('Failed to create user');
	}
}
