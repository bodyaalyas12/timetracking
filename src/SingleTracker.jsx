import React from 'react'
import { ReactSVG } from 'react-svg'
import styled from 'styled-components'
import deleteIcon from '../static/delete-24px.svg'
import pauseIcon from '../static/pause-24px.svg'
import playIcon from '../static/play_arrow-24px.svg'
import { Row, ToggleButton } from './StyledComponents'

const TimeString = styled.span`
	font-weight: 500;
	padding: 0 16px;
	font-size: 20px;
    transition: all 0.3s ease-in-out;
    max-width:60%;
    @media (max-width: 575.98px) {
		max-width:40%;
	}
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
	${({ isTurnedOn }) => isTurnedOn && `color:#3faf6c !important;`}
`
const DeleteButton = styled(ReactSVG)`
	svg path:not([fill='none']) {
		fill: #ec6365;
	}
	cursor: pointer;
	& div {
		height: 24px;
	}
`
const RowTrackerWrapper = styled(Row)`
	border-top: 1px solid #d3d3d3;
	&:last-child {
		border-bottom: 1px solid #d3d3d3;
	}
	transition: all 0.3s ease-in-out;
	${({ isTurnedOn }) => isTurnedOn && `background:#f0f0f0;`}
`

const SingleTracker = ({ tracker, deleteClickHandler, toggleTurnOn, ...restProps }) => {
	const { trackerName, trackerTime, isTurnedOn } = tracker
	const time = new Date(trackerTime * 1000).toISOString().substr(11, 8)
	return (
		<RowTrackerWrapper width={100} p={[10, 0, 10, 0]} isTurnedOn={isTurnedOn} justifyBetween>
			<TimeString isTurnedOn={isTurnedOn}>{trackerName}</TimeString>
			<Row justifyCenter>
				<TimeString isTurnedOn={isTurnedOn}>{time}</TimeString>
				<ToggleButton
					src={isTurnedOn ? pauseIcon : playIcon}
					onClick={e => toggleTurnOn(tracker.id)}
				/>
				<DeleteButton src={deleteIcon} onClick={e => deleteClickHandler(tracker.id)} />
			</Row>
		</RowTrackerWrapper>
	)
}

export default SingleTracker
