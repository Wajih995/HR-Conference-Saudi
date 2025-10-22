'use client'
import { useEffect, useState } from "react"

const msInSecond = 1000
const msInMinute = 60 * msInSecond
const msInHour = 60 * msInMinute
const msInDay = 24 * msInHour

const getPartsOfTimeDuration = (duration: number) => {
	const days = Math.floor(duration / msInDay)
	const hours = Math.floor((duration % msInDay) / msInHour)
	const minutes = Math.floor((duration % msInHour) / msInMinute)
	const seconds = Math.floor((duration % msInMinute) / msInSecond)

	return { days, hours, minutes, seconds }
}

export default function Countdown2() {
	const [timeDif, setTimeDif] = useState(0)
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		// Set client-side flag
		setIsClient(true)
		
		// Initialize countdown on client side only
		const now = Date.now()
		const endDateTime = new Date('2026-01-20T12:00:00')
		const timeDifference = endDateTime.getTime() - now
		
		// Debug logging
		console.log('Countdown Target Date:', endDateTime.toLocaleString())
		console.log('Current Time:', new Date(now).toLocaleString())
		console.log('Time Difference (ms):', timeDifference)
		console.log('Time Difference (days):', Math.floor(timeDifference / msInDay))
		
		// Set initial time difference
		setTimeDif(timeDifference > 0 ? timeDifference : 0)
	}, [])

	useEffect(() => {
		// Only run countdown on client side
		if (!isClient) return

		const interval = setInterval(() => {
			setTimeDif((prev) => {
				const updatedTime = prev - 1000
				if (updatedTime <= 0) {
					clearInterval(interval)
					return 0
				}
				return updatedTime
			})
		}, 1000)

		return () => clearInterval(interval)
	}, [isClient])

	const timeParts = getPartsOfTimeDuration(timeDif)

	// Show loading state during hydration
	if (!isClient) {
		return (
			<div className="row">
				<div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-duration={900}>
					<div className="time-box">
						<span id="days1" className="time-value">--<span>Days</span></span>
					</div>
				</div>
				<div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-duration={1000}>
					<div className="time-box">
						<span id="hours1" className="time-value">--<span>Hours</span></span>
					</div>
				</div>
				<div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-duration={1100}>
					<div className="time-box">
						<span id="minutes1" className="time-value">--<span>Minutes</span></span>
					</div>
				</div>
				<div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-duration={1200}>
					<div className="time-box">
						<span id="seconds1" className="time-value">--<span>Seconds</span></span>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="row">
			<div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-duration={900}>
				<div className="time-box">
					<span id="days1" className="time-value">{timeParts.days}<span>Days</span></span>
				</div>
			</div>
			<div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-duration={1000}>
				<div className="time-box">
					<span id="hours1" className="time-value">{timeParts.hours}<span>Hours</span></span>
				</div>
			</div>
			<div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-duration={1100}>
				<div className="time-box">
					<span id="minutes1" className="time-value">{timeParts.minutes}<span>Minutes</span></span>
				</div>
			</div>
			<div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-duration={1200}>
				<div className="time-box">
					<span id="seconds1" className="time-value">{timeParts.seconds}<span>Seconds</span></span>
				</div>
			</div>
		</div>

	)
}
