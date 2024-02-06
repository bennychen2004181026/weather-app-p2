import { render, screen } from '@testing-library/react';
import Meta from './Meta';
import fahrenheitToCelsius from '../../../../../utils/fahrenheitToCelsius';

jest.mock( './assets/wind.svg', () => 'wind.svg' );
jest.mock( './assets/humidity.svg', () => 'humidity.svg' );
jest.mock( './assets/PM2.5.svg', () => 'PM2.5.svg' );
jest.mock( './assets/somatosensory.svg', () => 'somatosensory.svg' );

describe( 'Meta', () =>
{
    const mockData = [ {
        days: [ {
            feelslike: 68,
            windspeed: 15,
            humidity: 40,
            pm2p5: 12,
        } ]
    } ];

    it( 'renders MetaItem components with correct data', () =>
    {
        render( <Meta data={ mockData } /> );

        const windSpeed = screen.getByAltText( 'wind icon' );
        const humidity = screen.getByAltText( 'humidity icon' );
        const airQuality = screen.getByAltText( 'air quality icon' );
        const somatosensory = screen.getByAltText( 'somatosensory icon' );

        expect( windSpeed ).toBeInTheDocument();
        expect( humidity ).toBeInTheDocument();
        expect( airQuality ).toBeInTheDocument();
        expect( somatosensory ).toBeInTheDocument();

        expect( screen.getByText( '15km/h' ) ).toBeInTheDocument();
        expect( screen.getByText( '40%' ) ).toBeInTheDocument();
        expect( screen.getByText( '12μg' ) ).toBeInTheDocument();

        const feelsLikeTemperatureCelsius = fahrenheitToCelsius( `${ mockData[ 0 ].days[ 0 ].feelslike }` );
        expect( screen.getByText( `${ feelsLikeTemperatureCelsius }°` ) ).toBeInTheDocument();
    } );


    it( 'correctly converts feels like temperature from Fahrenheit to Celsius', () =>
    {
        const testData = [ { days: [ { feelslike: 68 } ] } ];
        render( <Meta data={ testData } /> );

        const expectedCelsiusTemperature = '20°';
        expect( screen.getByText( expectedCelsiusTemperature ) ).toBeInTheDocument();
    } );

    it( 'renders correctly with varied data inputs', () =>
    {
        const testData = [
            { days: [ { feelslike: 75, windspeed: 10, humidity: 50, pm2p5: 20 } ] }
        ];
        render( <Meta data={ testData } /> );

        expect( screen.getByText( '10km/h' ) ).toBeInTheDocument();
        expect( screen.getByText( '50%' ) ).toBeInTheDocument();
        expect( screen.getByText( '20μg' ) ).toBeInTheDocument();

        const expectedCelsius = fahrenheitToCelsius( `${ testData[ 0 ].days[ 0 ].feelslike }` );
        expect( screen.getByText( `${ expectedCelsius }°` ) ).toBeInTheDocument();
    } );
} );
