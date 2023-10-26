import React from 'react'; 

const BackgroundImage = ({ imageUrl, alt, className, children }) => {
    return (
      <div className={className}>
        <img src={imageUrl} alt={alt} />
        {children}
      </div>
    );
  };
export default BackgroundImage;