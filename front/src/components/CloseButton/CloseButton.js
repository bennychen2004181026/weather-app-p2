const CloseButton = ( { snackbarKey, closeSnackbar } ) => (
    <button
        type="button"
        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        aria-label="close"
        color="inherit"
        onClick={ () => closeSnackbar( snackbarKey ) }
    >
        <span class="sr-only">Close menu</span>
        <svg class="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
    </button>
);
export default CloseButton;