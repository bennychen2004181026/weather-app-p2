const getFormatDate = ( dateString, timeString ) =>
{
    const fullDateTime = new Date( `${ dateString }T${ timeString }` );

    const options = { day: 'numeric', month: 'long', weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedDateTime = fullDateTime.toLocaleString( 'en-US', options );

    return formattedDateTime;
};

export default getFormatDate;