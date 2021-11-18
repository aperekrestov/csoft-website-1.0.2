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