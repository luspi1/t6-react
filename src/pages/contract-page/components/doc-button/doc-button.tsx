import { type FC } from 'react'
import cn from 'classnames'

import styles from './index.module.scss'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { ContractsInteraction, DocStatus } from 'src/helpers/consts'

type ContractButtonProps = {
	contractStatus: DocStatus | undefined
}

export const DocButton: FC<ContractButtonProps> = ({ contractStatus }) => {
	switch (contractStatus) {
		case DocStatus.NoContractSigned:
			return (
				<MainButton className={cn(styles.docButton, styles.docButtonGreen)} as='button'>
					{ContractsInteraction.ContractSign}
				</MainButton>
			)

		case DocStatus.ContractSigned:
			return (
				<div className={styles.buttonsContainer}>
					<MainButton className={cn(styles.docButton, styles.docButtonBlue)} as='button'>
						{ContractsInteraction.AdditionalAgreement}
					</MainButton>
					<MainButton className={cn(styles.docButton, styles.docButtonRed)} as='button'>
						{ContractsInteraction.ContractTerminate}
					</MainButton>
				</div>
			)

		default:
			return (
				<MainButton className={cn(styles.docButton, styles.docButtonGreen)} as='button'>
					{ContractsInteraction.ContractRequest}
				</MainButton>
			)
	}
}
