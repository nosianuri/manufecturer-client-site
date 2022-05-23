import React from 'react';

const FigureButton = ({ children }) => {
    return (
        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary hover:from-[#78716c] hover:to-[#292524]">{children}</button>
    );
};

export default FigureButton;