import React from 'react'
import deleteIcon from '../static/delete-24px.svg'
import pauseIcon from '../static/pause-24px.svg'
import playIcon from '../static/play_arrow-24px.svg'
import { DeleteButton, Row, RowTrackerWrapper, TimeString, ToggleButton } from './StyledComponents'

const SingleTracker = ({ tracker, deleteClickHandler, toggleTurnOn }) => {
	const { trackerName, trackerTime, isTurnedOn } = tracker
	const time = new Date(trackerTime * 1000).toISOString().substr(11, 8)
	return (
		<RowTrackerWrapper width={100} p={[10, 0, 10, 0]} isTurnedOn={isTurnedOn} justifyBetween>
			<TimeString ellipsis isTurnedOn={isTurnedOn}>
				{trackerName}
			</TimeString>
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
