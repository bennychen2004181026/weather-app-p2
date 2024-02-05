import WeatherIcon from '../../../../WeatherIcon';
import Name from '../../../../Name';
import Date from '../../../../Date';
import TemperatureRange from '../../../../TemperatureRange';

const DayOfWeek = ( { Day, date, imageUrl, imageAlt, Range, className } ) =>
{
    return <div className={ `flex flex-col items-center justify-around max-xs:flex-row ${ className }` }>
        <Name value={ Day } className="font-extrabold text-3xl max-xs:text-left max-xs:basis-1/2 max-xs:text-sm max-xs:font-semibold" />
        <Date value={ date } className="font-semibold text-2xl max-xs:hidden" />
        <WeatherIcon imageUrl={ imageUrl } alt={ imageAlt } className="w-5/6 object-contain max-xs:w-1/12" />
        <TemperatureRange value={ Range } className="font-semibold text-1xl max-xs:text-sm max-xs:basis-1/4" />
    </div>;
};

export default DayOfWeek;