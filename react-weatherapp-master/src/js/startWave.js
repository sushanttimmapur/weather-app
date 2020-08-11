const startWave = () => {
    const wave = document.querySelector('.wave');
    wave.classList.add('wave-animate');
    setTimeout(() => {wave.classList.remove('wave-animate');}, 1000);
  }

export default startWave;