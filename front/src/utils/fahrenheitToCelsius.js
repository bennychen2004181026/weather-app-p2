const fahrenheitToCelsius = ( fahrenheit ) =>
{
    const fahrenheitNumber = parseFloat( fahrenheit );
    return Math.round( ( fahrenheitNumber - 32 ) * 5 / 9 );
};

export default fahrenheitToCelsius;