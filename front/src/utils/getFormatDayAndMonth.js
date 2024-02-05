const getFormatDayAndMonth = ( dateString ) =>
{
    const dateTime = new Date( `${ dateString }` );
    const options = { day: 'numeric', month: 'long' };
    const formattedDateTime = dateTime.toLocaleString( 'en-US', options );

    return formattedDateTime;
};

export default getFormatDayAndMonth;