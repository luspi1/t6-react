import { type FC } from 'react'
import cn from 'classnames'

import styles from './index.module.scss'
import { AddFile } from 'src/UI/add-file/add-file'
import { ContractButton } from 'src/pages/contract-page/components/contract-button/contract-button'
import { CardInfo } from 'src/UI/CardInfo/CardInfo'
import { ContractStatus } from 'src/helpers/consts'

type ContractItemProps = {
	type: 'contract' | 'payment'
	contractData?: {
		name: string
		date: string
		status: string
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

			<AddFile />
			{type === 'contract' ? (
				<ContractButton contractStatus={contractData?.status} />
			) : (
				<p className={styles.cost}>20 000</p>
			)}
		</CardInfo>
	)
}
