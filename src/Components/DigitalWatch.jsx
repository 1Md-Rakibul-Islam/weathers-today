import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';

const DigitalWatch = ({formatTime, formatDate, image, temprature, city}) => {
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
        <div className="flex mt-10 p-5 justify-around gap-4 items-center md:w-[520px] max-w-lg max-h-lg mx-auto rounded-2xl shadow-md bg-white bg-opacity-5 border border-gray-200 backdrop-filter backdrop-blur-md" >
            <div>
                <img className='w-40' src={image} alt="" srcset="" />
            </div>
            <div className=''>
                { city && <h2 className='text-2xl text-white my-2'>{city}</h2>}
                { temprature && <h2 className='text-2xl text-white my-2'>{temprature} °C</h2>}
                <h2 className='text-2xl text-white my-2'>{currentTime.format(formatTime)}</h2>
                <h2 className='text-2xl text-white my-2'>{currentTime.format(formatDate)}</h2>
            </div>
        </div>
    );
};

export default DigitalWatch;