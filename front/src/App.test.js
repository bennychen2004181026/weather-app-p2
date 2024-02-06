import { render } from '@testing-library/react';
import App from './App';

test( 'renders App with BackgroundImage', () =>
{
  const { getByAltText } = render( <App /> );
  expect( getByAltText( 'cloud' ) ).toBeInTheDocument();
} );
