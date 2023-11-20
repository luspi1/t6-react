import { type FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from 'src/UI/Container/Container'

export const Layout: FC = () => {
	return (
		<>
			<main>
				<Container>
					<Outlet />
				</Container>
			</main>
		</>
	)
}
