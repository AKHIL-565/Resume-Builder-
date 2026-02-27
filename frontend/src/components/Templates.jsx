import React from 'react';

const Templates = () => {
    return (
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
    );
};

export default Templates;
