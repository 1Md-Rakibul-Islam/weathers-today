import React from 'react';
import bg from '../../../assets/images/banner1.jpg';

const FetureBanner = () => {
    return (
        <section>
            <div style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '500px',}} className="bg-slate-400">
                <div className="flex flex-col items-center px-4 py-10 pb-16 mx-auto text-center lg:pb-32 md:py-20 md:px-10 lg:px-32 text-gray-900">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl xl:max-w-2xl text-gray-900">Find Your dream Furneture</h1>
                    <p className="text-lg sm:mb-12 xl:max-w-3xl text-gray-900">Shokher Furnuter is Online Ecommerce platfrom for old furniture buy and selling. You can buy our letest collection.</p>
                </div>
            </div>
            <div className="lg:w-[75vw] md:w-[80vw] w-[80vw] md:h-[45vh] lg:h-[60vh] h-[20vh] mx-auto mb-16 -mt-16 rounded-2xl shadow-md lg:-mt-64 bg-white bg-opacity-5 border border-gray-200 backdrop-filter backdrop-blur-md" >

            </div>
            {/* <img src="https://i.ibb.co/FB8QGTx/8032800.jpg" alt="" className="sm:w-[800px] h-[400px] w-[300px] mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" /> */}
        </section>
        // </section>
    );
};

export default FetureBanner;