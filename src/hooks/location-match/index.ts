import { matchRoutes, useLocation } from 'react-router-dom'

export const useLocationMatch = (pathArr: string[]) => {
	const location = useLocation()
	const resultMatchArr = pathArr.map((el) => ({ path: el }))
	return matchRoutes(resultMatchArr, location)
}
