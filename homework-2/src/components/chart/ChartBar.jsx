import React from 'react';
import "./ChartBar.css"
const ChartBar = (props) => {
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'></div>
            <p className='chart-bar__label'>January</p>
        </div>
    );
};

export default ChartBar;