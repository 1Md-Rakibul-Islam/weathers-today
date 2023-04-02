import React, { useEffect, useState } from 'react';
import bg1 from '../../../assets/images/banner1.jpg';
import watch from '../../../assets/images/watch2.png';
import weather1 from '../../../assets/images/weather1.png';
import DigitalWatch from '../../../Components/DigitalWatch';
import { Link } from 'react-router-dom';
// import moment from 'moment/moment';

const FetureBanner = () => {
    // const [currentTime, setCurrentTime] = useState(moment());
        // const [city, setCity] = useState({});

        const [Mumbai, setMumbai] = useState({});
        const [London, setLondon] = useState({});
        const [Bangalore, setBangalore] = useState({});
        const [NewYork, setNewYork] = useState({});
        const [Dhaka, setDhaka] = useState({});

        // useEffect(() => {
        // const intervalId = setInterval(() => {
        //     setCurrentTime(moment());
        // }, 1000);
        // return () => clearInterval(intervalId);
        // }, []);

        const fetureCityes = [Mumbai, London, Bangalore, NewYork, Dhaka]
        
        useEffect( () => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=Navi Mumbai&appid=298d65b8e5ff4847e140284022f83f76&units=metric`)
            .then(res => res.json())
            .then( data => setMumbai(data))
        }, [])

        useEffect( () => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=298d65b8e5ff4847e140284022f83f76&units=metric`)
            .then(res => res.json())
            .then( data => setBangalore(data))
        }, [])

        useEffect( () => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=298d65b8e5ff4847e140284022f83f76&units=metric`)
            .then(res => res.json())
            .then( data => setLondon(data))
        }, [])

        useEffect( () => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=298d65b8e5ff4847e140284022f83f76&units=metric`)
            .then(res => res.json())
            .then( data => setNewYork(data))
        }, [])

        useEffect( () => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=298d65b8e5ff4847e140284022f83f76&units=metric`)
            .then(res => res.json())
            .then( data => setDhaka(data))
        }, [])

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
                >
                </DigitalWatch>

                <div className='max-w-6xl mx-auto'>
                    <h2 className='text-4xl text-white'>Today</h2>
                    <br />
                    <div className='grid gap-5 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-rows-1'>
                    {
                        fetureCityes?.map(city => (
                            <div>
                                <Link to={`/city/${city?.name}`}>
                                    <div className='text-center p-5 rounded-md cursor-pointer shadow-md bg-white hover:bg-black bg-opacity-5 border border-gray-200 hover:border-blue-600 backdrop-filter backdrop-blur-md'>
                                        <div className='flex items-center justify-center gap-2'>
                                            <img src={weather1} className='w-20' alt="" srcset="" />
                                            {city?.main?.temp}c
                                        </div>
                                        <h2 className='text-2xl text-white'>{city?.name}</h2>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
            {/* <img src="https://i.ibb.co/FB8QGTx/8032800.jpg" alt="" className="sm:w-[800px] h-[400px] w-[300px] mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" /> */}
        </section>
        // </section>
    );
};

export default FetureBanner;