import WeatherCard from "./components/WeatherCard";
import BackgroundImage from "./components/BackgroundImage";
import bgImage from "./assets/bgImage.png";
import { SnackbarProvider } from 'notistack';

const App = () => (
  <SnackbarProvider maxSnack={ 3 }>
    <BackgroundImage imageUrl={ bgImage } alt="cloud" className="min-h-[800px] h-screen max-md:h-full max-md:py-6 max-xs:py-3 bg-cover bg-center flex items-center font-alimama" >
      <WeatherCard />
    </BackgroundImage>
  </SnackbarProvider>
);
export default App;