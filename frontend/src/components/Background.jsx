import React from 'react';

const Background = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] rounded-full bg-primary/20 floating-shape"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50rem] h-[50rem] rounded-full bg-indigo-600/20 floating-shape"></div>
            <div className="absolute top-[20%] right-[15%] w-64 h-64 border-[40px] border-primary/10 rounded-full floating-shape"></div>
        </div>
    );
};

export default Background;
