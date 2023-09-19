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
		let triangle = interactiveModule.querySelector('.interactive-module__triangle')
		let manufacture = interactiveModule.querySelector('.interactive-module__manufacture')
		let product = interactiveModule.querySelector('.interactive-module__product')
		let moduleAreasArr = [
			{
				'interactiveArea': interactiveModule.querySelector('.interactive-module__pdm-area'),
				'content': interactiveModule.querySelector('.interactive-module__pdm'),
				'spot': interactiveModule.querySelector('.interactive-module__pdm-spot'),
				'line1': interactiveModule.querySelector('.interactive-module__pdm-line1'),
				'line2': interactiveModule.querySelector('.interactive-module__pdm-line2'),
				'line3': interactiveModule.querySelector('.interactive-module__pdm-line3')
			},
			{
				'interactiveArea': interactiveModule.querySelector('.interactive-module__tdm-area'),
				'content': interactiveModule.querySelector('.interactive-module__tdm'),
				'spot': interactiveModule.querySelector('.interactive-module__tdm-spot'),
				'line1': interactiveModule.querySelector('.interactive-module__tdm-line1'),
				'line2': interactiveModule.querySelector('.interactive-module__tdm-line2'),
				'line3': interactiveModule.querySelector('.interactive-module__tdm-line3')
			},
			{
				'interactiveArea': interactiveModule.querySelector('.interactive-module__capp-area'),
				'content': interactiveModule.querySelector('.interactive-module__capp'),
				'spot': interactiveModule.querySelector('.interactive-module__capp-spot'),
				'line1': interactiveModule.querySelector('.interactive-module__capp-line1'),
				'line2': interactiveModule.querySelector('.interactive-module__capp-line2'),
				'line3': interactiveModule.querySelector('.interactive-module__capp-line3')
			},
			{
				'interactiveArea': interactiveModule.querySelector('.interactive-module__mps_aps-area'),
				'content': interactiveModule.querySelector('.interactive-module__mps_aps'),
				'spot': interactiveModule.querySelector('.interactive-module__mps_aps-spot'),
				'line1': interactiveModule.querySelector('.interactive-module__mps_aps-line1'),
				'line2': interactiveModule.querySelector('.interactive-module__mps_aps-line2'),
				'line3': interactiveModule.querySelector('.interactive-module__mps_aps-line3')
			},
			{
				'interactiveArea': interactiveModule.querySelector('.interactive-module__mrp-area'),
				'content': interactiveModule.querySelector('.interactive-module__mrp'),
				'spot': interactiveModule.querySelector('.interactive-module__mrp-spot'),
				'line1': interactiveModule.querySelector('.interactive-module__mrp-line1'),
				'line2': interactiveModule.querySelector('.interactive-module__mrp-line2'),
				'line3': interactiveModule.querySelector('.interactive-module__mrp-line3')
			},
			{
				'interactiveArea': interactiveModule.querySelector('.interactive-module__mes-area'),
				'content': interactiveModule.querySelector('.interactive-module__mes'),
				'spot': interactiveModule.querySelector('.interactive-module__mes-spot'),
				'line1': interactiveModule.querySelector('.interactive-module__mes-line1'),
				'line2': interactiveModule.querySelector('.interactive-module__mes-line2'),
				'line3': interactiveModule.querySelector('.interactive-module__mes-line3')
			},
			{
				'interactiveArea': interactiveModule.querySelector('.interactive-module__eam-area'),
				'content': interactiveModule.querySelector('.interactive-module__eam'),
				'spot': interactiveModule.querySelector('.interactive-module__eam-spot'),
				'line1': interactiveModule.querySelector('.interactive-module__eam-line1'),
				'line2': interactiveModule.querySelector('.interactive-module__eam-line2'),
				'line3': interactiveModule.querySelector('.interactive-module__eam-line3')
			},
			{
				'interactiveArea': interactiveModule.querySelector('.interactive-module__qm-area'),
				'content': interactiveModule.querySelector('.interactive-module__qm'),
				'spot': interactiveModule.querySelector('.interactive-module__qm-spot'),
				'line1': interactiveModule.querySelector('.interactive-module__qm-line1'),
				'line2': interactiveModule.querySelector('.interactive-module__qm-line2'),
				'line3': interactiveModule.querySelector('.interactive-module__qm-line3')
			},
			{
				'interactiveArea': interactiveModule.querySelector('.interactive-module__plm_bi-area'),
				'content': interactiveModule.querySelector('.interactive-module__plm_bi'),
				'spot': interactiveModule.querySelector('.interactive-module__plm_bi-spot'),
				'line1': interactiveModule.querySelector('.interactive-module__plm_bi-line1'),
				'line2': interactiveModule.querySelector('.interactive-module__plm_bi-line2'),
				'line3': interactiveModule.querySelector('.interactive-module__plm_bi-line3')
			},
		]

		manufacture.onmouseover = function (e) {
			TweenMax.killTweensOf(['.interactive-module__manufacture-1', '.interactive-module__manufacture-2', '.interactive-module__manufacture-arrow'])
			TweenMax.to('.interactive-module__manufacture-1', .5, {scale: 0.95, x: 5, y: 5, opacity: 0.7, ease: Power4.easeOut })
			TweenMax.to('.interactive-module__manufacture-2', .5, {scale: 1.1, ease: Power2.easeOut })
			TweenMax.to('.interactive-module__manufacture-arrow', 1, {x: 3, ease: Power3.easeOut })
		}
		manufacture.onmouseleave = function (e) {
			TweenMax.killTweensOf(['.interactive-module__manufacture-1', '.interactive-module__manufacture-2', '.interactive-module__manufacture-arrow'])
			TweenMax.to(['.interactive-module__manufacture-1', '.interactive-module__manufacture-2, .interactive-module__manufacture-arrow'], .3, { x:0, y: 0, scale: 1, opacity: 1, ease: Power1.easeInOut })
		}

		product.onmouseover = function (e) {
			TweenMax.killTweensOf(['.interactive-module__product-1', '.interactive-module__product-2', '.interactive-module__product-arrow'])
			TweenMax.to('.interactive-module__product-1', .5, {scale: 0.95, x: 5, y: 5, opacity: 0.7, ease: Power4.easeOut })
			TweenMax.to('.interactive-module__product-2', .5, {scale: 1.1, ease: Power2.easeOut })
			TweenMax.to('.interactive-module__product-arrow', 1, {x: 3, ease: Power3.easeOut })
		}
		product.onmouseleave = function (e) {
			TweenMax.killTweensOf(['.interactive-module__product-1', '.interactive-module__product-2', '.interactive-module__product-arrow'])
			TweenMax.to(['.interactive-module__product-1', '.interactive-module__product-2, .interactive-module__product-arrow'], .3, { x:0, y: 0, scale: 1, opacity: 1, ease: Power1.easeInOut })
		}

		defoultModuleView()
		cgWrapper.onmouseleave = function (e) {
			defoultModuleView()
		}

		for (let i = 0; i < moduleAreasArr.length; i++) {
			moduleAreasArr[i].interactiveArea.onmouseover = function (e) { moduleAreaOver(e, i) }
		}

		function moduleAreaOver(e, i) {
			let prew = i === 0 ? moduleAreasArr.length - 1 : i - 1
			let next = i === moduleAreasArr.length - 1 ? 0 : i + 1
			for (let n = 0; n < moduleAreasArr.length; n++) {
				TweenMax.to(moduleAreasArr[n].interactiveArea, 1, { opacity: 0.3, scale: 0.75, ease: Power1.easeOut })
				moduleAreasArr[n].content.style.display = 'none'

				TweenMax.killTweensOf([moduleAreasArr[n].spot, moduleAreasArr[n].line1, moduleAreasArr[n].line2, moduleAreasArr[n].line3])
				TweenMax.to([moduleAreasArr[n].line1, moduleAreasArr[n].line2, moduleAreasArr[n].line3], 0, { opacity: 0, scale: 0 })
				TweenMax.to(moduleAreasArr[n].spot, 0, { opacity: 0, scale: 2 })
			}
			TweenMax.killTweensOf([moduleAreasArr[i].interactiveArea, moduleAreasArr[prew].interactiveArea, moduleAreasArr[next].interactiveArea])
			moduleAreasArr[i].content.style.display = 'block'
			TweenMax.to([moduleAreasArr[prew].interactiveArea, moduleAreasArr[next].interactiveArea], 0.4, { opacity: 0.6, scale: 0.87, ease: Power2.easeOut })
			TweenMax.to(moduleAreasArr[i].interactiveArea, 0.5, { opacity: 1, scale: 1, ease: Power4.easeOut })

			TweenMax.to(triangle, 0, { opacity: 0, y: -15, scale: 0 })
			TweenMax.to(moduleAreasArr[i].spot, 0.5, { opacity: 1, scale: 1, ease: Power1.easeOut })
			//? скорость отноститедьно длинны линии: moduleAreasArr[i].line1.clientHeight / 1000
			TweenMax.to(moduleAreasArr[i].line1, 0.2, {
				opacity: 1, scale: 1, ease: Power1.easeInOut,
				onComplete: function () {
					//! console.log('1 - finish')
					//? скорость отноститедьно длинны линии: moduleAreasArr[i].line2.clientWidth / 1000
					TweenMax.to(moduleAreasArr[i].line2, 0.3, {
						opacity: 1, scale: 1, ease: Power1.easeInOut, onComplete: function () {
							//! console.log('2 - finish')
							//? скорость отноститедьно длинны линии: moduleAreasArr[i].line3.clientHeight / 1000
							TweenMax.to(moduleAreasArr[i].line3, 0.4, {
								opacity: 1, scale: 1, ease: Power1.easeInOut, onComplete: function () {
									TweenMax.to(triangle, 0.2, { opacity: 1, scale: 1 })
									TweenMax.to(triangle, 0.4, { y: 0, ease: Power4.easeOut })
								}
							})
						}
					})
				}
			})
		}

		function defoultModuleView() {
			for (let n = 0; n < moduleAreasArr.length; n++) {
				TweenMax.killTweensOf(moduleAreasArr[n].interactiveArea)
				TweenMax.to(moduleAreasArr[n].interactiveArea, 0.6, { opacity: 1, scale: 1, ease: Power1.easeOut })
				moduleAreasArr[n].content.style.display = 'none'

				TweenMax.killTweensOf([moduleAreasArr[n].spot, moduleAreasArr[n].line1, moduleAreasArr[n].line2, moduleAreasArr[n].line3])
				TweenMax.to([moduleAreasArr[n].line1, moduleAreasArr[n].line2, moduleAreasArr[n].line3], 0, { opacity: 0, scale: 0 })
				TweenMax.to(moduleAreasArr[n].spot, 0, { opacity: 0, scale: 2 })
			}
			moduleAreasArr[0].content.style.display = 'block'
			TweenMax.killTweensOf(triangle)
			TweenMax.to(triangle, 0, { opacity: 0, y: -15, scale: 0 })
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


		//@prepros-append menu.js

		//@prepros-append feedback.js

		//@prepros-append newsletter.js

		//@prepros-append map.js
	})