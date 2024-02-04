import { useSnackbar } from 'notistack';

import CloseSnackbarButton from '../components/CloseButton';

const useSnackbar = () =>
{
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const customSnackbar = ( message, variant ) =>
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
    };

    return customSnackbar;
};

export default useSnackbar;