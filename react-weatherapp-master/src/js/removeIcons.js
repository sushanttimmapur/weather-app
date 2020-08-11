function removeIcons () {

    // Remove icons
    const box = document.querySelector('.content-box');
    box.classList.remove('light-sun', 'light-clouds', 'light-rain', 'light-suncloud', 'dark-sun', 'dark-clouds', 'dark-rain', 'dark-suncloud');
}

export default removeIcons;