let secondsInput = document.getElementById('seconds')
let startButton = document.getElementById('start-timer')
let timerOutput = document.getElementById('timer')
let interval, remainingSeconds

secondsInput.value = 0

startButton.addEventListener('click', function () {
	if (isNaN(secondsInput.value) || secondsInput.value <= 0) {
		alert('Введите корректное количество секунд')
		return
	}
	if (interval) clearInterval(interval)

	remainingSeconds = parseInt(secondsInput.value)
	timerOutput.textContent = remainingSeconds

	interval = setInterval(function () {
		remainingSeconds--
		timerOutput.textContent = remainingSeconds

		if (remainingSeconds <= 0) clearInterval(interval)
	}, 1000)
})
