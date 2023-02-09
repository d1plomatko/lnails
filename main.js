const header = document.querySelector('.header')

window.onscroll = () => {
    if (window.scrollY > 50) {
        header.classList.add('background')
    } else {
        header.classList.remove('background')
    }

}



const menu = document.querySelector('.menu')

// if (menu.classList.contains('active')){
//     document.body.classList.add('hidden')
// }

document.querySelector('.burger-menu').onclick = () => {
    menu.classList.toggle('active')
    document.body.classList.toggle('hidden')
}

const links = document.querySelectorAll('.link')

for (let link of links) {
    link.onclick = () => {
        menu.classList.remove('active')
    }
}

class Service {
    constructor(name, price, time) {
        this.name = name;
        this.price = price;
        this.time = time;
    }
}

const services = [
    new Service('Зняття + чистка + покриття гель-лаком', 400, 120),
    new Service('Манікюр (комбінований/класичний/апаратний)', 400, 120),
    new Service('Манікюр + покриття гель-лаком', 400, 120),
    new Service('Покриття гель-лаком', 400, 120),
    new Service('Зняття гель-лаку (+опил форми)', 400, 120),
    new Service('Манікюр чоловічий', 400, 120),
    new Service('Зняття + чистка + покриття гель-лаком + укріплення', 400, 120)
]


const services_wrapper = document.querySelector('.services');

for (let service of services) {
    const wrapper = document.createElement('div')
    wrapper.classList.add('service')

    const service_upper = document.createElement('div')
    service_upper.classList.add('service_upper')

    const heading = document.createElement('h6')
    heading.innerHTML = `<i class="fa-solid fa-tag"></i> ${service.name}`

    const button = document.createElement('button')
    button.id = 'btn'
    button.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`

    service_upper.append(heading, button)

    const service_details = document.createElement('div')
    service_details.classList.add('service_details')

    const service_price = document.createElement('div')
    service_price.innerHTML = `<i class="fa-solid fa-money-bill-1-wave"></i> ${service.price}UAH`

    const service_time = document.createElement('div')
    service_time.innerHTML = `<i class="fa-solid fa-hourglass"></i> ${service.time}min`

    service_details.append(service_price, service_time)

    wrapper.append(service_upper, service_details)

    services_wrapper.append(wrapper)


    button.onclick = () => {
        const openItem = document.querySelector('.open')

        if (openItem && openItem !== wrapper){
            openItem.classList.remove('open')
        }

        wrapper.classList.toggle('open')
    }
}



setTimeout(() => {
    document.querySelector('.intro_inner').classList.add('opacity')
}, 1300)

