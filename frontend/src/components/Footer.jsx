import React from 'react';

const Footer = () => {
    return (
        <footer className="py-20 px-6 lg:px-20 text-center">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-8 border border-primary/30">
                    <span className="material-symbols-outlined text-3xl text-primary">auto_awesome</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to reshape your career?</h2>
                <button className="bg-primary text-background-dark px-12 py-6 rounded-full text-xl font-black uppercase tracking-tight shadow-xl shadow-primary/30 hover:scale-110 transition-transform">
                    Create Your Resume Now
                </button>
                <div className="mt-16 flex gap-8 opacity-40 grayscale">
                    <span className="text-sm font-bold">FORBES</span>
                    <span className="text-sm font-bold">WIRED</span>
                    <span className="text-sm font-bold">THE VERGE</span>
                    <span className="text-sm font-bold">TECHCRUNCH</span>
                </div>
            </div>
            <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 font-medium">
                <p>© 2024 Abstract Geometry CV Builder. All rights reserved.</p>
                <div className="flex gap-8">
                    <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                    <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
                    <a className="hover:text-primary transition-colors" href="#">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
