// ==UserScript==
// @name         Delicatessen
// @version      0.1.0
// @description  Sensibly order Google Meet participants list.
// @author       Murray C
// @match        https://meet.google.com/*
// ==/UserScript==

(() => {
	setInterval(() => {
		[...document.querySelector(`[aria-label="Participants"]`)?.children || []]
			.map(ele => ({
				ele,
				name: ele.querySelector(`[avatar-tooltip-id]`).textContent.replace(/\(You\)$/, ""),
			}))
			.sort(({name: a}, {name: b}) => a.localeCompare(b, "en", {sensitivity: "base"}))
			.forEach(({ele}) => ele.parentElement.append(ele))
	}, 1_000)
})()