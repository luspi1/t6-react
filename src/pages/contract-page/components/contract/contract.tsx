import { type FC, useState } from 'react'

import { AddFile } from 'src/components/add-file/add-file'
import { ContractStatus } from 'src/helpers/consts'
import { ContractButton } from 'src/pages/contract-page/components/contract-button/contract-button'

import cn from 'classnames'
import cnBind from 'classnames/bind'
import styles from './index.module.scss'

type ContractItemProps = {
	type: 'payment' | 'contract' | 'not-created'
	contractData?: {
		name: string
		date: string
		status: ContractStatus
		cost?: string
	}
}

export const ContractItem: FC<ContractItemProps> = ({ contractData, type }) => {
	const [downloadedContracts, setDownloadedContracts] = useState<any>([])
	console.log(`downloadedContracts: ${downloadedContracts}`)

	const cx = cnBind.bind(styles)

	return (
		<li className={styles.contractWrapper}>
			{type === 'not-created' ? (
				<div className={styles.contractNameWrapper}>
					<p className={cn(styles.contractName, styles.noContract)}>Необходимо создать Договор</p>
					<p className={styles.contractStatus}>договор не создан</p>
				</div>
			) : (
				<div className={styles.contractNameWrapper}>
					<p className={styles.contractName}>
						{contractData?.name} от {contractData?.date}
					</p>
					<p
						className={cx(styles.contractStatus, {
							contractStatusGreen:
								contractData?.status === ContractStatus.ContractSigned ||
								contractData?.status === ContractStatus.ActSigned,
						})}
					>
						{contractData?.status}
					</p>
				</div>
			)}

			<AddFile
				inputName={`${contractData?.name} contract file`}
				downloadFile={() => {
					setDownloadedContracts([1, 2])
				}}
			/>
			{type === 'contract' ? (
				<ContractButton contractStatus={contractData?.status} />
			) : (
				<p className={styles.cost}>{contractData?.cost}</p>
			)}
		</li>
	)
}
