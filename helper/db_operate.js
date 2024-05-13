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

async function getUserById(userId) {
	try {
		const user = await User.findById(userId);
		return user;
	} catch (error) {
		console.error(error);
		throw new Error('Failed to get user');
	}
}

async function updateUser(userId, userData) {
	try {
		const updateUser = await User.findByIdAndUpdate(userId, userData, { new: true });
		return updatedUser;
	} catch (error) {
		console.error(error);
		throw new Error('Failed to update user');
	}
}

async function deleteUser(userId) {
	try {
		await User.findByIdAndDelete(userId);
		return true;
	} catch (error) {
		console.error(error);
		throw new Error('Failed to delete user');
	}
}

module.exports = {
	createUser,
	getUserById,
	updateUser,
	deleteUser
};
