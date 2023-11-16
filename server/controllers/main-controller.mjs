import { users } from '../mockData/users.mjs'

export const getAllTracks = (req, res) => {
	res.status(200).json(users)
}
