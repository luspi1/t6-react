import { type FC } from 'react'
import cn from 'classnames'

import styles from './index.module.scss'
import { Button } from 'src/UI/Button/button'
import { ContractStatus, ContractsInteraction } from 'src/helpers/consts'

type ContractButtonProps = {
	contractStatus: string | undefined
}

export const ContractButton: FC<ContractButtonProps> = ({ contractStatus }) => {
	switch (contractStatus) {
		case ContractStatus.NoContractSigned:
			return (
				<Button className={cn(styles.contractButton, styles.contractButtonGreen)}>
					{ContractsInteraction.ContractSign}
				</Button>
			)

		case ContractStatus.ContractSigned:
			return (
				<div className={styles.buttonsContainer}>
					<Button className={cn(styles.contractButton, styles.contractButtonBlue)}>
						{ContractsInteraction.AdditionalAgreement}
					</Button>
					<Button className={cn(styles.contractButton, styles.contractButtonRed)}>
						{ContractsInteraction.ContractTerminate}
					</Button>
				</div>
			)

		default:
			return (
				<Button className={cn(styles.contractButton, styles.contractButtonGreen)}>
					{ContractsInteraction.ContractRequest}
				</Button>
			)
	}
}
