import { render, screen } from '@testing-library/react';
import TemperatureRange from './TemperatureRange';

describe( 'TemperatureRange Component', () =>
{
    it( 'render Temperature range value correctly', () =>
    {
        const testTemperatureValue = 30;
        render( <TemperatureRange value={ testTemperatureValue } /> );
        expect( screen.getByText( testTemperatureValue ) ).toBeInTheDocument();
    } );

    it( 'applies a custom className', () =>
    {
        const customClassName = 'test-class';
        const { container } = render( <TemperatureRange value="30" className={ customClassName } /> );
        expect( container.firstChild ).toHaveClass( customClassName );
    } );
} );