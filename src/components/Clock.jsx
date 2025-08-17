import { useState, useEffect } from 'react';

const Clock = () => {
    const [time, setSec] = useState(new Date())
    useEffect(() => {
        const boom = () => {
            setSec(new Date())
            setTimeout(boom, 1000);
            //console.log(setSec);
            
        };

        const timer = setTimeout(boom, 1000);
        return () => clearTimeout(timer)
        //console.log(timer);
        
    });

    let seconds = time.getSeconds()
    let minutes = time.getMinutes()
    let hours = time.getHours()

    let sec = seconds < 10 ? "0" + seconds : seconds;
    let min = minutes < 10 ? "0" + minutes : minutes;
    let hour = hours < 10 ? "0" + hours :hours;
    // console.log(seconds)
    return (
        <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-amber-400">

            <div className="relative font-mono font-extrabold text-[14rem] grid grid-cols-3 text-right text-white shadow-2xl gap-x-px border-8 border-yellow-100 rounded">
                <div className="absolute inset-x-0 -bottom-5 mx-auto flex justify-center">
                    <div className="w-3/4 h-5 bg-yellow-100 rounded"></div>
                </div>
                <div className="relative py-8 px-5">
                    <div className="absolute inset-0 w-full h-full grid grid-rows-2">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900"></div>
                        <div className="bg-gradient-to-br from-gray-700 to-gray-900"></div>
                    </div>
                    <div className="relative">{hour}</div>
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                        <div className="h-px w-full bg-gray-800"></div>
                    </div>
                </div>
                <div className="relative py-8 px-5">
                    <div className="absolute inset-0 w-full h-full grid grid-rows-2">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900"></div>
                        <div className="bg-gradient-to-br from-gray-700 to-gray-900"></div>
                    </div>
                    <div className="relative">{min}</div>
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                        <div className="h-px w-full bg-gray-800"></div>
                    </div>
                </div>
                <div className="relative py-8 px-5">
                    <div className="absolute inset-0 w-full h-full grid grid-rows-2">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900"></div>
                        <div className="bg-gradient-to-br from-gray-700 to-gray-900"></div>
                    </div>
                    <div className="relative">{sec}</div>
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                        <div className="h-px w-full bg-gray-800"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clock;