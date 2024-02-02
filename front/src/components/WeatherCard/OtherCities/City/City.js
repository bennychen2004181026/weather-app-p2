import WeatherIcon from '../../../WeatherIcon';
import Name from '../../../Name';
import TemperatureRange from '../../../TemperatureRange';
import BackgroundImage from './components/BackgroundImage';

const City = ( { cityImageUrl, cityImageAlt, cityName, imageUrl, imageAlt, Range, className } ) => (
    <div className={ `relative w-full m-3 flex flex-col justify-center items-center cursor-pointer hover:drop-shadow-xl ${ className }` }>
        <BackgroundImage imageUrl={ cityImageUrl } alt={ cityImageAlt } />
        <WeatherIcon imageUrl={ imageUrl } alt={ imageAlt } className="z-10 w-1/3 h-1/3" />
        <Name value={ cityName } className="text-white font-semibold text-2xl z-10" />
        <TemperatureRange value={ Range } className="text-white z-10" />
    </div>
);

export default City;