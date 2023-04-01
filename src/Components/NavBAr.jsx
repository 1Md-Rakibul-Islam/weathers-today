import React from 'react';

const NavBAr = () => {
    return (
        <nav class=" border-gray-200 bg-purple-300">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> */}
            <span class="self-center text-2xl font-semibold whitespace-nowrap ">TaskEra</span>
        </a>
        <div class="flex items-center md:order-2">
            <button type="button" class="flex m r-3 text-sm bg-gray-400 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="" alt="user photo" />
            </button>
            
            <div class="z-50 hidden my-4 text-base list-none divide-y  rounded-lg shadow bg-gray-700 divide-gray-600" id="user-dropdown">
                <div class="px-4 py-3">
                <span class="block text-sm text-gray-900 ">Bonnie Green</span>
                <span class="block text-sm  truncate text-gray-400">name@flowbite.com</span>
                </div>
                <ul class="py-2" aria-labelledby="user-menu-button">
                <li>
                    <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:">Dashboard</a>
                </li>
                <li>
                    <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:">Settings</a>
                </li>
                <li>
                    <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:">Earnings</a>
                </li>
                <li>
                    <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:">Sign out</a>
                </li>
                </ul>
            </div>
            <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-l md:flex-row md:space-x-8 md:mt-0 md:border-0 border-gray-700">
            <li>
                <a href="#" class="block py-2 pl-3 pr-4 rounded md:bg-transparen md:p-0 md:text-blue-500" >Home</a>
            </li>
            <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded  md:p-0  md:hover:text-blue-500 hover:bg-gray-700 hover: md:hover:bg-transparent border-gray-700">About</a>
            </li>
            <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded  md:p-0  md:hover:text-blue-500 hover:bg-gray-700 hover: md:hover:bg-transparent border-gray-700">Services</a>
            </li>
            <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded  md:p-0  md:hover:text-blue-500 hover:bg-gray-700 hover: md:hover:bg-transparent border-gray-700">Contact</a>
            </li>
            </ul>
        </div>
        </div>
        </nav>
    );
};

export default NavBAr;