import { type FC } from 'react'

import { type Contract } from 'src/types/user'

import { ContractItem } from 'src/pages/contract-page/components/contract/contract'

import styles from './index.module.scss'

type ContractsListProps = {
	contracts?: Contract[]
}
export const ContractsList: FC<ContractsListProps> = ({ contracts }) => {
	return (
		<ul className={styles.contractsList}>
			{contracts?.map((contract) => (
				<ContractItem key={contract.id} contractData={contract} type={contract.type} />
			))}

			{contracts && contracts[0].type === 'contract' && <ContractItem type='not-created' />}
		</ul>
	)
}
