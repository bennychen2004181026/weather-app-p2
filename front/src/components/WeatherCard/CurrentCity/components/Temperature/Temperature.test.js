import { render, screen } from '@testing-library/react';
import Temperature from './Temperature';

describe( 'Temperature Component', () =>
{
    it( 'renders the temperature value correctly', () =>
    {
        const testValue = 26;
        render( <Temperature value={ testValue } /> );

        expect( screen.getByText( `${ testValue }°` ) ).toBeInTheDocument();
    } );
    it( 'applies a custom className', () =>
    {
        const testClassName = 'custom-class';
        const { container } = render( <Temperature value={ 26 } className={ testClassName } /> );

        expect( container.firstChild ).toHaveClass( testClassName );
    } );
} );
