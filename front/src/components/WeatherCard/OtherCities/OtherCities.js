import City from "./City/City";
import Cloudy_day from '../../WeatherIcon/assets/Cloudy_day.png';
import Rain from '../../WeatherIcon/assets/Rain.png';
import Sunny from '../../WeatherIcon/assets/Sunny.png';
import Cloudy from '../../WeatherIcon/assets/Cloudy.png';
import London from './assets/London.png';
import NewYork from './assets/NewYork.png';
import Shanghai from './assets/Shanghai.png';
import Sydney from './assets/Sydney.png';

const OtherCites = ( { data } ) =>
(
    <div className="flex justify-around h-full max-xs:hidden">
        <City cityImageUrl={ London } cityImageAlt="London" cityName="Sydney" imageUrl={ Rain } imageAlt='Rainy' Range='20 ~ 25' />
        <City cityImageUrl={ NewYork } cityImageAlt="NewYork" cityName="Shanghai" imageUrl={ Cloudy_day } imageAlt='Cloudy with sun' Range='18 ~ 20' />
        <City cityImageUrl={ Shanghai } cityImageAlt="Shanghai" cityName="New York" imageUrl={ Cloudy } imageAlt='Cloudy' Range='20 ~ 23' className="max-xl:hidden" />
        <City cityImageUrl={ Sydney } cityImageAlt="Sydney" cityName="London" imageUrl={ Sunny } imageAlt='Sunny' Range='28 ~ 32' className="max-xl:hidden" />
    </div>
);

export default OtherCites;