import { users } from '../mockData/users.mjs'

export const getUserById = (req, res) => {
	const userId = req.params.id;
	const foundUser= users.find(user => user.id === userId);
	res.status(200).json(foundUser)
}
