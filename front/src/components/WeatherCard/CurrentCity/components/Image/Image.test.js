import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Image from './';

describe( 'Image Component', () => 
{
    test( 'renders the image with the correct src and alt test', () =>
    {
        const testImageUrl = 'test-image.jpg';
        const testAltText = 'Test Image';
        render( <Image imageUrl={ testImageUrl } alt={ testAltText } /> );
        const imageElement = screen.getByRole( 'img' );
        expect( imageElement ).toHaveAttribute( 'src', testImageUrl );
        expect( imageElement ).toHaveAttribute( 'alt', testAltText );
    } );
    test( 'applies className to the image', () =>
    {
        const testClassName = 'custom-class';
        render( <Image className={ testClassName } imageUrl='test.jpg' alt='testAlt' /> );
        const imageElement = screen.getByRole( 'img' );
        expect( imageElement ).toHaveClass( testClassName );
    } );
    test( 'renders with empty alt attribute when alt prop is not provided', () =>
    {
        render( <Image imageUrl="test.jpg" /> );
        const imageElement = screen.getByRole( 'img' );
        expect( imageElement ).toHaveAttribute( 'alt', '' );
    } );
} );