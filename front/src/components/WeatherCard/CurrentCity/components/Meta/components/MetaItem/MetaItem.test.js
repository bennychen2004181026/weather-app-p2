import { render, screen } from '@testing-library/react';
import MetaItem from './MetaItem';

describe( 'MetaItem', () =>
{
    const props = {
        imageUrl: 'test-image-url.jpg',
        alt: 'Test Image',
        value: 'Test Value',
    };

    test( 'renders correctly', () =>
    {
        render( <MetaItem { ...props } /> );
        const imageElement = screen.getByRole( 'img', { name: props.alt } );
        const valueElement = screen.getByText( props.value );

        expect( imageElement ).toHaveAttribute( 'src', props.imageUrl );
        expect( imageElement ).toHaveAttribute( 'alt', props.alt );

        expect( valueElement ).toBeInTheDocument();
    } );

    test( 'applies className to the image correctly', () =>
    {
        render( <MetaItem { ...props } /> );
        const imageElement = screen.getByRole( 'img', { name: props.alt } );

        expect( imageElement ).toHaveClass( 'max-w-[30px]', 'max-xl:max-w-[20px]' );
    } );
} );
