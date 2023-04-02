import React, { useEffect, useState } from 'react';

const cityes = (cityName) => {
    const [city, setCity] = useState();

        useEffect( () => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=298d65b8e5ff4847e140284022f83f76&units=metric`)
            .then(res => res.json())
            .then( data => setCity(data))
        }, [])

    return city;
};

export default cityes;