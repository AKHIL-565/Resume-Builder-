import React from 'react';
import { Link } from 'react-router-dom';

function Method() {
    return (
        <div className="bg-background-dark font-display text-white transition-colors duration-300 min-h-screen">
            <div className="relative min-h-screen overflow-hidden flex flex-col">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] rounded-full bg-primary/20 floating-shape"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50rem] h-[50rem] rounded-full bg-yellow-900/10 floating-shape"></div>
                </div>
                <div className="relative z-10 flex flex-col min-h-screen">
                    {/* Header */}
                    <header className="flex items-center justify-between px-6 py-6 lg:px-20 z-50">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary rounded-lg">
                                <span className="material-symbols-outlined text-background-dark font-bold">category</span>
                            </div>
                            <h2 className="text-xl font-bold tracking-tight uppercase font-geometric">
                                Geometric<span className="text-primary">CV</span>
                            </h2>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link to="/" className="text-sm font-semibold px-6 py-2.5 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
                                Back to Home
                            </Link>
                        </div>
                    </header>
                    {/* Main Content */}
                    <main className="flex-grow flex flex-col items-center justify-center px-6 py-12">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                                How will you make your <span className="text-primary">resume?</span>
                            </h1>
                            <p className="text-lg text-slate-400 max-w-xl mx-auto font-light">
                                Select a path to begin. Whether you have an existing CV or want a fresh start, we've got the tools to help you stand out.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-4">
                            {/* Card 1 */}
                            <div className="glass-card group p-10 rounded-3xl cursor-pointer flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors relative">
                                    <span className="material-symbols-outlined text-5xl text-primary transition-transform group-hover:scale-110">upload_file</span>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-background-dark text-sm font-bold">add</span>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">I already have a resume</h3>
                                <p className="text-slate-400 leading-relaxed mb-8">
                                    Upload your existing resume to make quick edits or refresh your style with our geometric templates.
                                </p>
                                <div className="mt-auto">
                                    <span className="text-primary font-bold inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                        Upload file <span className="material-symbols-outlined">arrow_forward</span>
                                    </span>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="glass-card group p-10 rounded-3xl cursor-pointer flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors relative">
                                    <span className="material-symbols-outlined text-5xl text-primary transition-transform group-hover:scale-110">magic_button</span>
                                    <div className="absolute -top-1 -right-1">
                                        <span className="material-symbols-outlined text-primary/40 animate-pulse">colors_spark</span>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Start from scratch</h3>
                                <p className="text-slate-400 leading-relaxed mb-8">
                                    Our AI will guide you through creating a professional resume from the ground up in minutes.
                                </p>
                                <div className="mt-auto">
                                    <span className="text-primary font-bold inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                        Create with AI <span className="material-symbols-outlined">arrow_forward</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16 text-slate-500 text-sm flex items-center gap-2">
                            <span className="material-symbols-outlined text-base">verified_user</span>
                            All your data is encrypted and secure
                        </div>
                    </main>
                    {/* Footer */}
                    <footer className="py-12 px-6 lg:px-20 border-t border-white/5">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-slate-500 font-medium">
                                <div className="flex items-center gap-3 opacity-60">
                                    <div className="p-1.5 bg-slate-500 rounded-md">
                                        <span className="material-symbols-outlined text-background-dark text-[14px] font-bold">category</span>
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest font-geometric">GeometricCV</span>
                                </div>
                                <p>© 2024 Abstract Geometry CV Builder. All rights reserved.</p>
                                <div className="flex gap-8">
                                    <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                                    <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
                                    <a className="hover:text-primary transition-colors" href="#">Support</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default Method;
