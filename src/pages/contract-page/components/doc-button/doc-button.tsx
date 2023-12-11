import { type FC } from 'react'
import cn from 'classnames'

import styles from './index.module.scss'
import { Button } from 'src/UI/Button/button'
import { ContractsInteraction, DocStatus } from 'src/helpers/consts'

type ContractButtonProps = {
	contractStatus: DocStatus | undefined
}

export const DocButton: FC<ContractButtonProps> = ({ contractStatus }) => {
	switch (contractStatus) {
		case DocStatus.NoContractSigned:
			return (
				<Button className={cn(styles.docButton, styles.docButtonGreen)}>
					{ContractsInteraction.ContractSign}
				</Button>
			)

		case DocStatus.ContractSigned:
			return (
				<div className={styles.buttonsContainer}>
					<Button className={cn(styles.docButton, styles.docButtonBlue)}>
						{ContractsInteraction.AdditionalAgreement}
					</Button>
					<Button className={cn(styles.docButton, styles.docButtonRed)}>
						{ContractsInteraction.ContractTerminate}
					</Button>
				</div>
			)

		default:
			return (
				<Button className={cn(styles.docButton, styles.docButtonGreen)}>
					{ContractsInteraction.ContractRequest}
				</Button>
			)
	}
}
