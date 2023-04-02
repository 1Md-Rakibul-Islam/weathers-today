import React, { useEffect, useState } from 'react';
import bg1 from '../../../assets/images/banner1.jpg';
import watch from '../../../assets/images/watch2.png';
import weather1 from '../../../assets/images/weather1.png';
import DigitalWatch from '../../../Components/DigitalWatch';
import { Link } from 'react-router-dom';
import cityes from '../../../API/cityes';


const FetureBanner = () => {

    const fetureCityes = [cityes("Navi Mumbai"), cityes("London"), cityes("Bangalore"), cityes(NewYork), cityes("Dhaka")];
    console.log(fetureCityes);

    const formatTime = 'h:mm:ss a'
    const formatDate = 'LL'

    return (
        <section>
            <div style={{backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh',}} className="px-5">
                <div className="flex flex-col items-center px-4 mb-8 pt-10 mx-auto text-center md:pt-20 md:px-10 lg:px-32 text-gray-900">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl xl:max-w-2xl text-white">Weathers Today</h1>
                    <p className="text-lg xl:max-w-3xl text-gray-100">Weathers Today is realtime weathers checking platfrom. You can see weather of any state and city of over warld</p>
                </div>
                <DigitalWatch
                    formatTime = {formatTime}
                    formatDate = {formatDate}
                    image = {watch}
                >
                </DigitalWatch>

                <div className='max-w-6xl mx-auto'>
                    <h2 className='text-4xl font-semibold text-white'>Today</h2>
                    <hr className='mb-10 mt-2 h-5' />
                    <div className='grid gap-5 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-rows-1'>
                    {
                        fetureCityes?.map(city => (
                            <div>
                                <Link to={`/city/${city?.name}`}>
                                    <div className='text-center text-white p-5 rounded-md cursor-pointer shadow-2xl bg-body border-blue-600  border hover:bg-white hover:bg-opacity-5 hover:border-gray-200 backdrop-filter backdrop-blur-md'>
                                    {/* <div className='text-center text-white p-5 rounded-md cursor-pointer shadow-md bg-white hover:bg-black bg-opacity-5 border border-gray-200 hover:border-blue-600 backdrop-filter backdrop-blur-md'> */}
                                        <div className='flex items-center justify-center gap-2'>
                                            <img src={weather1} className='w-20' alt="" srcset="" />
                                            <h2>{city?.main?.temp} °C</h2>
                                        </div>
                                        <h2 className='text-2xl'>{city?.name}</h2>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FetureBanner;