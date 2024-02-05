import City from "./City/City";
import getCityImage from "../../../utils/getCityImage";
import getWeatherIcon from "../../../utils/getWeatherIcon";
import fahrenheitToCelsius from "../../../utils/fahrenheitToCelsius";

const OtherCites = ( { data } ) =>
{
    return <div className="flex justify-around h-full max-xs:hidden">
        { data.map( ( city, index ) =>
        {
            const cityName = `${ city.resolvedAddress.split( /[-,]/ )[ 0 ].trim().charAt( 0 ).toUpperCase() + city.resolvedAddress.split( /[-,]/ )[ 0 ].trim().slice( 1 ) }`;
            return <City
                key={ index }
                cityImageUrl={ getCityImage( index ).imageUrl }
                cityImageAlt={ city.resolvedAddress }
                cityName={ /^[A-Za-z\s-]+$/.test( cityName ) ? cityName : city.address }
                iconUrl={ getWeatherIcon( city.currentConditions.icon ).icon }
                iconAlt={ city.currentConditions.icon }
                Range={ `${ fahrenheitToCelsius( city.days[ 0 ].tempmax ) }°C ~ ${ fahrenheitToCelsius( city.days[ 0 ].tempmin ) }°C` }
                className={ ( index === data.length - 1 || index === data.length - 2 ) ? "max-xl:hidden" : "" }
            />;
        } ) }
    </div>;
};

export default OtherCites;