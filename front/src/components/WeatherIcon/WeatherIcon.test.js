import { render, screen } from '@testing-library/react';
import WeatherIcon from './WeatherIcon';

describe( 'WeatherIcon Component', () =>
{
    const imageUrl = 'https://example.com/weather-icon.svg';
    const altText = 'Clear Sky';
    const className = 'test-class';

    it( 'renders the image with correct src, alt, and className', () =>
    {
        render( <WeatherIcon imageUrl={ imageUrl } alt={ altText } className={ className } /> );

        const image = screen.getByRole( 'img', { name: altText } );
        expect( image ).toHaveAttribute( 'src', imageUrl );
        expect( image ).toHaveAttribute( 'alt', altText );
        expect( image ).toHaveClass( className );
    } );
} );
