// All action made after clicking a button

import startSearch from './startSearch';
import startWave from './startWave';
import removeIcons from './removeIcons';

const handleButton = () => {
    startWave();
    startSearch();
    removeIcons();
}

export default handleButton;