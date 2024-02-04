import { useContext } from 'react';

import Meta from './components/Meta';
import Temperature from './components/Temperature';
import TemperatureRange from '../../TemperatureRange';
import WeatherIcon from '../../WeatherIcon';
import Date from '../../Date';
import Name from '../../Name';
import Image from './components/Image';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import getWeatherIcon from '../../../utils/getWeatherIcon';

const CurrentCity = () =>
{
    const { data } = useContext( WeatherDataContext );
    const { background, icon } = getWeatherIcon( data.days[ 0 ].icon );
    <div className='relative flex flex-col items-center h-full justify-around p-3 max-xs:min-h-[550px]'>
        <Image imageUrl={ background } alt={ data.days[ 0 ].icon } className='absolute top-0 right-0' />
        <Date value='20 July, Sunday 12:00' className='text-white text-left  text-1xl w-11/12' />
        <Name value='New York' className='text-white text-3xl font-bold' />
        <Temperature value='20' className='text-slate-200 text-8xl font-bold ' />
        <TemperatureRange value='18 ~ 23' className='text-white text-1xl' />
        <WeatherIcon imageUrl={ icon } alt={ data.days[ 0 ].icon } />
        <Meta />
    </div>;
};

export default CurrentCity;