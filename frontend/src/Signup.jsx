import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="relative min-h-screen bg-[#0f0f1a] text-white font-display overflow-x-hidden">
            {/* Background Decorative Elements - Kinetic Geometry */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-[#f4c025]/30 to-transparent blur-xl animate-pulse"></div>
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-500/20 to-transparent blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-[60%] left-[5%] w-48 h-48 border-[30px] border-[#f4c025]/10 rounded-full blur-sm"></div>
                <div className="absolute top-[20%] right-[25%] w-32 h-32 border-[15px] border-indigo-400/20 rounded-full blur-md"></div>

                {/* 3D Assets from the template */}
                <img
                    alt="Floating sphere"
                    className="absolute top-[15%] right-[10%] w-40 h-40 object-cover rounded-full opacity-40 mix-blend-screen animate-bounce"
                    style={{ animationDuration: '6s' }}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGnCFK6sKhdyxJbKF0dP4OA8n9XN79ppNSaxAeFiBw9FQq0zIY7oRzNUbmsyJ-RaH6czchRD4u7xmtzo_yGgb9__pclrPhKtsAvok-SzjocoWv-tmVw7BSUCiQIuX8twuIVoZSyUv_RgWSP2rQm_uvga-g1NjQ4ttxwLlv79ineMRzqNdEVkcSfThBzazcUL-NWYdMIqE6D4I8I2ajFhEsP8cAaDOeedJ3auJUTODs3oIeqzzfVvKAUQ7Y07zlcQ_JyusKTRe1zHk"
                />
                <img
                    alt="Floating torus"
                    className="absolute bottom-[10%] left-[20%] w-56 h-56 object-cover rounded-full opacity-30 mix-blend-lighten animate-spin"
                    style={{ animationDuration: '12s' }}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpmU5efIxY5DisUBwUEd-wQkMBnYBWC99aOrhVP067XC97rzU1Zq6_0T6Lhnk618FVnRNIryMy6CuQ8a90479T5O6F8yFrt081tuRsuEWkGxEBcYlCnC43JU9UCi0OrHuhCaYS0NiGw7JzHwr2dOLiGuxZsVMLdo-MEzc8zOf0tMcoCPHdTIjlGNt3nKoZwPoZCGoPfcenMOaH32gso10w_B3xGlaLDdtDwNxCU7faX6GyKEwvzE9-UonVG3x4K79rorvlRNYLdS8"
                />
            </div>

            {/* Header */}
            <header className="relative z-20 flex items-center justify-between px-6 py-6 lg:px-20">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#f4c025]">
                        <span className="material-symbols-outlined text-[#1a1a2e] font-bold">category</span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight uppercase">Geometric<span className="text-[#f4c025]">CV</span></h2>
                </div>
                <div className="flex items-center gap-8">
                    <a className="text-sm font-medium hover:text-[#f4c025] transition-colors" href="#">Templates</a>
                    <Link to="/login" className="text-sm font-medium hover:text-[#f4c025] transition-colors">Login</Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-6 py-12">
                <div className="w-full max-w-xl">
                    <div className="text-center mb-10">
                        <h1 className="text-5xl md:text-6xl font-black mb-4 leading-none tracking-tighter">
                            <span className="ink-mask-text">Join The Future</span>
                        </h1>
                        <p className="text-slate-400 font-light text-lg">Create your professional identity with kinetic precision.</p>
                    </div>

                    <div className="bg-[#1a1a2e] border-t-4 border-[#f4c025] p-10 md:p-12 shadow-2xl relative">
                        {/* Decorative corner element */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-[#f4c025]/10 flex items-center justify-center overflow-hidden">
                            <div className="absolute w-20 h-1 bg-[#f4c025]/20 rotate-45"></div>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400">First Name</label>
                                    <input
                                        className="w-full bg-indigo-900/30 border border-slate-700 text-white focus:border-[#f4c025] focus:ring-0 px-4 py-3 placeholder:text-slate-600 transition-all outline-none"
                                        placeholder="John"
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400">Last Name</label>
                                    <input
                                        className="w-full bg-indigo-900/30 border border-slate-700 text-white focus:border-[#f4c025] focus:ring-0 px-4 py-3 placeholder:text-slate-600 transition-all outline-none"
                                        placeholder="Doe"
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                                <input
                                    className="w-full bg-indigo-900/30 border border-slate-700 text-white focus:border-[#f4c025] focus:ring-0 px-4 py-3 placeholder:text-slate-600 transition-all outline-none"
                                    placeholder="john@example.com"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400">Password</label>
                                <input
                                    className="w-full bg-indigo-900/30 border border-[#f4c025] text-white focus:border-[#f4c025] focus:ring-0 px-4 py-3 placeholder:text-slate-600 transition-all outline-none"
                                    placeholder="••••••••"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    style={{ boxShadow: '0 0 15px rgba(244, 192, 37, 0.4)' }}
                                />
                                <p className="text-[10px] text-[#f4c025] mt-1 font-bold uppercase tracking-tighter">Password must be at least 12 characters</p>
                            </div>

                            <div className="flex items-start gap-3 py-2">
                                <input className="mt-1 bg-indigo-900/30 border-slate-700 text-[#f4c025] focus:ring-[#f4c025] rounded-none cursor-pointer" type="checkbox" />
                                <label className="text-xs text-slate-400 leading-relaxed">
                                    I agree to the <a className="text-[#f4c025] hover:underline" href="#">Terms of Service</a> and <a className="text-[#f4c025] hover:underline" href="#">Privacy Policy</a> regarding my geometric data.
                                </label>
                            </div>

                            <button className="w-full bg-[#f4c025] text-[#1a1a2e] py-4 text-lg font-black uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                                Create Account
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </form>

                        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col gap-4">
                            <button className="w-full border border-slate-700 py-3 flex items-center justify-center gap-3 text-sm font-bold hover:bg-white/5 transition-colors">
                                <img
                                    alt="Google icon"
                                    className="w-5 h-5"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmjc-0NSbH440xncKOCxjO6jpHO4yufRl7Nq54sUUfXsBUqFUib0Br9PPCmRHWOayw3C4qn-npd8UU6wHOfxOvC2di01RkonBJht3AtdmPECwOcuvKZqiiL_hhD92OHEdIZ4OoRA4LZ-Ns3f1lbnXKfKZpq-xA2w9bPGq_mAjwmd1ghmjaPN4DsAovuFNof8WMIzzj_oiOv1VAZsph9i9KrjhwA21RA8KO9j71oONRZ29mNWRzh7CEoaoF3AfI6Z52xe-WBTBeUZ8"
                                />
                                Sign up with Google
                            </button>
                            <p className="text-center text-sm text-slate-500">
                                Already have an account? <Link to="/login" className="text-white hover:text-[#f4c025] transition-colors font-bold">Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="relative z-20 w-full px-6 py-8 text-center md:text-left md:flex justify-between items-center text-[10px] font-bold tracking-[0.2em] text-slate-600 uppercase">
                <p>© 2024 Abstract Geometry CV. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0 justify-center">
                    <a className="hover:text-[#f4c025]" href="#">Status</a>
                    <a className="hover:text-[#f4c025]" href="#">Security</a>
                    <a className="hover:text-[#f4c025]" href="#">Support</a>
                </div>
            </footer>
        </div>
    );
};

export default Signup;
