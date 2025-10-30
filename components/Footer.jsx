"use client";

import React, { useState, useEffect } from "react";

const Footer = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const experiences = [
        {
            year: "2025 - Present",
            title: "Infusyx Services Pvt. Ltd.",
            role: "UI/UX Designer",
        },
        // {
        //     year: "2024 - Present",
        //     title: "UX Club NYU",
        //     role: "President & Founder",
        // },
        // {
        //     year: "2025",
        //     title: "Uber",
        //     role: "Product Design Intern",
        // },
        // {
        //     year: "2025 - Present",
        //     title: "NYU Tisch",
        //     role: "User Experience Course Teaching Assistant",
        // },
    ];

    return (
        <footer id="experience" className="bg-black text-white px-6 sm:px-10 py-12 md:py-20 w-full">
            <div className="max-w-7xl mx-auto">
                {/* Header */}

                {/* Experiences Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  text-gray-200">
                <h2 className="text-4xl sm:text-5xl font-bold mb-12">Experiences</h2>
                    {experiences.map((exp, i) => (
                        <div key={i} className="space-y-1">
                            <p className="text-gray-400 text-sm md:text-lg">{exp.year}</p>
                            <h3 className="font-semibold text-white text-lg">{exp.title}</h3>
                            <p className="text-gray-400 text-sm md:text-lg leading-snug">{exp.role}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom section */}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-16 gap-6">
                    {/* Contacts */}
                        <p className="text-gray-300 text-sm mb-3 tracking-wide">CONTACTS</p>
                    <div className="text-left w-full sm:w-auto">
                        <div className="flex gap-3 flex-wrap">
                            <button className="cursor-pointer px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
                                Linkedin
                            </button>
                            <button className="cursor-pointer px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
                                Email
                            </button>
                            <button className="cursor-pointer px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
                                Resume
                            </button>
                        </div>
                    </div>

                    {/* Clock */}
                    <div className="text-gray-400 text-sm">
                        {time.toLocaleTimeString()}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
