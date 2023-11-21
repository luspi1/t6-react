export const getCurrentPath = (pathname: string) => {
	return pathname.split('/').pop()
}
