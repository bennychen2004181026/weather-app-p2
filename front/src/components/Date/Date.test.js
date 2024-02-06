import { render, screen } from '@testing-library/react';
import Date from './Date';

describe( 'Date Component', () =>
{
    it( 'renders the date value correctly', () =>
    {
        const testValue = '2024-02-06';
        render( <Date value={ testValue } /> );

        expect( screen.getByText( testValue ) ).toBeInTheDocument();
    } );
    it( 'applies a custom className', () =>
    {
        const customClassName = 'custom-date-class';
        const { container } = render( <Date value="2024-02-06" className={ customClassName } /> );

        expect( container.firstChild ).toHaveClass( customClassName );
    } );
} );
