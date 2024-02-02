const backgroundImage = ( { imageUrl, alt = 'Other city background image', className } ) => (
    <img
        src={ imageUrl }
        alt={ alt }
        className={ `absolute blur-xs drop-shadow h-full w-full top-0 left-0 ${ className }` }
    />
);

export default backgroundImage;