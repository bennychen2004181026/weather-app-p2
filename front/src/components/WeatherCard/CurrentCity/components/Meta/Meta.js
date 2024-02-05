import { useContext } from 'react';

import MetaItem from './components/MetaItem';
import wind from './assets/wind.svg';
import humidity from './assets/humidity.svg';
import airQuality from './assets/PM2.5.svg';
import somatosensory from './assets/somatosensory.svg';
import { WeatherDataContext } from '../../../../../contexts/WeatherDataContext/WeatherDataContext';
import fahrenheitToCelsius from '../../../../../utils/fahrenheitToCelsius';

const Meta = () =>
{
  const { data } = useContext( WeatherDataContext );
  const feelsLikeTemperature = fahrenheitToCelsius( `${ data[ 0 ].days[ 0 ].feelslike }` );
  return (
    <div className='flex font-semibold justify-around bg-slate-50 rounded-2xl w-full py-2 px-5 min-h-[100px]  max-xl:px-1'>
      <MetaItem imageUrl={ wind } value={ `${ data[ 0 ].days[ 0 ].windspeed }km/h` } alt='wind icon' />
      <MetaItem imageUrl={ humidity } value={ `${ data[ 0 ].days[ 0 ].humidity }%` } alt='humidity icon' />
      <MetaItem imageUrl={ airQuality } value={ `${ data[ 0 ].days[ 0 ].pm2p5 }μg` } alt='air quality icon' />
      <MetaItem imageUrl={ somatosensory } value={ `${ feelsLikeTemperature }°` } alt='somatosensory icon' />
    </div> );
};

export default Meta;
