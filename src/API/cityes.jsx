import React, { useEffect, useState } from 'react';

const cityes = (cityName) => {
    const [city, setCity] = useState();

    useEffect( () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=75143db722ae5c4be5001287d8586b85&units=metric`)
        .then(res => res.json())
        .then( data => setCity(data))
    }, [city])

    return city;
};

export default cityes;