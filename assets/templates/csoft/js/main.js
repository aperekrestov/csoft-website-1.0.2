"use strict"

document.addEventListener('DOMContentLoaded', function () {

	// //? стартовая анимация
	// if (document.querySelector('.page__content')) {
	// 	gsap.set('.page__content', { opacity: 0 })
	// 	gsap.to('.page__content', 2, { opacity: 1, delay: 0.25 })
	// }


	//? видео на главной странице
	if (document.querySelector('.rich-banner')) {
		const BUILDING_VIDEO = document.getElementById('building-video')
		const BUILDING_VIDEO_WRAPPER = document.getElementById('building-video-wrapper')
		const BUILDING_CONTAINER = document.getElementById('building-container')

		const ENGINEERING_VIDEO = document.getElementById('engineering-video')
		const ENGINEERING_VIDEO_WRAPPER = document.getElementById('engineering-video-wrapper')
		const ENGINEERING_CONTAINER = document.getElementById('engineering-container')

		BUILDING_VIDEO_WRAPPER.addEventListener('mouseenter', videoBuildingPlay)
		BUILDING_VIDEO_WRAPPER.addEventListener('mouseleave', videoBuildingPause)
		BUILDING_CONTAINER.addEventListener('mouseenter', videoBuildingPlay)
		BUILDING_CONTAINER.addEventListener('mouseleave', videoBuildingPause)

		ENGINEERING_VIDEO_WRAPPER.addEventListener('mouseenter', videoEngineeringPlay)
		ENGINEERING_VIDEO_WRAPPER.addEventListener('mouseleave', videoEngineeringPause)
		ENGINEERING_CONTAINER.addEventListener('mouseenter', videoEngineeringPlay)
		ENGINEERING_CONTAINER.addEventListener('mouseleave', videoEngineeringPause)

		function videoBuildingPlay() {
			BUILDING_VIDEO.play()
		}
		function videoBuildingPause() {
			BUILDING_VIDEO.pause()

		}

		function videoEngineeringPlay() {
			ENGINEERING_VIDEO.play()
		}
		function videoEngineeringPause() {
			ENGINEERING_VIDEO.pause()
		}

		window.addEventListener('load', e => {
			BUILDING_VIDEO.currentTime = 0.01
			ENGINEERING_VIDEO.currentTime = 0.01
		})
	}


	//? баннер маленький
	if (document.querySelector('.banner-small')) {
		const BANNER_SMALL_NAVI = document.getElementById('banner-small__navigation')
		const BANNER_SMALL = document.querySelector('.banner-small')
		let bannerH1 = BANNER_SMALL.querySelector('.banner-small__headline'), cloneH1 = bannerH1.cloneNode(true)
		// document.getElementById("herePutVideoId").controls = false;
		BANNER_SMALL.querySelector('video').play()

		if (window.innerWidth >= 481) {
			BANNER_SMALL.querySelector('.banner-small__headline-container').appendChild(cloneH1)
			gsap.set(cloneH1, {
				transformOrigin: "0 0",
				scale: 1.4,
				y: 4,
				x: -20,
				opacity: 0,
				pointerEvents: "none"
			})
			gsap.to(cloneH1, 3, { x: 5, opacity: 0.14, ease: Power1.easeInOut })
		}

		gsap.set(BANNER_SMALL_NAVI, { y: -10, opacity: 0 })
		gsap.set(bannerH1, { x: 20, opacity: 0 })

		gsap.to(BANNER_SMALL_NAVI, 2, { y: 0, opacity: 1, ease: Power4.easeInOut })
		gsap.to(bannerH1, 2, { x: 0, opacity: 1, ease: Power1.easeInOut })
	}

	//? баннер страницы Машиностроение и Строительство
	if (document.querySelector('.banner-chapter')) {
		const BANNER_CHAPTER_NAVI = document.getElementById('banner-chapter__navigation')
		const BANNER_CHAPTER = document.querySelector('.banner-chapter')
		let bannerH1 = BANNER_CHAPTER.querySelector('.banner-chapter__headline'), cloneH1 = bannerH1.cloneNode(true)
		// document.getElementById("herePutVideoId").controls = false;
		BANNER_CHAPTER.querySelector('video').play()

		if (window.innerWidth >= 481) {
			BANNER_CHAPTER.querySelector('.banner-chapter__content-wrapper').appendChild(cloneH1)
			gsap.set(cloneH1, {
				transformOrigin: "0 0",
				scale: 2,
				y: -125,
				x: -20,
				opacity: 0,
				pointerEvents: "none"
			})
			gsap.to(cloneH1, 3, { x: 5, opacity: 0.3, ease: Power1.easeInOut })
		}

		gsap.set(BANNER_CHAPTER_NAVI, { y: -10, opacity: 0 })
		gsap.set(bannerH1, { x: 20, opacity: 0 })

		gsap.to(BANNER_CHAPTER_NAVI, 2, { y: 0, opacity: 1, ease: Power4.easeInOut })
		gsap.to(bannerH1, 2, { x: 0, opacity: 1, ease: Power1.easeInOut })
	}

	//? карточки проектов и решений
	if (document.querySelector('.project-card')) {
		const PROJECT_CARDS = document.querySelectorAll('.project-card')

		for (let i = 0; i < PROJECT_CARDS.length; i++) {
			let expandBtn = PROJECT_CARDS[i].querySelector('.project-card__expand')
			let projectCard = PROJECT_CARDS[i]
			expandBtn.addEventListener('click', e => {
				expandBtn.classList.toggle('_show-list')
				projectCard.classList.toggle('_show-list')
			})
		}
	}


	//? тэги
	if (document.querySelector('.tags')) {
		let tagLists = document.querySelectorAll('.tags')
		tagLists.forEach(tagList => {
			let tags = tagList.querySelectorAll('li')
			tags.forEach(tagItem => {
				tagItem.addEventListener('click', e => {
					tagItem.classList.toggle('__active')
				})
			})
		})
	}

	//? календарь мероприятий
	if (document.querySelector('.calendar') && document.querySelector('.event-day') && document.getElementById('calendar_swiper_wrapper')) {
		let eventDays = document.querySelectorAll('.event-day')
		let firstEvent = JSON.parse(eventDays[0].getAttribute("data-src"))
		let calendarSwiperWrapper = document.getElementById("calendar_swiper_wrapper")
		let calendarSwiperSettings = {
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'fraction',
			},
			autoplay: {
				delay: 3000,
				disableOnInteraction: true
			},
			speed: 500
		}

		calendarSwiperWrapper.innerHTML = ""
		for (let i = 0; i < firstEvent.length; i++) {
			calendarSwiperWrapper.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="swiper-calendar__picture"><img src="' + firstEvent[i][2] + '" alt=""></div><div class="swiper-calendar__content"><h3>' + firstEvent[i][0] + '</h3><p class="marg-t-2">' + firstEvent[i][1] + '</p><a href="#" class="s-bold marg-t-1">Подробнее</a></div></div>')
		}
		let calendarSwiper = new Swiper('.swiper-calendar', calendarSwiperSettings)

		eventDays.forEach(eventDay => {
			eventDay.addEventListener('click', e => {
				calendarSwiper.destroy()
				calendarSwiperWrapper.removeAttribute('style')
				calendarSwiperWrapper.innerHTML = ""
				let currentDayEvents = JSON.parse(e.target.getAttribute("data-src"))
				for (let i = 0; i < currentDayEvents.length; i++) {
					calendarSwiperWrapper.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="swiper-calendar__picture"><img src="' + currentDayEvents[i][2] + '" alt=""></div><div class="swiper-calendar__content"><h3>' + currentDayEvents[i][0] + '</h3><p class="marg-t-2">' + currentDayEvents[i][1] + '</p><a href="#" class="s-bold marg-t-1">Подробнее</a></div></div>')
				}
				calendarSwiper = new Swiper('.swiper-calendar', calendarSwiperSettings)
				for (let d = 0; d < eventDays.length; d++) {
					eventDays[d].classList.remove('event-day-clicked')
				}
				e.target.classList.add('event-day-clicked')
			})
		})
	}

	//? слайдер вендоров
	if (document.querySelector('.swiper-vendor')) {
		new Swiper('.swiper-vendor', {
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'fraction',
			},
			autoplay: {
				delay: 3000,
				disableOnInteraction: true
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				320: {
					slidesPerView: 1,
				},
				481: {
					slidesPerView: 2,
				},
				769: {
					slidesPerView: 3,
				},
				900: {
					slidesPerView: 4,
				},
				1300: {
					slidesPerView: 5,
				}
			},
			speed: 500,
			// spaceBetween: 3,
			slidesPerView: 5,
			slidesPerGroup: 1,
			loop: 'true'

		})
	}

	//? слайдер решений
	if (document.querySelector('.swiper-solution')) {
		new Swiper('.swiper-solution', {
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				dynamicBullets: true,
			},
			autoplay: {
				delay: 3000,
				disableOnInteraction: true
			},
			speed: 500,
			loop: 'true'

		})
	}

	//? аккордеон
	let accordeon = document.getElementsByClassName("accordeon")
	for (let i = 0; i < accordeon.length; i++) {
		accordeon[i].addEventListener("click", function () {
			this.classList.toggle("accordeon-active")
			let panel = this.nextElementSibling
			if (panel.style.display === "block") {
				panel.style.display = "none"
			} else {
				panel.style.display = "block"
			}
		})
	}


	//? интерактивный модуль
	if (document.getElementById('interactive-module')) {
		// console.log('neractive-module')
		let interactiveModule = document.getElementById('interactive-module')
		let cgWrapper = interactiveModule.querySelector('.interactive-module__cg-container')
		let moduleAreasArr = [
			{
				'interactiveArea': interactiveModule.querySelector('.interactive-module__pdm-area'),
				'content': interactiveModule.querySelector('.interactive-module__pdm')
			},
			{
				'interactiveArea': interactiveModule.querySelector('.interactive-module__tdm-area'),
				'content': interactiveModule.querySelector('.interactive-module__tdm')
			},
			{
				'interactiveArea': interactiveModule.querySelector('.interactive-module__capp-area'),
				'content': interactiveModule.querySelector('.interactive-module__capp')
			},
			{
				'interactiveArea': interactiveModule.querySelector('.interactive-module__mps_aps-area'),
				'content': interactiveModule.querySelector('.interactive-module__mps_aps')
			},
			{
				'interactiveArea': interactiveModule.querySelector('.interactive-module__mrp-area'),
				'content': interactiveModule.querySelector('.interactive-module__mrp')
			},
			{
				'interactiveArea': interactiveModule.querySelector('.interactive-module__mes-area'),
				'content': interactiveModule.querySelector('.interactive-module__mes')
			},
			{
				'interactiveArea': interactiveModule.querySelector('.interactive-module__eam-area'),
				'content': interactiveModule.querySelector('.interactive-module__eam')
			},
			{
				'interactiveArea': interactiveModule.querySelector('.interactive-module__qm-area'),
				'content': interactiveModule.querySelector('.interactive-module__qm')
			},
			{
				'interactiveArea': interactiveModule.querySelector('.interactive-module__plm_bi-area'),
				'content': interactiveModule.querySelector('.interactive-module__plm_bi')
			},
		]

		defoltModuleView()
		cgWrapper.onmouseleave = function(e){
			defoltModuleView()
		}

		for (let i = 0; i < moduleAreasArr.length; i++) {
			moduleAreasArr[i].interactiveArea.onmouseover = function(e) { moduleAreaOver(e, i) }	
		}
		
		function moduleAreaOver(e, i) {
			let prew = i === 0 ? moduleAreasArr.length - 1 : i - 1
			let next = i === moduleAreasArr.length - 1 ? 0 : i + 1
			for (let n = 0; n < moduleAreasArr.length; n++) {	
				TweenMax.killTweensOf([moduleAreasArr[i].interactiveArea, moduleAreasArr[prew].interactiveArea, moduleAreasArr[next].interactiveArea])
				TweenMax.to(moduleAreasArr[n].interactiveArea,  1, { opacity: 0.3, scale: 0.75, ease: Power1.easeOut })
				moduleAreasArr[n].content.style.display = 'none'
			}
			TweenMax.killTweensOf([moduleAreasArr[i].interactiveArea, moduleAreasArr[prew].interactiveArea, moduleAreasArr[next].interactiveArea])
			moduleAreasArr[i].content.style.display = 'block'
			TweenMax.to([moduleAreasArr[prew].interactiveArea, moduleAreasArr[next].interactiveArea],  0.4, { opacity: 0.6, scale: 0.87, ease: Power2.easeOut })
			TweenMax.to(moduleAreasArr[i].interactiveArea, 0.5, { opacity: 1, scale:1, ease: Power4.easeOut })
		}

		function defoltModuleView() {
			// console.log('defoltModuleView()')
			for (let n = 0; n < moduleAreasArr.length; n++) {	
				TweenMax.killTweensOf(moduleAreasArr[n].interactiveArea)
				TweenMax.to(moduleAreasArr[n].interactiveArea,  0.6, { opacity: 1, scale: 1, ease: Power1.easeOut })
				moduleAreasArr[n].content.style.display = 'none'
			}
			moduleAreasArr[0].content.style.display = 'block'
		}

	}


	// //? интерактив/прилипание объектов к курсору
	// if (document.querySelector('.topic-banner')) {
	// 	let topicBanners = document.querySelectorAll('.topic-banner')
	// 	topicBanners.forEach(topicBanner => {
	// 		interactiveAction1(topicBanner)
	// 	})
	// }
	// function interactiveAction1(theObject) {
	// 	// ? анимация прилипания иконок к курсору пользователя
	// 	theObject.addEventListener('mouseover', interactiveActivate)
	// 	theObject.addEventListener('mouseout', interactiveDeactivate)
	// 	let
	// 		elem2,
	// 		elem1 = theObject.querySelector('.elem-1'),
	// 		mpos_left = 0,
	// 		mpos_top = 0,
	// 		mpos_block_left = 0,
	// 		mpos_block_top = 0,
	// 		numToRepositionX = 0,
	// 		numToRepositionY = 0
	// 		;
	// 	if (typeof (theObject.querySelector('.elem-2')) != 'undefined' && theObject.querySelector('.elem-2') != null) {
	// 		elem2 = theObject.querySelector('.elem-2')
	// 	}

	// 	function onMouseMove(event) {
	// 		mpos_left = event.offsetX == undefined ? event.layerX : event.offsetX
	// 		mpos_top = event.offsetY == undefined ? event.layerY : event.offsetY
	// 		mpos_block_left = mpos_left - theObject.getBoundingClientRect().width
	// 		mpos_block_top = mpos_top - theObject.getBoundingClientRect().height

	// 		if (mpos_left < theObject.getBoundingClientRect().width / 2) {
	// 			numToRepositionX = mpos_block_left - mpos_block_left / 2
	// 		} else {
	// 			numToRepositionX = mpos_left / 2
	// 		}

	// 		if (mpos_top < theObject.getBoundingClientRect().height / 2) {
	// 			numToRepositionY = mpos_block_top - mpos_block_top / 2
	// 		} else {
	// 			numToRepositionY = mpos_top / 2
	// 		}

	// 		if (typeof (theObject.querySelector('.elem-2')) != 'undefined' && theObject.querySelector('.elem-2') != null) {
	// 			TweenMax.to(elem2, 0.75, { x: numToRepositionX / 20, y: numToRepositionY / 20, ease: Power1.easeOut })
	// 			TweenMax.to(elem1, 0.75, { x: numToRepositionX / 10, y: numToRepositionY / 10, ease: Power1.easeOut })
	// 		} else {
	// 			TweenMax.to(elem1, 0.75, { x: numToRepositionX / 3, y: numToRepositionY / 3, ease: Power1.easeOut })
	// 		}
	// 	}
	// 	function interactiveActivate() {
	// 		theObject.addEventListener('mousemove', onMouseMove)
	// 	}
	// 	function interactiveDeactivate() {
	// 		theObject.removeEventListener('mousemove', onMouseMove)
	// 	}
	// }





})
//? меню 
if (document.querySelector('.menu__btn')) {
	const MENU_BTN = document.querySelector('.menu__btn')
	const MENU_BODY = document.querySelector('.menu__body')
	const MENU_HOME_NAVIGATION = document.querySelector('.menu__body-home-namvigation')
	const MENU_HOME_NAV_POLIGON = document.getElementById('menu__body-home-namvigation-poligon')
	const MENU_LIST_BTNS = document.querySelectorAll('.menu__list>li')
	let menuClicked = false

	MENU_BTN.addEventListener('click', e => {
		if (!menuClicked) {
			menuClicked = true
			iconMenuAnimation()
			document.body.classList.toggle('_lock')
			MENU_BTN.classList.toggle('_active')
			MENU_BODY.classList.toggle('_active')
		}
	})

	// for (let i = 0; i < MENU_LIST_BTNS.length; i++) {
	// 	MENU_LIST_BTNS[i].addEventListener('mouseenter', e => {
	// 		MENU_LIST_BTNS[i].classList.add('_active')
	// 		console.log('over');
	// 	})
	// 	MENU_LIST_BTNS[i].addEventListener('mouseleave', e => {
	// 		MENU_LIST_BTNS[i].classList.remove('_active')
	// 		console.log('leave');
	// 	})
	// }

	MENU_HOME_NAV_POLIGON.addEventListener('click', e => {
		MENU_HOME_NAV_POLIGON.classList.toggle('_show-list')
		MENU_BODY.classList.toggle('_show-list')
	})

	MENU_HOME_NAVIGATION.addEventListener('mouseenter', e => {
		MENU_HOME_NAV_POLIGON.classList.add('_show-list')
		MENU_BODY.classList.add('_show-list')
	})
	MENU_HOME_NAVIGATION.addEventListener('mouseleave', e => {
		MENU_HOME_NAV_POLIGON.classList.remove('_show-list')
		MENU_BODY.classList.remove('_show-list')
	})

	function iconMenuAnimation() {
		if (MENU_BTN.classList.contains('_active')) {
			TweenMax.to(['.menu__btn-top-line'], 0.5, { scaleX: 1, rotation: 0, ease: Power3.easeInOut })
			TweenMax.to(['.menu__btn-bottom-line'], 0.5, {
				scaleX: 1, rotation: 0, ease: Power3.easeInOut, onComplete: () => {
					TweenMax.to(['.menu__btn-middle-line'], 0, { opacity: 1 })
					TweenMax.to(['.menu__btn-top-line'], 0.2, { y: 0, ease: Power1.easeOut })
					TweenMax.to(['.menu__btn-bottom-line'], 0.2, {
						y: 0, ease: Power1.easeOut, onComplete: () => {
							menuClicked = false
						}
					})
				}
			})
		} else {
			TweenMax.to(['.menu__btn-top-line'], 0.2, { y: 6, ease: Power1.easeOut })
			TweenMax.to(['.menu__btn-bottom-line'], 0.2, {
				y: -6, ease: Power1.easeOut, onComplete: () => {
					TweenMax.to(['.menu__btn-middle-line'], 0, { opacity: 0 })
					TweenMax.to(['.menu__btn-top-line'], 0.5, { scaleX: 0.6, rotation: 45, ease: Power3.easeInOut })
					TweenMax.to(['.menu__btn-bottom-line'], 0.5, {
						scaleX: 0.6, rotation: -45, ease: Power3.easeInOut, onComplete: () => {
							menuClicked = false
						}
					})
				}
			})

			gsap.set(['.menu__body-wrapper-top', '.menu__body-wrapper-bottom'], { opacity: 0 })
			gsap.set(['.menu__body-bg'], { opacity: 0, scale: 1.1 })
			TweenMax.to('.menu__body-bg', 2, { opacity: 1, scale: 1, ease: Power1.easeOut })
			TweenMax.to('.menu__body-wrapper-top', 1, { opacity: 1, ease: Power0.easeNone })
			TweenMax.to('.menu__body-wrapper-bottom', 0.75, { opacity: 1, ease: Power0.easeNone, delay: 0.3 })

			for (let i = 0; i < MENU_LIST_BTNS.length; i++) {
				gsap.set(MENU_LIST_BTNS[i], { opacity: 0 })
				TweenMax.to(MENU_LIST_BTNS[i], 0.7 + i / 5, { opacity: 1, ease: Power0.easeNone, delay: i / 10 })
			}
		}
	}
}

