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