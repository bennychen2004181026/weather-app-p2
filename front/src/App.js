import WeatherCard from "./components/WeatherCard";
import BackgroundImage from "./components/BackgroundImage";
import bgImage from "./assets/bgImage.png";

const App = () => (
  <BackgroundImage imageUrl={ bgImage } alt="cloud" className="h-screen bg-cover flex items-center font-alimama" >
    <WeatherCard />
  </BackgroundImage>
);
export default App;