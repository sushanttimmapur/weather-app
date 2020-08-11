import removeIcons from './removeIcons';

function toggle() {

    // Change toggle position
    const search = document.querySelector('.search__input');
    search.classList.add('toggle');
    setTimeout(() => {
        search.classList.remove('toggle');
    }, 1);

    // Changing icon classes dark/light
    let box = document.querySelector('.content-box').classList;
    let icon = document.querySelector('.content-box').classList[1];
    removeIcons();
    switch(icon) {
        case 'light-sun':
            box.add('dark-sun');
            break;
        case 'dark-sun':
            box.add('light-sun');
            break;
        case 'light-suncloud':
            box.add('dark-suncloud');
            break;
        case 'dark-suncloud':
            box.add('light-suncloud');
            break;
        case 'light-clouds':
            box.add('dark-clouds');
            break;
        case 'dark-clouds':
            box.add('light-clouds');
            break;
        case 'light-rain':
            box.add('dark-rain');
            break;
        case 'dark-rain':
            box.add('light-rain');
            break;
    }

    // Switch logo
    let wrapperClass = document.querySelector('.wrapper').classList;
    let logo = document.querySelector('.wrapper').classList[1];

    // Remove logo
    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.remove('light-logo', 'dark-logo');

    switch(logo) {
        case 'light-logo':
            wrapperClass.add('dark-logo');
            break;
        case 'dark-logo':
            wrapperClass.add('light-logo');
            break;
    }

}

export default toggle;