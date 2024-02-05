import Cloudy_day_background from '../components/WeatherCard/CurrentCity/assets/Cloudy_day_background.png';
import Rain_background from '../components/WeatherCard/CurrentCity/assets/Rain_background.png';
import Snow_background from '../components/WeatherCard/CurrentCity/assets/Snow_background.png';
import Sunny_day_background from '../components/WeatherCard/CurrentCity/assets/Sunny day_background.png';
import Cloudy_day from '../components/WeatherIcon/assets/Cloudy_day.png';
import Cloudy from '../components/WeatherIcon/assets/Cloudy.png';
import Rain from '../components/WeatherIcon/assets/Rain.png';
import Snow from '../components/WeatherIcon/assets/Snow.png';
import Sunny from '../components/WeatherIcon/assets/Sunny.png';

const getWeatherIcon = ( condition ) =>
{
    switch ( condition )
    {
        case 'snow':
            return { background: Snow_background, icon: Snow };
        case 'rain':
            return { background: Rain_background, icon: Rain };
        case 'fog':
        case 'cloudy':
        case 'partly-cloudy-night':
            return { background: Cloudy_day_background, icon: Cloudy };
        case 'wind':
        case 'partly-cloudy-day':
            return { background: Cloudy_day_background, icon: Cloudy_day };
        case 'clear-day':
            return { background: Sunny_day_background, icon: Sunny };
        case 'clear-night':
            return { background: Sunny_day_background, icon: Sunny };
        default:
            return { background: Sunny_day_background, icon: Cloudy_day };
    }
};

export default getWeatherIcon;