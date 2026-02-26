import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch initial data if needed
        // fetch('http://localhost:5000/api/resume').then(...)
    }, []);

    return (
        <div className="dark">
            <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 transition-colors duration-300 min-h-screen">
                <div className="relative min-h-screen overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                        <div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] rounded-full bg-primary/20 floating-shape"></div>
                        <div className="absolute bottom-[-20%] right-[-10%] w-[50rem] h-[50rem] rounded-full bg-indigo-600/20 floating-shape"></div>
                        <div className="absolute top-[20%] right-[15%] w-64 h-64 border-[40px] border-primary/10 rounded-full floating-shape"></div>
                    </div>

                    <div className="relative z-10 flex flex-col min-h-screen">
                        {/* Navigation */}
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

                        {/* Hero Section */}
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

                        {/* Three Simple Steps */}
                        <section className="py-24 bg-white dark:bg-background-dark">
                            <div className="max-w-7xl mx-auto px-6">
                                <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
                                    <h2 className="text-3xl md:text-5xl font-black text-navy dark:text-white tracking-tight">Three Simple Steps</h2>
                                    <p className="text-slate-600 dark:text-slate-400">Get your professional resume ready for your next career move in less than 10 minutes.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                    <div className="flex flex-col items-center text-center space-y-6 group">
                                        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:shadow-primary/30">
                                            <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white transition-colors">dashboard_customize</span>
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-bold text-navy dark:text-white">1. Pick a Template</h3>
                                            <p className="text-slate-500 dark:text-slate-400">Choose from dozens of professional designs vetted by top-tier recruiters.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center text-center space-y-6 group">
                                        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:shadow-primary/30">
                                            <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white transition-colors">edit_note</span>
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-bold text-navy dark:text-white">2. Add Content</h3>
                                            <p className="text-slate-500 dark:text-slate-400">Our AI assistant writes persuasive bullet points and professional summaries for you.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center text-center space-y-6 group">
                                        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:shadow-primary/30">
                                            <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white transition-colors">download_for_offline</span>
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-bold text-navy dark:text-white">3. Download & Apply</h3>
                                            <p className="text-slate-500 dark:text-slate-400">Download your ATS-optimized PDF and start applying to your dream jobs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Template Gallery */}
                        <section className="py-24 bg-slate-50 dark:bg-slate-900/40">
                            <div className="max-w-7xl mx-auto px-6">
                                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                                    <div className="space-y-4">
                                        <h2 className="text-3xl md:text-5xl font-black text-navy dark:text-white tracking-tight">Modern Resume Templates</h2>
                                        <p className="text-slate-600 dark:text-slate-400">Scientifically designed to catch a recruiter's eye.</p>
                                    </div>
                                    <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                        View all 30+ templates <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                </div>
                                <div className="flex gap-8 overflow-x-auto pb-8 snap-x no-scrollbar">
                                    <div className="min-w-[320px] snap-center group relative cursor-pointer">
                                        <div className="relative rounded-xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-800">
                                            <img className="w-full h-auto" alt="Modern minimalist resume template design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDicvOjZOrXTpNj5btgx2S7hVm3h3_G_jieZVbAccd9uyAINkxvq2IK-laD6Lf_C1LTM0fnRmpf7I78_Ky6Ua0GcvJy-4UNcisUyc-3ZMgRmprRJhWtEICfHYNdtLxljUh_wIF1xVpq1AjcIBoE_qbc8KorNt3QBycakyut07zXns9fNiNOs4LjqqvxT0D3V8q2x06coKJ8NdKlYvA9Bi53gDRyD84gri28fLgQcry3qkKXUYPEbS65xQXJEFq9OePN5mf0Aixtmoo" />
                                            <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold">Live Preview</button>
                                            </div>
                                        </div>
                                        <p className="mt-4 font-bold text-navy dark:text-white">The Executive</p>
                                        <p className="text-sm text-slate-500">Minimalist & Clean</p>
                                    </div>
                                    <div className="min-w-[320px] snap-center group relative cursor-pointer">
                                        <div className="relative rounded-xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-800">
                                            <img className="w-full h-auto" alt="Creative professional resume template with green accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIXF3xZHc1tELjCeHfBU5FV5KFULXeXoJ3FaTW0QUquwxAS1lcMQCEssLPxHmkcYYT3rFT7rW81upbBmJ8OoNNOm0Rz6rncXzmzJ7Ux58mmEw_wsuxDySfjISBdripcMKUHhVFBk2aMInsUlm0QWGfQzPmqZkKWFKySAq_v5cO5yDWGFat-14oQwxE3iwKgI23-qim5MgHw3RhrXITUqFSevNKQE0FjUgFBXSMBY1kJd4MhWt96nYLqU8os75Rsf8x3lHy0_OwVu8" />
                                            <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold">Live Preview</button>
                                            </div>
                                        </div>
                                        <p className="mt-4 font-bold text-navy dark:text-white">The Creative</p>
                                        <p className="text-sm text-slate-500">Bold & Artistic</p>
                                    </div>
                                    <div className="min-w-[320px] snap-center group relative cursor-pointer">
                                        <div className="relative rounded-xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-800">
                                            <img className="w-full h-auto" alt="Technical developer resume template with clean sidebar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6jF-W6UwOSMSecpMfhyi6PeRGGeTa5wTBHpkdGGVRuDRFHMW9FHG4YpuBcEXqZtRaElATHduTzbaO71dRLnoXif4P_i8gtI4MeszaLg9oRIHf87SutKwuwAyE2iPKAI3nl6X6_za9WbYpshYu-e6Fzl4MK9-QyLmeHdwnmTijgCHM4pxGXHCitjxy3YjJYdbq5SE5mjSvpi8My4Ls_E-UWGgRUoU7PjiJADhGSsPm_4W-Vh-B_VPkDh2P6EgkHHsYBZ1CGqJETis" />
                                            <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold">Live Preview</button>
                                            </div>
                                        </div>
                                        <p className="mt-4 font-bold text-navy dark:text-white">Tech Master</p>
                                        <p className="text-sm text-slate-500">Structured & Efficient</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Features Grid */}
                        <section className="py-24 bg-white dark:bg-background-dark">
                            <div className="max-w-7xl mx-auto px-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
                                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                                            <span className="material-symbols-outlined text-primary">psychology</span>
                                        </div>
                                        <h4 className="text-xl font-bold text-navy dark:text-white mb-3">AI Writing Assistant</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Don't know what to write? Our AI suggests professional phrases tailored to your role.</p>
                                    </div>
                                    <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
                                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                                            <span className="material-symbols-outlined text-primary">robot</span>
                                        </div>
                                        <h4 className="text-xl font-bold text-navy dark:text-white mb-3">ATS-Friendly</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Ensure your resume passes through Applicant Tracking Systems without issues.</p>
                                    </div>
                                    <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
                                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                                            <span className="material-symbols-outlined text-primary">cloud_done</span>
                                        </div>
                                        <h4 className="text-xl font-bold text-navy dark:text-white mb-3">Auto-Save</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Every change you make is instantly saved to the cloud. Never lose your progress again.</p>
                                    </div>
                                    <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
                                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                                            <span className="material-symbols-outlined text-primary">share</span>
                                        </div>
                                        <h4 className="text-xl font-bold text-navy dark:text-white mb-3">Shareable Link</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Create a live link to your resume to share on LinkedIn or with hiring managers.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Pricing Section */}
                        <section className="py-24 px-6 lg:px-20 bg-white/5 backdrop-blur-md border-y border-white/10">
                            <div className="max-w-6xl mx-auto">
                                <div className="text-center mb-16">
                                    <h2 className="text-4xl font-bold mb-4">Pricing for Every Career Stage</h2>
                                    <p className="text-slate-400">Join 50,000+ professionals using abstract design to win roles.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {/* Free Plan */}
                                    <div className="flex flex-col p-8 rounded-3xl border border-white/10 bg-background-dark transition-all hover:border-white/30">
                                        <div className="mb-8">
                                            <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Essential</h4>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-4xl font-black">$0</span>
                                                <span className="text-slate-500">/mo</span>
                                            </div>
                                        </div>
                                        <ul className="flex-grow space-y-4 mb-8">
                                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                                <span className="material-symbols-outlined text-primary text-sm">check_circle</span> 5 Basic Templates
                                            </li>
                                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                                <span className="material-symbols-outlined text-primary text-sm">check_circle</span> PDF Exports
                                            </li>
                                            <li className="flex items-center gap-3 text-sm text-slate-300 opacity-40">
                                                <span className="material-symbols-outlined text-sm">cancel</span> Custom 3D Assets
                                            </li>
                                        </ul>
                                        <button className="w-full py-4 rounded-xl border border-white/20 font-bold hover:bg-white/5 transition-colors">Start Free</button>
                                    </div>

                                    {/* Pro Plan */}
                                    <div className="flex flex-col p-8 rounded-3xl border-2 border-primary bg-background-dark relative scale-105 shadow-2xl shadow-primary/10">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-background-dark px-4 py-1 rounded-full text-xs font-black uppercase">Most Popular</div>
                                        <div className="mb-8">
                                            <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Professional</h4>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-4xl font-black">$12</span>
                                                <span className="text-slate-500">/mo</span>
                                            </div>
                                        </div>
                                        <ul className="flex-grow space-y-4 mb-8">
                                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                                <span className="material-symbols-outlined text-primary text-sm">check_circle</span> Unlimited Templates
                                            </li>
                                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                                <span className="material-symbols-outlined text-primary text-sm">check_circle</span> 3D Geometric Assets
                                            </li>
                                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                                <span className="material-symbols-outlined text-primary text-sm">check_circle</span> Premium Support
                                            </li>
                                        </ul>
                                        <button className="w-full py-4 rounded-xl bg-primary text-background-dark font-bold hover:scale-[1.02] transition-transform">Get Started</button>
                                    </div>

                                    {/* Studio Plan */}
                                    <div className="flex flex-col p-8 rounded-3xl border border-white/10 bg-background-dark transition-all hover:border-white/30">
                                        <div className="mb-8">
                                            <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Studio</h4>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-4xl font-black">$29</span>
                                                <span className="text-slate-500">/mo</span>
                                            </div>
                                        </div>
                                        <ul className="flex-grow space-y-4 mb-8">
                                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                                <span className="material-symbols-outlined text-primary text-sm">check_circle</span> Custom Video Masks
                                            </li>
                                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                                <span className="material-symbols-outlined text-primary text-sm">check_circle</span> White-label Exports
                                            </li>
                                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                                <span className="material-symbols-outlined text-primary text-sm">check_circle</span> Custom API Access
                                            </li>
                                        </ul>
                                        <button className="w-full py-4 rounded-xl border border-white/20 font-bold hover:bg-white/5 transition-colors">Join Studio</button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CTA Footer */}
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
