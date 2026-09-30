let sizeup = document.querySelector('.sizeup')
let sizedown = document.querySelector('.sizedown')
let color = document.querySelector('.color')
let p = document.querySelector('p')

let fonsize = 24
const upper = () => {
	if (fonsize >= 90) {
		return
	}
	p.style.fontSize = fonsize + 'px'
	fonsize += 2
}
sizeup.addEventListener('click', upper)

const lower = () => {
	if (fonsize <= 8) {
		return
	}
	fonsize -= 2
	p.style.fontSize = fonsize + 'px'
}
sizedown.addEventListener('click', lower)

const color1 = () => {
	const r = Math.floor(Math.random() * 255)
	const g = Math.floor(Math.random() * 255)
	const b = Math.floor(Math.random() * 255)

	p.style.color = `rgb(${r},${g},${b})`
}

color.addEventListener('click', color1)
