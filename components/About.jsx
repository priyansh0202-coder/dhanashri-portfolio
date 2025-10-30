"use client";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="bg-[#0d0d0d] text-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left Text Section */}
            <div className="md:w-1/2 space-y-5 leading-relaxed">
                <p className="text-gray-300 text-lg">
                    ↳
                </p>
                <p className="text-xl md:text-2xl font-medium">
                    Hi, I’m <span className="font-semibold text-white">DHANASHRI!</span> A Pune Based UIUX
                    designer who transforms pixels into storytelling, interactive worlds,
                    and matcha-fueled creations.
                </p>

                <p className="text-lg text-gray-300">
                    I’m currently pursuing my Bachleors in UIUX  at
                    AT PUNE, and I’ve brought my
                    craft to companies like Uber designing experiences that connect people
                    and culture.
                </p>

                <p className="text-lg text-gray-300">
                    Contact me at{" "}
                    <a
                        href="mailto:queenie2000824@gmail.com"
                        className="underline text-white hover:text-gray-400 transition"
                    >
                        dhanashri@gmail.com
                    </a>{" "}
                    to learn more!
                </p>
            </div>

            {/* Right Image Section */}
            <div className="md:w-1/2 flex justify-center">
                <div className="w-[280px] md:w-[380px] lg:w-[420px]">
                    <Image
                        src="/girl-img.avif" // make sure the image is placed inside public folder
                        alt="Girl Illustration"
                        width={320}
                        height={320}
                        className="object-contain w-full h-[350px]"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
