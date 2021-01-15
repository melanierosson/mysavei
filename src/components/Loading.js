import React, { useState, useEffect } from 'react';
import { WaveLoading } from 'react-loadingg';
import '../css/loading.css';

const Loading = ({children}) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        },1000)
    }, []);

    return (
        <div className='loading-anim'>
            {loaded ? children : <WaveLoading/>}
        </div>
    )
}

export default Loading;