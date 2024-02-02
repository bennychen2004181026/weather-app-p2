import WeatherIcon from '../../../../WeatherIcon';
import Name from '../../../../Name';
import Date from '../../../../Date';
import TemperatureRange from '../../../../TemperatureRange';

const DayOfWeek = () => (
    <div>
        <Name />
        <Date />
        <WeatherIcon />
        <TemperatureRange />
    </div>
);

export default DayOfWeek;