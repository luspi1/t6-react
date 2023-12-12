import React, { type FC, type ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import cn from 'classnames'
import styles from './index.module.scss'
import InputMask from 'react-input-mask'

type customControlledFieldProps = {
	mask?: string
	svg?: ReactNode
	type?: string
	className?: string
	name: string
}

export const ModalControlledField: FC<customControlledFieldProps> = ({
	name,
	className,
	svg,
	mask,
	type,
}) => {
	const {
		register,
		formState: { errors },
	} = useFormContext()

	const renderInput = (inputProps: React.InputHTMLAttributes<HTMLInputElement>): ReactNode => {
		return <input {...inputProps} />
	}

	return (
		<div className={styles.fieldEl}>
			<div className={styles.fieldWrapper}>
				{svg}
				<InputMask
					{...register(name)}
					mask={mask ?? ''}
					className={cn(styles.controlledField, className, {
						[styles.isSvg]: svg,
					})}
				>
					{renderInput}
				</InputMask>
			</div>
			{errors[name] && (
				<p className={styles.warningMessage}>
					<ErrorMessage errors={errors} name={name} />
				</p>
			)}
		</div>
	)
}
