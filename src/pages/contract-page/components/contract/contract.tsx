import { type FC } from 'react'
import cn from 'classnames'

import styles from './index.module.scss'
import { AddFile } from 'src/components/add-file/add-file'
import { ContractButton } from 'src/pages/contract-page/components/contract-button/contract-button'
import { CardInfo } from 'src/UI/CardInfo/CardInfo'
import { ContractStatus } from 'src/helpers/consts'

type ContractItemProps = {
	type: 'contract' | 'payment'
	contractData?: {
		name: string
		date: string
		status: ContractStatus
		cost?: string
	}
}

export const ContractItem: FC<ContractItemProps> = ({ type, contractData }) => {
	return (
		<CardInfo className={styles.contractWrapper}>
			{contractData ? (
				<div className={styles.contractNameWrapper}>
					<p className={styles.contractName}>
						{contractData?.name} от {contractData?.date}
					</p>
					<p
						className={cn(
							styles.contractStatus,
							contractData.status === ContractStatus.ContractSigned ||
								contractData.status === ContractStatus.ActSigned
								? styles.contractStatusGreen
								: '',
						)}
					>
						{contractData?.status}
					</p>
				</div>
			) : (
				<div className={styles.contractNameWrapper}>
					<p className={cn(styles.contractName, styles.noContract)}>Необходимо создать Договор</p>
					<p className={styles.contractStatus}>договор не создан</p>
				</div>
			)}

			<AddFile inputName={`${contractData?.name} contract file`} />
			{type === 'contract' ? (
				<ContractButton contractStatus={contractData?.status} />
			) : (
				<p className={styles.cost}>{contractData?.cost}</p>
			)}
		</CardInfo>
	)
}
