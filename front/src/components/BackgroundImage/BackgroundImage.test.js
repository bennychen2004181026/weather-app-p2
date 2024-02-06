import { render, screen } from '@testing-library/react';
import BackgroundImage from './BackgroundImage';

describe( 'BackgroundImage Component', () =>
{
    const imageUrl = 'test-image-url.jpg';
    const altText = 'Test Alt Text';

    it( 'applies the backgroundImage style and alt text correctly', () =>
    {
        render( <BackgroundImage imageUrl={ imageUrl } alt={ altText } /> );

        const imageElement = screen.getByRole( 'img', { name: altText } );
        expect( imageElement ).toHaveAttribute( 'src', imageUrl );
        expect( imageElement ).toHaveAttribute( 'alt', altText );
        expect( imageElement ).toHaveClass( 'hidden' );

        const containerDiv = imageElement.parentElement;
        expect( containerDiv ).toHaveStyle( `backgroundImage: url(${ imageUrl })` );
    } );

    it( 'renders children content', () =>
    {
        const childText = 'Child Content';
        render(
            <BackgroundImage imageUrl={ imageUrl }>
                <p>{ childText }</p>
            </BackgroundImage>
        );

        expect( screen.getByText( childText ) ).toBeInTheDocument();
    } );

    it( 'applies a custom className', () =>
    {
        const customClassName = 'custom-background-class';
        const { container } = render( <BackgroundImage imageUrl={ imageUrl } className={ customClassName } /> );

        expect( container.firstChild ).toHaveClass( customClassName );
    } );
} );
