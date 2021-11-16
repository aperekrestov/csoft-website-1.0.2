
if (document.querySelector('.newsletter')) {
	const colorError = '#ED1C24'
	const colorSuccess = '#4FC4B6'
	const colorProcess = '#4FC4B6'
	const colorCurrent = '#818285'
	let errorCurrentText = ''
	const textRegular = 'ПОДПИШИТИСЬ НА НАШИ НОВОСТИ И СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ'
	const textSuccess = 'ваша заявка отправлена'
	const textSending = 'ваша заявка отправляется'
	const textSendError = 'ошибка отправки заявки'
	const errorName = 'укажите ваше имя'
	const errorEmail = 'укажите ваше корректный email'
	const errorCheckbox = 'отметьте обработку данных'
	const errorCUndefined = 'произошел сбой отправки'
	const sublineInfo = document.getElementById('newsletter-subline-info')
	let form = document.getElementById('newsletter-form')
	form.addEventListener('submit', formSend)

	async function formSend(e) {
		e.preventDefault()
		let error = formValidate(form)

		if (error === 0) {
			form.classList.add('__sending')
			sublineInfo.style.color = colorProcess
			sublineInfo.innerText = textSending

			//! grecaptcha.ready(function () {
			//todo проверка на бота
			//? после проверки на бота и успешной отправки, производим сбрасывание формы
			form.classList.remove('__sending')
			form.reset()
			sublineInfo.style.color = colorSuccess
			sublineInfo.innerText = textSuccess
			document.querySelector(".feedback-form__checkbox-container").querySelector('label').style.color = colorCurrent
			//! })

		} else {
			sublineInfo.style.color = colorError
			sublineInfo.innerText = errorCurrentText
		}
	}

	function formValidate(form) {
		let error = 0
		let formReq = document.querySelectorAll('.__req')

		for (let i = 0; i < formReq.length; i++) {
			const input = formReq[i]

			if (input.classList.contains('__name')) {
				if (input.value === "") {
					formAddEror(input)
					errorCurrentText = errorName
					error++
					break
				}
			}

			if (input.classList.contains('__email')) {
				if (emailTest(input) === false) {
					formAddEror(input)
					errorCurrentText = errorEmail
					error++
					break
				}
			}

			if (input.classList.contains('__chackbox')) {
				if (input.getAttribute("type") === "checkbox" && input.checked === false) {
					formAddEror(input)
					errorCurrentText = errorCheckbox
					error++
					break
				}
			}
		}
		return error
	}

	function formAddEror(input) {
		if (input.classList.contains('__chackbox')) {
			input.parentElement.querySelector('label').style.color = colorError
		} else {
			input.parentElement.querySelector('label').style.color = colorCurrent
			input.focus()
			input.classList.add('__uncorrect')
		}
	}

	function emailTest(input) {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return re.test(String(input.value).toLowerCase())
	}
	function checkSpaces(input) {
		if (input.value.replace(/\s+/g, '') === '') {
			input.value = ''
		}
	}

	document.getElementById('newsletter__client-email-address').addEventListener('blur', e => {
		checkSpaces(e.target)
		if (e.target.value !== "" && emailTest(e.target) === false) {
			formAddEror(e.target)
		}
	})
	document.getElementById('newsletter__client-name').addEventListener('blur', e => {
		checkSpaces(e.target)
	})

}
