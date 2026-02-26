import React from 'react';

const Navbar = () => {
    return (
        <header className="flex items-center justify-between px-6 py-6 lg:px-20 border-b border-slate-200 dark:border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-primary rounded-lg">
                    <span className="material-symbols-outlined text-background-dark font-bold">category</span>
                </div>
                <h2 className="text-xl font-bold tracking-tight uppercase">Geometric<span className="text-primary">CV</span></h2>
            </div>
            <nav className="hidden md:flex items-center gap-10">
                <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Templates</a>
                <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Features</a>
                <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Showcase</a>
                <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Pricing</a>
            </nav>
            <div className="flex items-center gap-4">
                <button className="hidden sm:block text-sm font-bold px-6 py-2 hover:text-primary transition-colors">Login</button>
                <button className="bg-primary text-background-dark text-sm font-bold px-6 py-2.5 rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                    Start Building
                </button>
            </div>
        </header>
    );
};

export default Navbar;
