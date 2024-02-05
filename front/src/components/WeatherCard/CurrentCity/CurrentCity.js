import Meta from './components/Meta';
import Temperature from './components/Temperature';
import TemperatureRange from '../../TemperatureRange';
import WeatherIcon from '../../WeatherIcon';
import Date from '../../Date';
import Name from '../../Name';
import Image from './components/Image';
import getWeatherIcon from '../../../utils/getWeatherIcon';
import getFormatDate from '../../../utils/getFormatDate';
import fahrenheitToCelsius from '../../../utils/fahrenheitToCelsius';

const CurrentCity = ( { data } ) =>
{
    const { background, icon } = getWeatherIcon( data[ 0 ].days[ 0 ].icon );
    const dateTime = getFormatDate( data[ 0 ].days[ 0 ].datetime, data[ 0 ].currentConditions.datetime );
    const currentTemperature = fahrenheitToCelsius( `${ data[ 0 ].currentConditions.temp }` );
    const maxTemperature = fahrenheitToCelsius( `${ data[ 0 ].days[ 0 ].tempmax }` );
    const minTemperature = fahrenheitToCelsius( `${ data[ 0 ].days[ 0 ].tempmin } }` );
    const cityName = `${ data[ 0 ].resolvedAddress.split( /[-,]/ )[ 0 ].trim().charAt( 0 ).toUpperCase() + data[ 0 ].resolvedAddress.split( /[-,]/ )[ 0 ].trim().slice( 1 ) }`;
    return (
        <div className='relative flex flex-col items-center h-full justify-around p-3 max-xs:min-h-[550px]'>
            <Image imageUrl={ background } alt={ `data[ 0 ].days[ 0 ].icon ` } className='absolute top-0 right-0' />
            <Date value={ dateTime } className='text-white text-left  text-1xl w-11/12' />
            <Name value={ /^[A-Za-z\s-]+$/.test( cityName ) ? cityName : data[ 0 ].address }
                className='text-white text-3xl font-bold' />
            <Temperature value={ currentTemperature } className='text-slate-200 text-8xl font-bold ' />
            <TemperatureRange value={ `${ maxTemperature }°C ~ ${ minTemperature }°C` } className='text-white text-1xl' />
            <WeatherIcon imageUrl={ icon } alt={ `data[ 0 ].days[ 0 ].icon` } />
            <Meta data={ data } />
        </div> );
};

export default CurrentCity;