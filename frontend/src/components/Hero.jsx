import React from 'react';

const Hero = () => {
    return (
        <main className="flex-grow flex flex-col items-center justify-center px-6 py-20 text-center">
            <div className="max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-80">Variant 4 of 10: Abstract Geometry</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter">
                    <span className="ink-mask-text">Craft Your Future</span><br />
                    <span className="text-slate-900 dark:text-white">With Precision</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                    Experience the intersection of art and professional excellence. Our abstract geometry-driven resume builder helps you stand out in the Midnight Indigo sky.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="group relative flex items-center gap-3 bg-primary text-background-dark px-10 py-5 rounded-full text-lg font-bold transition-all hover:pr-14 overflow-hidden">
                        <span>Design Your Resume</span>
                        <span className="material-symbols-outlined absolute right-6 opacity-0 group-hover:opacity-100 transition-all">arrow_forward</span>
                    </button>
                    <button className="flex items-center gap-3 px-10 py-5 rounded-full text-lg font-bold border border-slate-300 dark:border-white/20 hover:bg-white/5 transition-colors">
                        <span className="material-symbols-outlined">play_circle</span>
                        View Templates
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Hero;
