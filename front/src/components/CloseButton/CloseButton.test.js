import { render, screen, fireEvent } from '@testing-library/react';
import CloseButton from './CloseButton';

describe( 'CloseButton', () =>
{
    const mockCloseSnackbar = jest.fn();
    const snackbarKey = 'testKey';

    beforeEach( () =>
    {
        render( <CloseButton snackbarKey={ snackbarKey } closeSnackbar={ mockCloseSnackbar } /> );
    } );

    it( 'renders the close button', () =>
    {
        const closeButton = screen.getByRole( 'button', { name: /close/i } );
        expect( closeButton ).toBeInTheDocument();
        expect( closeButton ).toHaveClass( 'bg-white rounded-md p-2' );
    } );

    it( 'calls closeSnackbar with snackbarKey on click', () =>
    {
        const closeButton = screen.getByRole( 'button', { name: /close/i } );
        fireEvent.click( closeButton );
        expect( mockCloseSnackbar ).toHaveBeenCalledWith( snackbarKey );
    } );

    it( 'has correct accessibility attributes', () =>
    {
        const closeButton = screen.getByRole( 'button', { name: /close/i } );
        expect( closeButton ).toHaveAttribute( 'aria-label', 'close' );
    } );

    it( 'displays the correct SVG icon', () =>
    {
        const { container } = render( <CloseButton snackbarKey="testKey" closeSnackbar={ () => { } } /> );
        const svgIcon = container.querySelector( 'svg.h-8.w-8.text-red-500' );
        expect( svgIcon ).toBeInTheDocument();
        expect( svgIcon ).toHaveAttribute( 'viewBox', '0 0 24 24' );
    } );
} );
