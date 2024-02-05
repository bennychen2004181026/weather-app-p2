const fetchWeatherData = async ( requiredParam, optionalParamOne = '', optionalParamTwo = '' ) =>
{
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    let apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${ encodeURIComponent( requiredParam ) }`;
    if ( optionalParamOne ) apiUrl += `/${ encodeURIComponent( optionalParamOne ) }`;
    if ( optionalParamTwo ) apiUrl += `/${ encodeURIComponent( optionalParamTwo ) }`;
    apiUrl += `?key=${ API_KEY }&elements=%2Bpm2p5`;

    try
    {
        const response = await fetch( apiUrl );
        if ( !response.ok )
        {
            const errorText = await response.text();
            throw new Error( errorText || 'Unknown error' );
        }
        const data = await response.json();
        return { data, error: null };
    } catch ( error )
    {
        throw new Error( error.message );
    }
};

export default fetchWeatherData;