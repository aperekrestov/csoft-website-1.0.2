
if (document.querySelector('.map__ineractive-container')) {

	const MAP = document.querySelector('.map__bg')
	let currentScale = 0
	let currentScaleY = 0
	let officeInfo = document.querySelector('.map__office-info-cont')
	let targets = document.querySelectorAll('.icon-target')

	const KALININGRAD = document.getElementById('kaliningrad')
	const PETERBURG = document.getElementById('petersburg')
	const KRASNODAR = document.getElementById('krasnodar')
	const VOLGOGRAD = document.getElementById('volgograd')
	const MOSCOW = document.getElementById('moscow')
	const VORONEZH = document.getElementById('voronezh')
	const IVANOVO = document.getElementById('ivanovo')
	const NIZHNIY_NOVGOROD = document.getElementById('nizhny-novgorod')
	const KAZAN = document.getElementById('kazan')
	const SAMARA = document.getElementById('samara')
	const TYMEN = document.getElementById('tyumen')
	const OMSK = document.getElementById('omsk')
	const NOVOSIBIRSK = document.getElementById('novosibirsk')
	const KRASNOYARSK = document.getElementById('krasnoyarsk')
	const KHABAROVSK = document.getElementById('khabarovsk')

	window.addEventListener('load', e => {
		calculation()

		targets.forEach(target => {
			target.addEventListener('click', e => {
				targets.forEach(target => {
					gsap.to(target, 0.25, { opacity: 0.15 })
				})
				gsap.set(officeInfo, { y: 10, opacity: 0 })
				gsap.to(officeInfo, 0.25, { opacity: 1, y: 0, ease: Power1.easeOut })
				gsap.to(target, 0.25, { opacity: 1 })
				officeInfo.style.display = 'block'
				officeInfo.querySelector('a').innerHTML = target.getAttribute('data-city')
				officeInfo.querySelector('a').setAttribute('href', target.getAttribute('data-link') + target.getAttribute('data-city'))
				officeInfo.style.left = 'calc(' + target.style.left + ' - ' + officeInfo.clientWidth / 2 + 'px' + ' + 10px)'
				officeInfo.style.top = 'calc(' + target.style.top + ' + 16px)'
			})
		})

		MAP.addEventListener('click', e => {
			targets.forEach(target => {
				gsap.to(target, 0.25, { opacity: 1 })
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
		gsap.set(PETERBURG, { left: 280 * currentScale - 8, top: 175 * currentScale - 16 })
		gsap.set(KRASNODAR, { left: 60 * currentScale - 8, top: 355 * currentScale - 16 })
		gsap.set(VOLGOGRAD, { left: 200 * currentScale - 8, top: 335 * currentScale - 16 })
		gsap.set(MOSCOW, { left: 200 * currentScale - 8, top: 275 * currentScale - 16 })
		gsap.set(VORONEZH, { left: 190 * currentScale - 8, top: 305 * currentScale - 16 })
		gsap.set(IVANOVO, { left: 260 * currentScale - 8, top: 235 * currentScale - 16 })
		gsap.set(NIZHNIY_NOVGOROD, { left: 310 * currentScale - 8, top: 255 * currentScale - 16 })
		gsap.set(KAZAN, { left: 380 * currentScale - 8, top: 285 * currentScale - 16 })
		gsap.set(SAMARA, { left: 450 * currentScale - 8, top: 355 * currentScale - 16 })
		gsap.set(TYMEN, { left: 660 * currentScale - 8, top: 405 * currentScale - 16 })
		gsap.set(OMSK, { left: 850 * currentScale - 8, top: 520 * currentScale - 16 })
		gsap.set(NOVOSIBIRSK, { left: 950 * currentScale - 8, top: 470 * currentScale - 16 })
		gsap.set(KRASNOYARSK, { left: 1105 * currentScale - 8, top: 450 * currentScale - 16 })
		gsap.set(KHABAROVSK, { left: 1450 * currentScale - 8, top: 500 * currentScale - 16 })
	}
}
