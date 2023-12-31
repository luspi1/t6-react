import React, { type FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import cn from 'classnames'
import styles from './index.module.scss'
import InputMask from 'react-input-mask'
import { PromptSvg } from 'src/UI/icons/promptSVG'

type ControlledInputProps = {
	mask?: string
	className?: string
	label?: string
	promptTitle?: string
	name: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const ControlledInput: FC<ControlledInputProps> = ({
	name,
	className,
	mask,
	label,
	promptTitle,
	...props
}) => {
	const {
		register,
		formState: { errors },
	} = useFormContext()

	return (
		<div className={cn(styles.inputEl, className)}>
			<label className={styles.inputWrapper}>
				{label && <p>{label}</p>}
				<InputMask
					{...register(name)}
					{...props}
					mask={mask ?? ''}
					className={cn(styles.controlledInput, {
						[styles.noValid]: errors[name],
					})}
				/>
				{promptTitle && (
					<span title={promptTitle}>
						<PromptSvg />
					</span>
				)}
			</label>
			{errors[name] && (
				<p className={styles.warningMessage}>
					<ErrorMessage errors={errors} name={name} />
				</p>
			)}
		</div>
	)
}
