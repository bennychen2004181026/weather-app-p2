import { useCallback } from 'react';

import { useSnackbar } from 'notistack';

import CloseSnackbarButton from '../components/CloseButton';

const useSnackbarHelper = () =>
{
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const customSnackbar = useCallback( ( message, variant ) =>
    {
        enqueueSnackbar( message, {
            variant,
            anchorOrigin: { vertical: 'top', horizontal: 'center' },
            disableWindowBlurListener: true,
            transitionDuration: 300,
            action: ( key ) => (
                <CloseSnackbarButton snackbarKey={ key } closeSnackbar={ closeSnackbar } />
            ),
            style: {
                wordBreak: 'break-word',
                whiteSpace: 'pre-wrap',
            },
        } );
    }, [ enqueueSnackbar, closeSnackbar ] );

    return customSnackbar;
};

export default useSnackbarHelper;