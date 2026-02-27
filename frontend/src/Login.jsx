import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            localStorage.setItem('token', response.data.token);
            navigate('/'); // Redirect to home after login
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="relative min-h-screen bg-[#0f0f1a] text-white font-display overflow-hidden selection:bg-primary selection:text-midnight-indigo">
            {/* Background Shapes */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="kinetic-shape absolute top-[10%] left-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-xl"></div>
                <div className="kinetic-shape absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-500/20 to-transparent blur-2xl"></div>
                <div className="kinetic-shape absolute top-[60%] left-[5%] w-48 h-48 border-[30px] border-primary/10 rounded-full blur-sm"></div>
                <div className="kinetic-shape absolute top-[20%] right-[25%] w-32 h-32 border-[15px] border-indigo-400/20 rounded-full blur-md"></div>

                <img
                    alt="Floating sphere"
                    className="kinetic-shape absolute top-[15%] right-[10%] w-40 h-40 object-cover rounded-full opacity-40 mix-blend-screen"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGnCFK6sKhdyxJbKF0dP4OA8n9XN79ppNSaxAeFiBw9FQq0zIY7oRzNUbmsyJ-RaH6czchRD4u7xmtzo_yGgb9__pclrPhKtsAvok-SzjocoWv-tmVw7BSUCiQIuX8twuIVoZSyUv_RgWSP2rQm_uvga-g1NjQ4ttxwLlv79ineMRzqNdEVkcSfThBzazcUL-NWYdMIqE6D4I8I2ajFhEsP8cAaDOeedJ3auJUTODs3oIeqzzfVvKAUQ7Y07zlcQ_JyusKTRe1zHk"
                />
                <img
                    alt="Floating torus"
                    className="kinetic-shape absolute bottom-[10%] left-[20%] w-56 h-56 object-cover rounded-full opacity-30 mix-blend-lighten"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpmU5efIxY5DisUBwUEd-wQkMBnYBWC99aOrhVP067XC97rzU1Zq6_0T6Lhnk618FVnRNIryMy6CuQ8a90479T5O6F8yFrt081tuRsuEWkGxEBcYlCnC43JU9UCi0OrHuhCaYS0NiGw7JzHwr2dOLiGuxZsVMLdo-MEzc8zOf0tMcoCPHdTIjlGNt3nKoZwPoZCGoPfcenMOaH32gso10w_B3xGlaLDdtDwNxCU7faX6GyKEwvzE9-UonVG3x4K79rorvlRNYLdS8"
                />
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
                    <Link to="/login" className="text-sm font-medium text-primary">Login</Link>
                </div>
            </header>

            <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-6 py-12">
                <div className="w-full max-w-xl">
                    <div className="text-center mb-10">
                        <h1 className="text-5xl md:text-6xl font-black mb-4 leading-none tracking-tighter">
                            <span className="ink-mask-text">Welcome Back</span>
                        </h1>
                        <p className="text-slate-400 font-light text-lg">Continue your geometric career journey.</p>
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
                                <div className="flex justify-between items-center">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400">Password</label>
                                    <a className="text-[10px] text-primary/80 hover:text-primary font-bold uppercase tracking-widest transition-colors" href="#">Forgot Password?</a>
                                </div>
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
                                LOGIN
                                <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </form>

                        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col gap-4">
                            <button className="w-full border border-slate-700 py-3 flex items-center justify-center gap-3 text-sm font-bold hover:bg-white/5 transition-colors">
                                <img
                                    alt="Google icon"
                                    className="w-5 h-5"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmjc-0NSbH440xncKOCxjO6jpHO4yufRl7Nq54sUUfXsBUqFUib0Br9PPCmRHWOayw3C4qn-npd8UU6wHOfxOvC2di01RkonBJht3AtdmPECwOcuvKZqiiL_hhD92OHEdIZ4OoRA4LZ-Ns3f1lbnXKfKZpq-xA2w9bPGq_mAjwmd1ghmjaPN4DsAovuFNof8WMIzzj_oiOv1VAZsph9i9KrjhwA21RA8KO9j71oONRZ29mNWRzh7CEoaoF3AfI6Z52xe-WBTBeUZ8"
                                />
                                Sign in with Google
                            </button>
                            <p className="text-center text-sm text-slate-500">
                                New user? <Link to="/signup" className="text-white hover:text-primary transition-colors font-bold underline underline-offset-4 decoration-primary/30">Create an account</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="relative z-20 w-full px-6 py-8 text-center md:text-left md:flex justify-between items-center text-[10px] font-bold tracking-[0.2em] text-slate-600 uppercase">
                <p>© 2024 Kinetic Geometry CV. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0 justify-center">
                    <a className="hover:text-primary transition-colors" href="#">Status</a>
                    <a className="hover:text-primary transition-colors" href="#">Security</a>
                    <a className="hover:text-primary transition-colors" href="#">Support</a>
                </div>
            </footer>
        </div>
    );
};

export default Login;
