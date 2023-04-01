import React, { useEffect, useState } from 'react';
import bg from '../../../assets/images/banner1.jpg';
import weather1 from '../../../assets/images/weather1.png';
import moment from 'moment/moment';

const FetureBanner = () => {
    const [currentTime, setCurrentTime] = useState(moment());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(moment());
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);

    return (
        <section>
            <div style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh',}} className="bg-slate-400 px-5">
                <div className="flex flex-col items-center px-4 mb-8 pt-10 mx-auto text-center md:pt-20 md:px-10 lg:px-32 text-gray-900">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl xl:max-w-2xl text-white">Weathers Today</h1>
                    <p className="text-lg xl:max-w-3xl text-gray-100">Weathers Today is realtime weathers checking platfrom. You can see weather of any state and city of over warld</p>
                </div>
                <div className="flex justify-center gap-4 items-center max-w-lg h-40 mx-auto rounded-2xl shadow-md bg-white bg-opacity-5 border border-gray-200 backdrop-filter backdrop-blur-md" >
                {/* <div className="lg:w-[75vw] md:w-[80vw] w-[80vw] md:h-[45vh] lg:h-[60vh] h-full mx-auto rounded-2xl shadow-md bg-white bg-opacity-5 border border-gray-200 backdrop-filter backdrop-blur-md" > */}
                    <div>
                        <img className='w-52' src={weather1} alt="" srcset="" />
                    </div>
                    <div>
                        <h2 className='text-2xl text-white'>{currentTime.format('h:mm:ss a')}</h2>
                        <h2 className='text-2xl text-white'>{currentTime.format('LL')}</h2>
                    </div>
                </div>
            </div>
            {/* <img src="https://i.ibb.co/FB8QGTx/8032800.jpg" alt="" className="sm:w-[800px] h-[400px] w-[300px] mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" /> */}
        </section>
        // </section>
    );
};

export default FetureBanner;