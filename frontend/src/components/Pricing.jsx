import React from 'react';

const Pricing = () => {
    return (
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
    );
};

export default Pricing;
