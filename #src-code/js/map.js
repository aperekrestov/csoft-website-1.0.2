
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