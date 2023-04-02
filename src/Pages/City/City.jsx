import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DigitalWatch from '../../Components/DigitalWatch';
import watch from '../../assets/images/watch2.png';
import weather1 from '../../assets/images/weather1.png';
import bg1 from '../../assets/images/banner1.jpg';

const City = () => {
    const city = useLoaderData();
    const {name, main, wind, timezone, sys, weather} = useLoaderData();
    const humidity = main?.humidity; 
    const temp = main?.temp; 
    const temp_max = main?.temp_max; 
    const temp_min = main?.temp_min; 
    const winDeg = wind?.deg; 
    const country = sys?.country; 
    const weatherDetails = weather[0]?.main; 
    const winSpeed = wind?.speed;

    const cityDetails = [name, humidity, temp, temp_max, winSpeed, timezone]

    const formatTime = 'h:mm:ss a'
    const formatDate = 'LL'

    console.log(city);

    return (
        <div style={{backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh',}} className="bg-slate-400 px-5 pt-16 mx-auto">
            <DigitalWatch 
                formatTime = {formatTime}
                formatDate = {formatDate}
                image = {weather1}
                temprature = {temp}
                city = {name}
            ></DigitalWatch>
            <h2 className='text-4xl font-bold text-center my-10  text-white'>{name}</h2>
            <div className='flex justify-center items-center'>
                <table className=" w-[720px] rounded-lg shadow-md overflow-hiddentext-center p-5 cursor-pointer bg-black border-blue-600">
                    <thead className="bg-gray-100">
                        <tr>
                        <th className="py-2 px-4 text-center text-2xl font-bold text-gray-60 uppercase">Metric</th>
                        <th className="py-2 px-4 text-center text-2xl font-bold text-gray-60 uppercase">Value</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr>
                        <td className="py-2 px-4 text-white text-center font-medium">Temperature</td>
                        <td className="py-2 px-4 text-white text-center font-semibold">{temp} °C</td>
                        </tr>
                        <tr>
                        <td className="py-2 px-4 text-white text-center font-medium">Humidity</td>
                        <td className="py-2 px-4 text-white text-center font-semibold">{humidity} %</td>
                        </tr>
                        <tr>
                        <td className="py-2 px-4 text-white text-center font-medium">Wind</td>
                        <td className="py-2 px-4 text-white text-center font-semibold">{winSpeed} km/h</td>
                        </tr>
                        <tr>
                        <td className="py-2 px-4 text-white text-center font-medium">Rain</td>
                        <td className="py-2 px-4 text-white text-center font-semibold">{weatherDetails}</td>
                        </tr>
                        <tr>
                        <td className="py-2 px-4 text-white text-center font-medium">Time Zone</td>
                        <td className="py-2 px-4 text-white text-center font-semibold">{timezone}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default City;