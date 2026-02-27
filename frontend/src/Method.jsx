import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const methods = [
    {
        id: 'scratch',
        icon: 'edit_square',
        title: 'Start from Scratch',
        description: 'Build your resume step-by-step with our guided editor. Full control over every detail.',
        badge: 'Most Popular',
        badgeColor: 'bg-primary/20 text-primary',
        gradient: 'from-primary/20 to-indigo-500/10',
        border: 'border-primary/30',
        glow: 'shadow-primary/20',
    },
    {
        id: 'ai',
        icon: 'auto_awesome',
        title: 'Build with AI',
        description: 'Answer a few questions and let our AI craft a professional resume tailored to your career.',
        badge: 'Recommended',
        badgeColor: 'bg-indigo-500/20 text-indigo-400',
        gradient: 'from-indigo-500/20 to-purple-500/10',
        border: 'border-indigo-400/30',
        glow: 'shadow-indigo-400/20',
    },
    {
        id: 'upload',
        icon: 'upload_file',
        title: 'Upload Existing Resume',
        description: 'Import your current resume and enhance it with our powerful formatting and AI suggestions.',
        badge: 'Quick Start',
        badgeColor: 'bg-emerald-500/20 text-emerald-400',
        gradient: 'from-emerald-500/20 to-teal-500/10',
        border: 'border-emerald-400/30',
        glow: 'shadow-emerald-400/20',
    },
];

function Method() {
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();

    const handleContinue = () => {
        if (selected) {
            navigate('/signup');
        }
    };

    return (
        <div className="dark min-h-screen bg-background-dark font-display text-slate-100 flex flex-col">
            {/* Floating Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-15%] left-[-10%] w-[45rem] h-[45rem] rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[50rem] h-[50rem] rounded-full bg-indigo-600/10 blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-[40%] left-[50%] w-64 h-64 rounded-full bg-purple-500/5 blur-2xl"></div>
            </div>

            {/* Header */}
            <header className="relative z-10 flex items-center justify-between px-6 py-5 lg:px-20 border-b border-white/10 backdrop-blur-md bg-white/5">
                <Link to="/" className="flex items-center gap-3">
                    <div className="p-2 bg-primary rounded-lg">
                        <span className="material-symbols-outlined text-background-dark font-bold">category</span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight uppercase">
                        Geometric<span className="text-primary">CV</span>
                    </h2>
                </Link>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="hidden sm:inline">Already have an account?</span>
                    <Link to="/login" className="text-primary font-bold hover:underline">Sign in</Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 py-16">
                {/* Progress Indicator */}
                <div className="flex items-center gap-2 mb-10">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-xs font-black text-background-dark">1</div>
                        <span className="text-xs font-bold text-primary hidden sm:inline">Choose Method</span>
                    </div>
                    <div className="w-10 h-px bg-white/20"></div>
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-bold text-slate-400">2</div>
                        <span className="text-xs font-bold text-slate-500 hidden sm:inline">Create Account</span>
                    </div>
                    <div className="w-10 h-px bg-white/20"></div>
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-bold text-slate-400">3</div>
                        <span className="text-xs font-bold text-slate-500 hidden sm:inline">Build Resume</span>
                    </div>
                </div>

                {/* Heading */}
                <div className="text-center mb-12 max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
                        How would you like to{' '}
                        <span className="text-primary">get started?</span>
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Choose the method that works best for you. You can always switch later.
                    </p>
                </div>

                {/* Method Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-10">
                    {methods.map((method) => (
                        <button
                            key={method.id}
                            onClick={() => setSelected(method.id)}
                            className={`
                                relative text-left rounded-2xl border p-8 transition-all duration-300 group
                                bg-gradient-to-br ${method.gradient}
                                ${selected === method.id
                                    ? `${method.border} shadow-2xl ${method.glow} scale-105`
                                    : 'border-white/10 hover:border-white/30 hover:scale-102 hover:shadow-xl'
                                }
                            `}
                        >
                            {/* Badge */}
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-6 ${method.badgeColor}`}>
                                {method.badge}
                            </span>

                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300
                                ${selected === method.id ? 'bg-primary text-background-dark' : 'bg-white/10 text-slate-300 group-hover:bg-white/20'}
                            `}>
                                <span className="material-symbols-outlined text-3xl">{method.icon}</span>
                            </div>

                            {/* Text */}
                            <h3 className="text-xl font-black text-white mb-2">{method.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{method.description}</p>

                            {/* Selected Indicator */}
                            {selected === method.id && (
                                <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-sm text-background-dark font-bold">check</span>
                                </div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Continue Button */}
                <button
                    onClick={handleContinue}
                    disabled={!selected}
                    className={`
                        flex items-center gap-3 px-12 py-5 rounded-full text-lg font-black uppercase tracking-tight transition-all duration-300
                        ${selected
                            ? 'bg-primary text-background-dark shadow-2xl shadow-primary/30 hover:scale-105 cursor-pointer'
                            : 'bg-white/10 text-slate-500 cursor-not-allowed'
                        }
                    `}
                >
                    Continue
                    <span className="material-symbols-outlined">arrow_forward</span>
                </button>

                {selected && (
                    <p className="mt-4 text-xs text-slate-500">
                        You selected: <span className="text-primary font-bold">{methods.find(m => m.id === selected)?.title}</span>
                    </p>
                )}
            </main>
        </div>
    );
}

export default Method;
