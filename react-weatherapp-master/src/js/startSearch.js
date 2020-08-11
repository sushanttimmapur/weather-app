// Moves search-bar and button up after entering the text

const startSearch = () => {
    const button = document.querySelector('.button-wrapper');
    const search = document.querySelector('.search');
    const content = document.querySelector('.content-box');
    button.classList.remove('transform');
    search.classList.remove('transform');
    setTimeout(() => {
      content.classList.remove('hide')
    }, 700)
  }

  export default startSearch;