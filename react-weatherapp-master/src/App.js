import React, {useState} from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import handleButton from './js/handleButton';
import toggle from './js/toggle';


const GlobalStyle = createGlobalStyle`
:root {
  --main-color: ${props => props.theme.mode === 'dark' ? '#091921' : '#ecf0f3'};
  --light: ${props => props.theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#ffffff'};
  --shadow: ${props => props.theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.3)' : '#d1d9e6'};
  --font-color: ${props => props.theme.mode === 'dark' ? '#ecf0f3' : '#091921'};
}
`

function App() {

// Fetching weahter API
const [query, setQuery] = useState('');
const [weather, setWeather] = useState({});

// Theme useState
const [theme, setTheme] = useState({mode: 'light'});
const [themeText, setThemeText] = useState('light');

// Defining content box
const box = document.querySelector('.content-box');

const fetchData = () => {
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
  .then(response => response.json())
  .then(data => {
    setWeather(data);
    console.log(data);
    setQuery('');
    if(data.clouds.all  < 10) {
      box.classList.add(`${themeText}-sun`);
      console.log(data.rain);
      console.log(data.clouds.all);
    } else if (data.clouds.all < 50) {
      box.classList.add(`${themeText}-suncloud`);
    } else if (data.clouds.all >= 50) {
      if (data.rain != undefined) {
        box.classList.add(`${themeText}-rain`);
      } else {
        box.classList.add(`${themeText}-clouds`);
      }
    }
  })
  .catch((err) => {
    console.log(err.cod);
  });
}

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <div className="wrapper light-logo">
        <div className="top-wrapper">
          <div className="switch-mode">
            <label className="label">
              <div className="toggle">
                <input onChange={
                  e => {
                    toggle();
                    setTheme(theme.mode === 'dark' ? {mode: 'light'} : {mode: 'dark'});
                    setThemeText(themeText === 'light' ? 'dark' : 'light');
                }
                } className="toggle-state" type="checkbox" name="check" value="check" />
                <div className="indicator"></div>
              </div>
              <div className="label-text">{themeText} mode</div>
            </label>
          </div>
          <div className="search transform">
            <input 
              type="text" 
              className="search__input" 
              placeholder="Find your city" 
              onChange={e => setQuery(e.target.value)} 
              value={query}
              required/>
          </div>
          <div className="button-wrapper transform">
            <div className="wave"></div>
            <button 
              onClick={
                () => {
                  fetchData();
                  handleButton();
                      }
                }>Search</button>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content-box hide">
              {(typeof weather.main != "undefined") ? (
                  <div className="content-info">
                    <p>{weather.name}, {weather.sys.country}</p>
                    <p>Clouds: {weather.clouds.all}%</p>
                    <p> {weather.weather[0].description}</p>
                    <p> {Math.floor( weather.main.temp - 273.15 )} °C</p>
                  </div>
              ) : (
                <div>
                  <p>We can't find that city, please check spelling</p>
                </div>
              )}
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}


    


export default App;
