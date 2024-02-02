import CurrentCity from './CurrentCity';
import Forecast from './Forecast';
import OtherCites from './OtherCites';
import SearchBar from './SearchBar';

const WeatherCard = () =>
(
    <div className="w-4/5 h-4/5 mx-auto rounded-3xl bg-white overflow-hidden shadow-blue-800 grid grid-cols-6 grid-rows-6">
        <CurrentCity />
        <Forecast />
        <OtherCites />
        <SearchBar />
    </div>
);

export default WeatherCard;
