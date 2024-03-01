'use client'
import React from 'react'
import { useHydration } from '../hooks/useHydration';
import { WiDayRain } from "react-icons/wi";
import { BsClockFill } from "react-icons/bs";

interface countryPhotoProps {
    image: string;
    timeZone: string;
}

function getTimeDifferenceBetweenTimezones(timezone1, timezone2) {
    const date = new Date();
    const utc1 = date.toLocaleString('en-US', { timeZone: timezone1 });
    const utc2 = date.toLocaleString('en-US', { timeZone: timezone2 });

    const offset1 = Date.parse(utc1);
    const offset2 = Date.parse(utc2);

    // Difference in milliseconds
    const differenceMs = offset2 - offset1;

    // Convert milliseconds to hours and minutes
    const differenceHours = Math.floor(differenceMs / 3600000);
    const differenceMinutes = Math.floor((differenceMs % 3600000) / 60000);

    return { hours: differenceHours, minutes: differenceMinutes };
}


const countryPhoto: React.FC<countryPhotoProps> = ({ image, timeZone }) => {
    const hydrated = useHydration;
    const currentTimeZone = hydrated() ? Intl.DateTimeFormat().resolvedOptions().timeZone : "America/New_York"
    const { hours:timeZoneDiffernce }= getTimeDifferenceBetweenTimezones( currentTimeZone, timeZone)
    return(
    <div className='card'>
                    
                    
        <div className='card-image'>
            <div className='card-image'>
                <img className="round-edges" src={image} />
            </div>
            <div className="card-content is-overlay has-text-white has-text-weight-bold is-size-3">
                <div className='has-background-transparent-grey px-3 round-edges is-pulled-left'> <WiDayRain /> 80 F </div>
            <div className='has-background-transparent-grey px-3 round-edges is-pulled-right is-bottom' > <BsClockFill /> {timeZoneDiffernce}</div>
            </div>
        </div>
        </div>)
}

export default countryPhoto;