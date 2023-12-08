import { type FC } from 'react'

import { ContractItem } from 'src/pages/contract-page/components/contract/contract'

import styles from './index.module.scss'
import { type Contract } from 'src/types/contracts'

type ContractsListProps = {
	contracts: Contract[]
	documentsType: 'contracts' | 'payments'
}
export const ContractsList: FC<ContractsListProps> = ({ contracts, documentsType }) => {
	return (
		<ul className={styles.contractsList}>
			{contracts?.map((contract) => (
				<ContractItem key={contract.id} contractData={contract} documentsListType={documentsType} />
			))}

			{contracts && documentsType === 'contracts' && (
				<ContractItem documentsListType='not-created' contractData={null} />
			)}
		</ul>
	)
}
