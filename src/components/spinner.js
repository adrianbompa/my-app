import React from 'react';
var Spinner = require('react-spinkit');

const SpinnerDisplay = ({show}) => {

    if(show) {
        return (
            <Spinner name='cube-grid' color='blue' className="spinner"/>
        );
    } else {
        return null;
    }
};

export default SpinnerDisplay;