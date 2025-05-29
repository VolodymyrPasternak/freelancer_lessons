document.addEventListener('click', documentActions)

function documentActions(e) {
	const targetElement = e.target
	if (targetElement.closest('.header__burger')) {
		targetElement.closest('.header__burger').classList.toggle('open')
	}
}