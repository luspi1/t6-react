import { type FC } from 'react'
import { DocStatus } from 'src/helpers/consts'

import { DocButton } from 'src/pages/contract-page/components/doc-button/doc-button'

import { formatToCurrencyWithSymbol } from 'src/helpers/utils'
import { DocUpload } from 'src/pages/contract-page/components/contract/components/doc-upload/doc-upload'

import cn from 'classnames'
import cnBind from 'classnames/bind'
import styles from './index.module.scss'

type DocItemProps = {
	docData: {
		name: string
		date: string
		status: DocStatus
		cost?: string
		files: File[]
		id: string
	} | null
}

export const DocItem: FC<DocItemProps> = ({ docData }) => {
	const cx = cnBind.bind(styles)

	return (
		<li className={styles.contractWrapper}>
			{!docData ? (
				<div className={styles.contractNameWrapper}>
					<p className={cn(styles.contractName, styles.noContract)}>Необходимо создать Договор</p>
					<p className={styles.contractStatus}>договор не создан</p>
				</div>
			) : (
				<div className={styles.contractNameWrapper}>
					<p className={styles.contractName}>
						{docData?.name} от {docData?.date}
					</p>
					<p
						className={cx(styles.contractStatus, {
							contractStatusGreen:
								docData?.status === DocStatus.ContractSigned ||
								docData?.status === DocStatus.ActSigned,
						})}
					>
						{docData?.status}
					</p>
				</div>
			)}

			<DocUpload docFiles={docData?.files ?? []} contractId={docData?.id ?? 'new'} />

			{docData?.cost ? (
				<p className={styles.cost}>{formatToCurrencyWithSymbol(Number(docData?.cost))}</p>
			) : (
				<DocButton contractStatus={docData?.status} />
			)}
		</li>
	)
}
