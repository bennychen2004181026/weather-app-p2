import DayOfWeek from "./components/DayOfWeek";
import getDayOfWeek from "../../../utils/getDayOfWeek";
import Cloudy_day from '../../WeatherIcon/assets/Cloudy_day.png';
import Rain from '../../WeatherIcon/assets/Rain.png';
import Sunny from '../../WeatherIcon/assets/Sunny.png';
import Cloudy from '../../WeatherIcon/assets/Cloudy.png';
import getFormatDayAndMonth from "../../../utils/getFormatDayAndMonth";
import getWeatherIcon from "../../../utils/getWeatherIcon";
import fahrenheitToCelsius from "../../../utils/fahrenheitToCelsius";

const Forecast = ( { data } ) =>
{
    const forecastData = data[ 0 ].days.slice( 1, 5 );
    return (
        <div className="flex justify-between text-center h-full max-xs:flex-col max-xs:bg-slate-50 max-xs:rounded-2xl max-xs:border max-xs:divide-y">
            { forecastData.map( ( day, index ) =>
            {
                return < DayOfWeek
                    key={ index }
                    Day={ getDayOfWeek( day.datetime ) }
                    date={ getFormatDayAndMonth( day.datetime ) }
                    imageUrl={ getWeatherIcon( day.icon ).icon }
                    imageAlt={ day.description }
                    Range={ `${ fahrenheitToCelsius( day.tempmax ) } ~ ${ fahrenheitToCelsius( day.tempmin ) }` }
                    className={ `flex flex-col items-center justify-around max-xs:flex-row ${ index === forecastData.length - 1 ? "max-lg:hidden max-xs:flex" : ""
                        }` } />;
            } ) }
        </div> );
};

export default Forecast;