'use client'
import React, { useEffect, useRef } from "react"

interface CircleTextProps {
	text: string // Define the type for the text prop
}

const CircleText: React.FC<CircleTextProps> = ({ text }) => {
	const circleRef = useRef<HTMLDivElement | null>(null) // Explicitly type the ref

	useEffect(() => {
		if (circleRef.current) {
			const elements = circleRef.current.querySelectorAll<HTMLSpanElement>("span")
			const totalChars = elements.length
			const degreePerChar = 360 / totalChars // Calculate degree based on total characters
			
			elements.forEach((element, i) => {
				element.style.transform = `rotate(${i * degreePerChar}deg)`
			})
		}
	}, [text]) // Dependency on text to reapply effect if text changes

	// Create span elements for each character
	const children = text.split("").map((char, i) =>
		React.createElement(
			"span",
			{ key: i },
			char === " " ? "\u00A0" : char
		)
	)

	// Return the main container
	return React.createElement(
		"div",
		{ className: "circle rotateme", ref: circleRef },
		children
	)
}

export default CircleText
