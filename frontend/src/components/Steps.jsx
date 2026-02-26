import React from 'react';

const Steps = () => {
    return (
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
    );
};

export default Steps;
