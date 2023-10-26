import WeatherCard from "./components/WeatherCard/WeatherCard";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import bgImage from "./assets/bgImage.png";
import React from 'react';

const App = () => {
  return (
    <BackgroundImage imageUrl={bgImage} alt='cloud' className={'w-screen h-screen'}>
      <WeatherCard />
    </BackgroundImage>
    )
}
export default App;
