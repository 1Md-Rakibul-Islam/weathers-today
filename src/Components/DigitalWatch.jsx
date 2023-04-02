import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import watch from '../assets/images/watch2.png';

const DigitalWatch = ({formatTime, formatDate}) => {
    const [currentTime, setCurrentTime] = useState(moment());

    useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentTime(moment());
    }, 1000);
    return () => clearInterval(intervalId);
    }, []);
    // 'h:mm:ss a'
    // 'LL'
    return (
        <div className="flex justify-center gap-4 items-center max-w-lg h-40 mx-auto rounded-2xl shadow-md bg-white bg-opacity-5 border border-gray-200 backdrop-filter backdrop-blur-md" >
            <div>
                <img className='w-40' src={watch} alt="" srcset="" />
            </div>
            <div>
                <h2 className='text-2xl text-white'>{currentTime.format(formatTime)}</h2>
                <h2 className='text-2xl text-white'>{currentTime.format(formatDate)}</h2>
            </div>
        </div>
    );
};

export default DigitalWatch;