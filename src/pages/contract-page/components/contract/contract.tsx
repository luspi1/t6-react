import { type FC } from 'react'

import { ContractStatus } from 'src/helpers/consts'
import { ContractButton } from 'src/pages/contract-page/components/contract-button/contract-button'

import { formatToCurrencyWithSymbol } from 'src/helpers/utils'

import cn from 'classnames'
import cnBind from 'classnames/bind'
import styles from './index.module.scss'
import { DocUpload } from 'src/pages/contract-page/components/contract/components/doc-upload/doc-upload'

type ContractData = {
	name: string
	date: string
	status: ContractStatus
	cost?: string
	files: File[]
	id: string
}

type ContractItemProps = {
	documentsListType: 'payments' | 'contracts' | 'not-created'
	contractData: ContractData | null
}

export const ContractItem: FC<ContractItemProps> = ({ contractData, documentsListType }) => {
	const cx = cnBind.bind(styles)

	return (
		<li className={styles.contractWrapper}>
			{documentsListType === 'not-created' ? (
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

			{/* <div> */}
			{/* 	<AddFile */}
			{/* 		inputName={`${contractData?.name} contract file`} */}
			{/* 		documentsListType={documentsListType} */}
			{/* 		documentsCount={2} */}
			{/* 		currentFiles={contractData?.files} */}
			{/* 		contractId={contractData?.id ?? '0'} */}
			{/* 	/> */}
			{/* </div> */}

			<DocUpload docFiles={contractData?.files ?? []} />

			{documentsListType === 'contracts' || documentsListType === 'not-created' ? (
				<ContractButton contractStatus={contractData?.status} />
			) : (
				<p className={styles.cost}>{formatToCurrencyWithSymbol(Number(contractData?.cost))}</p>
			)}
		</li>
	)
}
