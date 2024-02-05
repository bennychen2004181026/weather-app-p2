import { useState, useEffect } from 'react';

const useFetchWeatherData = ( requiredParam, optionalParamOne = '', optionalParamTwo = '' ) =>
{
    const [ weatherData, setWeatherData ] = useState( null );
    const [ error, setError ] = useState( null );
    const [ isLoading, setIsLoading ] = useState( false );
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    let api_Url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${ requiredParam }`;
    if ( optionalParamOne ) api_Url += `/${ optionalParamOne }`;
    if ( optionalParamTwo ) api_Url += `/${ optionalParamTwo }`;
    api_Url += `?key=${ API_KEY }&elements=%2Bpm2p5`;

    const fetchData = async () =>
    {
        setIsLoading( true );
        try
        {
            const response = await fetch( `${ api_Url }` );

            if ( !response.ok )
            {
                const errorText = await response.text();
                throw new Error( errorText || 'Unknown error' );
            }
            const data = await response.json();
            setWeatherData( data );
        } catch ( error )
        {
            setError( error );
        }
        finally
        {
            setIsLoading( false );
        }
    };

    useEffect( () =>
    {
        fetchData();
    }, [] );

    return { weatherData, error, isLoading };
};

export default useFetchWeatherData;