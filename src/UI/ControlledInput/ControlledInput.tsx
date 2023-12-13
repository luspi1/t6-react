import React, { type FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import cn from 'classnames'
import styles from './index.module.scss'
import InputMask from 'react-input-mask'
import { PromptSvg } from 'src/UI/icons/promptSVG'

type ControlledInputProps = {
	mask?: string
	type?: string
	className?: string
	label?: string
	promptTitle?: string
	name: string
}

export const ControlledInput: FC<ControlledInputProps> = ({
	name,
	className,
	mask,
	label,
	promptTitle,
	type,
}) => {
	const {
		register,
		formState: { errors },
	} = useFormContext()

	return (
		<div className={cn(styles.inputEl, className)}>
			<div className={styles.inputWrapper}>
				<label>{label}</label>
				<InputMask
					{...register(name)}
					mask={mask ?? ''}
					type={type ?? 'text'}
					className={cn(styles.controlledInput, {
						[styles.noValid]: errors[name],
					})}
				/>
				{promptTitle && (
					<span title={promptTitle}>
						<PromptSvg />
					</span>
				)}
			</div>
			{errors[name] && (
				<p className={styles.warningMessage}>
					<ErrorMessage errors={errors} name={name} />
				</p>
			)}
		</div>
	)
}
