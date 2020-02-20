import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

const marginMixin = ({ m }) =>
	m &&
	(m instanceof Array
		? `margin: ${m.map(num => `${num / 10}rem`).join(' ')}`
		: `margin: ${m / 10}rem`)

const paddingMixin = ({ p }) =>
	p &&
	(p instanceof Array
		? `padding: ${p.map(num => `${num / 10}rem`).join(' ')}`
		: `padding: ${p / 10}rem`)

export const Row = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    position:relative;
    ${({ alignCenter }) => alignCenter && `align-items: center;`}

    ${({ noWrap }) => noWrap && `flex-wrap: nowrap;`}

    ${({ alignStart }) => alignStart && `align-items: start;`}

    ${({ justifyCenter }) => justifyCenter && `justify-content: center;`}

    ${({ justifyBetween }) => justifyBetween && `justify-content: space-between;`}

    ${({ justifyEvenly }) => justifyEvenly && `justify-content: space-evenly;`}

    ${({ justifyEnd }) => justifyEnd && `justify-content: flex-end;`}

    ${({ grow }) => grow && `flex-grow:1;`}

    ${({ basis }) => basis && `flex-basis:${basis};`}

    ${({ justifyStart }) => justifyStart && `justify-content: flex-start;`}

    ${({ rowReverse }) => rowReverse && `flex-direction: row-reverse;`}

    ${({ noWrap }) => noWrap && `flex-wrap: nowrap;`}

    ${({ column }) => column && `flex-direction: column;`}

    ${({ width }) =>
			width >= 0 &&
			width <= 100 &&
			`
     width: ${width}%;
    `}
    ${marginMixin};
    ${paddingMixin};
`

export const ToggleButton = styled(ReactSVG)`
	cursor: pointer;
	margin-right: 10px;
	margin-left: 10px;
	& div {
		height: 24px;
	}
`

export const MainWrapper = styled.div`
	height:100vh;
	display:flex;
	align-items:center;
	justify-content-center;
	flex-direction:column;
`

export const Container = styled.div`
	padding: 30px;
	// max-width: 576px;
	// margin: auto;
	width: 100%;
	@media (min-width: 0) {
		width: 100%;
	}
	@media (min-width: 575.99px) {
		width: 576px;
	}
	background-color: aliceblue;
	height: auto;
	min-height: 40vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
`
export const NewTrackerInput = styled.input`
	border-radius: 30px;
	border: 1px solid gray;
	height: 40px;
	width: 100%;
	// @media (max-width: 575.98px) {
	// 	max-width: 200px;
	// }
	padding: 0 20px;
	font-size: 18px;
`
export const NewTrackerButton = styled.div`
	position: absolute;
	right: 0px;
	top: calc(50% - 20px);
	border-radius: 50%;
	background-color: #3faf6c;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	width: 40px;
	cursor: pointer;
	svg path:not([fill]) {
		fill: #ffffff;
	}
`

export const TimeString = styled.span`
	font-weight: 500;
	padding: 0 16px;
	font-size: 20px;
	transition: all 0.3s ease-in-out;

	@media (max-width: 575.98px) {
		max-width: 50%;
	}
	${({ ellipsis }) =>
		ellipsis &&
		` max-width:60%;white-space:nowrap;
    overflow:hidden;
	text-overflow:ellipsis;`}
	${({ isTurnedOn }) => isTurnedOn && `color:#3faf6c !important;`}
`
export const DeleteButton = styled(ReactSVG)`
	svg path:not([fill='none']) {
		fill: #ec6365;
	}
	cursor: pointer;
	& div {
		height: 24px;
	}
`
export const RowTrackerWrapper = styled(Row)`
	border-top: 1px solid #d3d3d3;
	&:last-child {
		border-bottom: 1px solid #d3d3d3;
	}
	transition: all 0.3s ease-in-out;
	${({ isTurnedOn }) => isTurnedOn && `background:#f0f0f0;`}
`
export const Logo = styled.h1`
	padding-top:100px;
	font-size:50px;
`
