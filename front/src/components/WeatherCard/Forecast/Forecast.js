import DayOfWeek from "./components/DayOfWeek";
import getDayOfWeek from "../../../utils/getDayOfWeek";
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
                < DayOfWeek
                    key={ index }
                    Day={ getDayOfWeek( day.datetime ) }
                    date={ getFormatDayAndMonth( day.datetime ) }
                    imageUrl={ getWeatherIcon( day.icon ).icon }
                    imageAlt={ day.description }
                    Range={ `${ fahrenheitToCelsius( day.tempmax ) }°C ~ ${ fahrenheitToCelsius( day.tempmin ) }°C` }
                    className={ `flex flex-col items-center justify-around max-xs:flex-row ${ index === forecastData.length - 1 ? "max-lg:hidden max-xs:flex" : ""
                        }` } />;
            } ) }
        </div> );
};

export default Forecast;