if (document.querySelector('.feedback')) {
	const colorError = '#ED1C24'
	const colorSuccess = '#4FC4B6'
	const colorProcess = '#4FC4B6'
	const colorCurrent = '#818285'
	let errorCurrentText = ''
	const textRegular = 'НАПИШИТЕ НАМ, МЫ РАДЫ ПОМОЧЬ'
	const textSuccess = 'ваше сообщение отправлено'
	const textSending = 'сообщение отправляется'
	const textSendError = 'ошибка отправки сообщения'
	const errorName = 'укажите ваше имя'
	const errorEmail = 'укажите ваше корректный email'
	const errorMessage = 'напишите текст сообщения'
	const errorCheckbox = 'отметьте обработку данных'
	const errorCUndefined = 'произошел сбой отправки'
	const sublineInfo = document.getElementById('feedback-subline-info')
	let form = document.getElementById('feedback-form')
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

			if (input.classList.contains('__message')) {
				if (input.value === "") {
					formAddEror(input)
					errorCurrentText = errorMessage
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

	document.getElementById('feedback__client-email-address').addEventListener('blur', e => {
		checkSpaces(e.target)
		if (e.target.value !== "" && emailTest(e.target) === false) {
			formAddEror(e.target)
		}
	})
	document.getElementById('feedback__client-name').addEventListener('blur', e => {
		checkSpaces(e.target)
	})
	document.getElementById('feedback__message').addEventListener('blur', e => {
		checkSpaces(e.target)
	})
}


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


if (document.querySelector('.map__ineractive-container')) {

	const MAP = document.querySelector('.map__bg')
	let currentScale = 0
	// let currentScaleY = 0
	let officeInfo = document.querySelector('.map__office-info-cont')
	let targets = document.querySelectorAll('.icon-target')

	const KALININGRAD = document.getElementById('kaliningrad')
	const SANKT_PETERBURG = document.getElementById('sankt-peterburg')
	const KRASNODAR = document.getElementById('krasnodar')
	const VOLGOGRAD = document.getElementById('volgograd')
	const MOSKVA = document.getElementById('moskva')
	const VORONEZH = document.getElementById('voronezh')
	const IVANOVO = document.getElementById('ivanovo')
	const NIZHNIJ_NOVGOROD = document.getElementById('nizhnij-novgorod')
	const KAZAN = document.getElementById('kazan')
	const SAMARA = document.getElementById('samara')
	const TYMEN = document.getElementById('tyumen')
	const OMSK = document.getElementById('omsk')
	const NOVOSIBIRSK = document.getElementById('novosibirsk')
	const KRASNOYARSK = document.getElementById('krasnoyarsk')
	const HABAROVSK = document.getElementById('habarovsk')

	window.addEventListener('load', e => {
		calculation()

		targets.forEach(target => {
			target.addEventListener('mouseover', e => {
				let delay = 0
				targets.forEach(target => {
					delay += 0.01
					if (target.id !== e.target.id) {
						gsap.to(target, 0.5, { opacity: 0.15, delay: delay, ease: Power0.easeNone })
					}
				})
				gsap.set(officeInfo, { y: 20, opacity: 0 })
				gsap.to(officeInfo, 1, { opacity: 1, y: 0, ease: Power1.easeOut })
				gsap.to(target, 0.25, { opacity: 1 })
				officeInfo.style.display = 'block'
				officeInfo.querySelector('a').innerHTML = target.getAttribute('data-city')
				officeInfo.querySelector('a').setAttribute('href', target.getAttribute('data-link') + target.getAttribute('data-city'))
				officeInfo.style.left = 'calc(' + target.style.left + ' - ' + officeInfo.clientWidth / 2 + 'px' + ' + 10px)'
				officeInfo.style.top = 'calc(' + target.style.top + ' + 12px)'
			})

			target.addEventListener('click', e => {
				let delay = 0
				targets.forEach(target => {
					delay += 0.01
					if (target.id !== e.target.id) {
						gsap.to(target, 0.5, { opacity: 0.15, delay: delay, ease: Power0.easeNone })
					}
				})
				gsap.set(officeInfo, { y: 20, opacity: 0 })
				gsap.to(officeInfo, 1, { opacity: 1, y: 0, ease: Power1.easeOut })
				gsap.to(target, 0.25, { opacity: 1 })
				officeInfo.style.display = 'block'
				officeInfo.querySelector('a').innerHTML = target.getAttribute('data-city')
				officeInfo.querySelector('a').setAttribute('href', target.getAttribute('data-link') + target.getAttribute('data-city'))
				officeInfo.style.left = 'calc(' + target.style.left + ' - ' + officeInfo.clientWidth / 2 + 'px' + ' + 10px)'
				officeInfo.style.top = 'calc(' + target.style.top + ' + 12px)'
			})
		})

		MAP.addEventListener('click', e => {
			targets.forEach(target => {
				gsap.to(target, 0.5, { opacity: 1 })
			})
			gsap.to(officeInfo, 0.25, {
				opacity: 0, onComplete: e => {
					officeInfo.style.display = 'none'
				}
			})
		})
	})

	window.addEventListener('resize', e => {
		calculation()
	})

	function calculation() {
		currentScale = document.querySelector('.map__wrapper').clientWidth / (1740 - 36 * 2) //! учитываем значение 36 - это отступ по краям карты

		gsap.set(KALININGRAD, { left: 37 * currentScale - 8, top: 190 * currentScale - 16 })
		gsap.set(SANKT_PETERBURG, { left: 280 * currentScale - 8, top: 175 * currentScale - 16 })
		gsap.set(KRASNODAR, { left: 60 * currentScale - 8, top: 355 * currentScale - 16 })
		gsap.set(VOLGOGRAD, { left: 200 * currentScale - 8, top: 335 * currentScale - 16 })
		gsap.set(MOSKVA, { left: 200 * currentScale - 8, top: 265 * currentScale - 16 })
		gsap.set(VORONEZH, { left: 190 * currentScale - 8, top: 300 * currentScale - 16 })
		gsap.set(IVANOVO, { left: 260 * currentScale - 8, top: 235 * currentScale - 16 })
		gsap.set(NIZHNIJ_NOVGOROD, { left: 310 * currentScale - 8, top: 255 * currentScale - 16 })
		gsap.set(KAZAN, { left: 380 * currentScale - 8, top: 285 * currentScale - 16 })
		gsap.set(SAMARA, { left: 450 * currentScale - 8, top: 355 * currentScale - 16 })
		gsap.set(TYMEN, { left: 660 * currentScale - 8, top: 405 * currentScale - 16 })
		gsap.set(OMSK, { left: 850 * currentScale - 8, top: 520 * currentScale - 16 })
		gsap.set(NOVOSIBIRSK, { left: 950 * currentScale - 8, top: 470 * currentScale - 16 })
		gsap.set(KRASNOYARSK, { left: 1105 * currentScale - 8, top: 450 * currentScale - 16 })
		gsap.set(HABAROVSK, { left: 1450 * currentScale - 8, top: 500 * currentScale - 16 })
	}
}