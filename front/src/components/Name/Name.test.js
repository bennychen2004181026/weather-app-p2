import { render, screen } from '@testing-library/react';
import Name from './Name';

describe( 'Name Component', () =>
{
    it( 'renders the name value correctly', () =>
    {
        const testNameValue = 'John Doe';
        render( <Name value={ testNameValue } /> );

        expect( screen.getByText( testNameValue ) ).toBeInTheDocument();
    } );
    it( 'applies a custom className', () =>
    {
        const customClassName = 'custom-name-class';
        const { container } = render( <Name value="John Doe" className={ customClassName } /> );

        expect( container.firstChild ).toHaveClass( customClassName );
    } );
} );
