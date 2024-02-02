const WeatherIcon = ( { imageUrl, alt = 'weather icon', className } ) => (
  <img
    src={ imageUrl }
    alt={ alt }
    className={ className }
  />
);
export default WeatherIcon;