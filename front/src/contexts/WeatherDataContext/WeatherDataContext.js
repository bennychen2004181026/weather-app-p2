import React, { useState, useEffect } from 'react';

import fetchWeatherData from '../../utils/fetchWeatherData';

export const WeatherDataContext = React.createContext( null );

export const WeatherDataProvider = ( { children } ) =>
{
    const [ weatherDataList, setWeatherDataList ] = useState( {
        data: [],
        error: [],
        isLoading: false
    } );

    useEffect( () =>
    {
        const cities = [ 'Sydney', 'Shanghai', 'New York', 'London' ];
        const fetchAllCitiesData = async () =>
        {
            setWeatherDataList( ( prevState ) => ( { ...prevState, isLoading: true } ) );
            try
            {
                const promises = cities.map( city => fetchWeatherData( city, 'next4days' ) );
                const results = await Promise.all( promises );
                setWeatherDataList( {
                    data: results.map( ( result ) => result.data ),
                    error: results.map( ( result ) => result.error ),
                    isLoading: false
                } );
            } catch ( error )
            {
                setWeatherDataList( prevState => ( {
                    ...prevState,
                    error: [ error ],
                    isLoading: false
                } ) );
            }
        };
        fetchAllCitiesData();
    }, [] );

    const searchCity = async ( newCity ) =>
    {
        setWeatherDataList( ( prevState ) => ( { ...prevState, isLoading: true } ) );
        try
        {
            const { data, error } = await fetchWeatherData( newCity, 'next4days' );
            setWeatherDataList( prevState =>
            ( {
                ...prevState,
                data: [ data, ...prevState.data.slice( 0, 3 ) ],
                error: [ error ],
                isLoading: false
            } ) );
        } catch ( error )
        {
            setWeatherDataList( prevState => ( {
                ...prevState,
                error: [ error ],
                isLoading: false
            } ) );
        }
    };

    const value = {
        weatherDataList,
        searchCity
    };
    return <WeatherDataContext.Provider value={ value }>{ children }</WeatherDataContext.Provider>;
};
