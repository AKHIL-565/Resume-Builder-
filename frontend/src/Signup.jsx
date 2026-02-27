import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await axios.post('http://localhost:5000/api/auth/signup', { name, email, password });
            navigate('/login'); // Redirect to login after successful signup
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="relative min-h-screen bg-[#0f0f1a] text-white font-display overflow-hidden selection:bg-primary selection:text-midnight-indigo">
            {/* Background Shapes */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="kinetic-shape absolute top-[5%] right-[10%] w-80 h-80 rounded-full bg-gradient-to-bl from-primary/20 to-transparent blur-2xl"></div>
                <div className="kinetic-shape absolute bottom-[15%] left-[5%] w-72 h-72 rounded-full bg-gradient-to-tr from-indigo-500/20 to-transparent blur-3xl"></div>
                <div className="kinetic-shape absolute top-[40%] right-[20%] w-40 h-40 border-[20px] border-primary/5 rounded-full blur-md"></div>
            </div>

            <header className="relative z-20 flex items-center justify-between px-6 py-6 lg:px-20">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="p-2 bg-primary transition-transform group-hover:scale-110">
                        <span className="material-symbols-outlined text-midnight-indigo font-bold">category</span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight uppercase">Geometric<span className="text-primary">CV</span></h2>
                </Link>
                <div className="flex items-center gap-8">
                    <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Templates</Link>
                    <Link to="/login" className="text-sm font-medium hover:text-primary transition-colors">Login</Link>
                </div>
            </header>

            <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-6 py-12">
                <div className="w-full max-w-xl">
                    <div className="text-center mb-10">
                        <h1 className="text-5xl md:text-6xl font-black mb-4 leading-none tracking-tighter">
                            <span className="ink-mask-text">Join the Future</span>
                        </h1>
                        <p className="text-slate-400 font-light text-lg">Start your geometric career journey today.</p>
                    </div>

                    <div className="bg-midnight-indigo border-t-4 border-primary p-10 md:p-12 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 flex items-center justify-center overflow-hidden">
                            <div className="absolute w-20 h-1 bg-primary/20 rotate-45"></div>
                        </div>

                        {error && (
                            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-bold">
                                {error}
                            </div>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                                <input
                                    className="w-full bg-indigo-900/30 border border-slate-700 text-white focus:border-primary focus:ring-0 px-4 py-3 placeholder:text-slate-600 transition-all outline-none"
                                    placeholder="Enter your name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                                <input
                                    className="w-full bg-indigo-900/30 border border-slate-700 text-white focus:border-primary focus:ring-0 px-4 py-3 placeholder:text-slate-600 transition-all outline-none"
                                    placeholder="Enter your email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400">Password</label>
                                <input
                                    className="w-full bg-indigo-900/30 border border-slate-700 text-white focus:border-primary focus:ring-0 px-4 py-3 placeholder:text-slate-600 transition-all outline-none"
                                    placeholder="••••••••"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-midnight-indigo py-4 text-lg font-black uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group/btn"
                            >
                                CREATE ACCOUNT
                                <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </form>

                        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col gap-4">
                            <p className="text-center text-sm text-slate-500">
                                Already have an account? <Link to="/login" className="text-white hover:text-primary transition-colors font-bold underline underline-offset-4 decoration-primary/30">Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="relative z-20 w-full px-6 py-8 text-center md:text-left md:flex justify-between items-center text-[10px] font-bold tracking-[0.2em] text-slate-600 uppercase">
                <p>© 2024 Kinetic Geometry CV. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Signup;
