import DayOfWeek from "./components/DayOfWeek";
import Cloudy_day from '../../WeatherIcon/assets/Cloudy_day.png';
import Rain from '../../WeatherIcon/assets/Rain.png';
import Sunny from '../../WeatherIcon/assets/Sunny.png';
import Cloudy from '../../WeatherIcon/assets/Cloudy.png';

const Forecast = () =>
(
    <div className="flex justify-between text-center h-full max-xs:flex-col max-xs:bg-slate-50 max-xs:rounded-2xl max-xs:border max-xs:divide-y">
        <DayOfWeek Day='Monday' date='24 July' imageUrl={ Rain } imageAlt='Rainy' Range='20 ~ 25' className="flex flex-col items-center justify-around max-xs:flex-row" />
        <DayOfWeek Day='Tuesday' date='25 July' imageUrl={ Cloudy_day } imageAlt='Cloudy with sun' Range='18 ~ 20' className="flex flex-col items-center justify-around max-xs:flex-row" />
        <DayOfWeek Day='Wednesday' date='26 July' imageUrl={ Cloudy } imageAlt='Cloudy' Range='20 ~ 23' className="flex flex-col items-center justify-around max-xs:flex-row" />
        <DayOfWeek Day='Thursday' date='27 July' imageUrl={ Sunny } imageAlt='Sunny' Range='28 ~ 32' className="flex flex-col items-center justify-around max-xs:flex-row  max-lg:hidden max-xs:flex" />
    </div>
);

export default Forecast;