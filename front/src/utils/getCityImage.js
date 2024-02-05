import London from '../components/WeatherCard/OtherCities/assets/London.png';
import NewYork from '../components/WeatherCard/OtherCities/assets/NewYork.png';
import Shanghai from '../components/WeatherCard/OtherCities/assets/Shanghai.png';
import Sydney from '../components/WeatherCard/OtherCities/assets/Sydney.png';

const getCityImage = ( index ) =>
{
    switch ( index )
    {
        case '1':
            return { imageUrl: Sydney };
        case '2':
            return { imageUrl: Shanghai };
        case '3':
            return { imageUrl: NewYork };
        case '4':
            return { imageUrl: London };
        default:
            return { imageUrl: Sydney };
    }
};

export default getCityImage;