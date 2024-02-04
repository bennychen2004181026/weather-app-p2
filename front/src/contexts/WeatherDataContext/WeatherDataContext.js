import React from 'react';

import useFetchWeatherData from '../../hooks/useFetchWeatherData';

const WeatherDataContext = React.createContext( null );

const WeatherDataProvider = ( { children } ) =>
{
    const { weatherData: SydneyData, error: SydneyError, isLoading: SydneyLoading } = useFetchWeatherData( 'Sydney', 'next4days' );
    const { weatherData: ShanghaiData, error: ShanghaiError, isLoading: ShanghaiLoading } = useFetchWeatherData( 'Shanghai' );
    const { weatherData: NewYorkData, error: NewYorkError, isLoading: NewYorkLoading } = useFetchWeatherData( 'NewYork' );
    const { weatherData: LondonData, error: LondonError, isLoading: LondonLoading } = useFetchWeatherData( 'London' );

    const totalData = {
        data: [ SydneyData, ShanghaiData, NewYorkData, LondonData ],
        error: [ SydneyError, ShanghaiError, NewYorkError, LondonError ],
        isLoading: SydneyLoading || ShanghaiLoading || NewYorkLoading || LondonLoading
    };

    return (
        <WeatherDataContext.Provider value={ totalData }>{ children }</WeatherDataContext.Provider>
    );
};

export default { WeatherDataContext, WeatherDataProvider };