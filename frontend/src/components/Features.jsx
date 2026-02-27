import React from 'react';

const Features = () => {
    return (
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
    );
};

export default Features;
