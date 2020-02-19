import React, { useState, useEffect } from 'react'
import SingleTracker from './SingleTracker'
import playIcon from '../static/play_arrow-24px.svg'
import moment from 'moment'

import {
	Row,
	ToggleButton,
	MainWrapper,
	Container,
	NewTrackerInput,
	NewTrackerButton
} from './StyledComponents'

const App = () => {
	const [trackerList, setTrackerList] = useState(
		[...JSON.parse(window.localStorage.getItem('timeTrackers'))] || []
	)
	const [trackerTurnedOnInfo, setTrackerTurnedOnInfo] = useState(() => {
		const initialObject = {}
		JSON.parse(window.localStorage.getItem('timeTrackers')).forEach(tracker => {
			initialObject[tracker.id] = tracker.isTurnedOn
		})
		return initialObject
	})
	const [inputValue, setInputValue] = useState('')

	useEffect(() => {
		const closeMoment =
			window.localStorage.getItem('closeMoment') &&
			moment(window.localStorage.getItem('closeMoment'))
		if (closeMoment) {
			const difference = moment().diff(closeMoment, 'seconds')
			console.log(difference)
			const newTrackerList = trackerList.map(tracker => ({
				...tracker,
				...(tracker.isTurnedOn && { trackerTime: tracker.trackerTime + difference })
			}))
			setTrackerList(newTrackerList)
			console.log(trackerList)
		}
	}, [])

	useEffect(() => {
		window.onbeforeunload = () => {
			window.localStorage.setItem('timeTrackers', JSON.stringify(trackerList))
			window.localStorage.setItem('closeMoment', moment().format())
		}
	}, [trackerList])

	const inputChangeHandler = ({ target }) => {
		setInputValue(target.value)
	}

	const addNewTrackerHandler = () => {
		const newTrackerList = [...trackerList]
		newTrackerList.unshift({
			trackerName: inputValue || new Date().toLocaleString(),
			trackerTime: 0,
			isTurnedOn: true,
			id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
		})
		setTrackerTurnedOnInfo({
			...trackerTurnedOnInfo,
			[newTrackerList[0].id]: true
		})
		setTrackerList([...newTrackerList])
		setInputValue('')
	}

	const enterPressHandler = ({ keyCode }) => {
		keyCode === 13 && addNewTrackerHandler()
	}
	useEffect(() => {
		var timer = setInterval(() => {
			trackerList.forEach((tracker, index) => {
				if (trackerTurnedOnInfo[tracker.id]) {
					setTrackerList(trackerList => {
						const newTrackerList = [...trackerList]
						newTrackerList[index].trackerTime += 1
						return newTrackerList
					})
				}
			})
		}, 1000)
		return () => clearInterval(timer)
	}, [trackerTurnedOnInfo])
	const deleteClickHandler = index => {
		const newTrackerList = trackerList.filter((element, i) => element.id !== index)
		delete trackerTurnedOnInfo[index]
		setTrackerTurnedOnInfo({
			...trackerTurnedOnInfo
		})
		setTrackerList([...newTrackerList])
	}
	const toggleTurnOn = index => {
		const arrIndex = trackerList.findIndex(tracker => tracker.id === index)
		trackerList[arrIndex] = {
			...trackerList[arrIndex],
			isTurnedOn: !trackerList[arrIndex].isTurnedOn
		}
		setTrackerList([...trackerList])
		setTrackerTurnedOnInfo({
			...trackerTurnedOnInfo,
			[index]: trackerList[arrIndex].isTurnedOn
		})
	}
	return (
		<MainWrapper>
			<Container>
				<Row width={100} p={[0, 30, 0, 30]} column>
					<Row>
						<NewTrackerInput
							placeholder={'Enter tracker name'}
							onChange={inputChangeHandler}
							onKeyDown={enterPressHandler}
							value={inputValue}
						/>
						<NewTrackerButton onClick={addNewTrackerHandler}>
							<ToggleButton src={playIcon} />
						</NewTrackerButton>
					</Row>
					<Row width={100} m={[24, 0, 24, 0]}>
						{trackerList.map((tracker, index) => (
							<SingleTracker
								tracker={tracker}
								idKey={tracker.id}
								deleteClickHandler={deleteClickHandler}
								toggleTurnOn={toggleTurnOn}
								key={index}
							/>
						))}
					</Row>
				</Row>
			</Container>
		</MainWrapper>
	)
}
export default App
