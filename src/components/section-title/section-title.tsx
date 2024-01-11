import { type FC } from 'react'
import styled from 'styled-components'

type SectionTitleProps = {
	requiredinputs?: boolean
}

const StyledSectionTitle = styled.div<{ requiredinputs?: boolean }>`
	//  padding-top: ${(props) => (props.requiredinputs ? '7px' : '')};
	padding-bottom: 15px;
	border-bottom: 1px solid #e3dddd;

	h2 {
		font-size: 20px;
		margin-bottom: 12px;
	}

	p {
		font-size: 13px;
	}

	.requiredMark {
		margin-bottom: 20px;
		color: #91969a;
	}
`

export const SectionTitle: FC<SectionTitleProps> = ({ requiredinputs }) => {
	return (
		<StyledSectionTitle>
			{requiredinputs && (
				<p className='requiredMark'>поля, отмеченные символом *, обязательны для заполнения</p>
			)}
			<h2>Атмановские Кулачки 2023</h2>
			<p>26 августа 2023 года — 28 августа 2023 года, с. Атманов Угол Тамбовской области</p>
		</StyledSectionTitle>
	)
}
