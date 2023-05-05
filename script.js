const miPath = document.getElementById("markerMap");
const atts = miPath.getAttribute('d').split('z')
miPath.removeAttribute('d')
atts.pop()
const finalAtts = atts.map(att => att + 'z')

const random = () => Math.floor((Math.random() * finalAtts.length))

const getAtts = (n) => n.map(num => finalAtts[num])

setInterval(() => {
    const randoms = []
    for (let i = 0; i < 16; i++) {
        randoms.push(random())
    }

    miPath.setAttribute('d', getAtts(randoms).join(''))
}, 8100)