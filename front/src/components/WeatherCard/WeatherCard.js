import CurrentCity from './CurrentCity';
import Forecast from './Forecast';
import OtherCities from './OtherCities';
import SearchBar from './SearchBar';

const WeatherCard = () =>
(
    <div className="max-h-[900px] max-md:max-h-[1500px] max-xl:w-[90%] max-lg:w-[95%] max-md:h-full max-md:flex max-md:flex-col max-w-[1650px] p-6 max-xs:p-2 rounded-3xl w-4/5 h-4/5 mx-auto bg-slate-100 shadow-blue-800 overflow-hidden grid grid-cols-6 grid-rows-6 gap-4" >
        <div className="row-span-6 rounded-3xl col-span-2"
            style={ {
                backgroundImage:
                    "linear-gradient(152deg, rgb(137, 155, 240) 1%, rgb(63, 85, 228) 54%, rgb(63, 85, 228) 96%)",
            } }
        >
            <CurrentCity />
        </div>
        <div className="row-span-3 col-span-4 mx-6 flex flex-col justify-center max-xs:w-full max-xs:mx-0">
            <Forecast />
        </div>
        <div className="row-span-1 col-span-4 border-8 m-6">
            <SearchBar />
        </div>
        <div className="row-span-2 col-span-4 border-8 m-6">
            <OtherCities />
        </div>
    </div>
);

export default WeatherCard;
