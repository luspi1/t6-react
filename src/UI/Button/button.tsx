import { type FC, type PropsWithChildren } from 'react'

export type ButtonProps = PropsWithChildren<{
	className?: string
}> &
	React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
	return (
		<button {...props} className={className}>
			{children}
		</button>
	)
}
