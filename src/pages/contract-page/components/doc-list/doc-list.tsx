import { type FC } from 'react'

import styles from './index.module.scss'
import { DocItem } from 'src/pages/contract-page/components/contract/doc-item'
import { type DocPact } from 'src/types/docs'

type ContractsListProps = {
	contracts: DocPact[]
}
export const DocList: FC<ContractsListProps> = ({ contracts }) => {
	return (
		<ul className={styles.contractsList}>
			{contracts?.map((item) => <DocItem key={item.id} docData={item} />)}

			<DocItem docData={null} />
		</ul>
	)
}
