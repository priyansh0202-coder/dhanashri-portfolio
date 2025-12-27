"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProjectsSection() {
    const router = useRouter();

    const projects = [
        {
            id: 1,
            title: "Paylo",
            subtitle: "Affordability Low Price Insights",
            image: "/paylo.png", // replace with your image path
            year: "2025",
            tags: ["UI/UX", "B2C", "Mobile Design", "Payments"],
            link: "/projects/paylo", // your project page route
            bg: "from-green-100 to-green-500",
        },
        {
            id: 2,
            title: "Infusyx",
            subtitle: "Infusyx UI/UX Case Study.",
            image: "/macbook.png", // replace with your image path
            year: "2025",
            tags: ["UI/UX", "Mobile Design", "Web Design"],
            link: "/projects/infusyx",
            bg: "from-black to-gray-900",
        },
        {
            id: 3,
            title: "RealEstate",
            subtitle: "RealEstate UI/UX Case Study.",
            image: "/ZenBook Duo.png", // replace with your image path
            year: "2025",
            tags: ["UI/UX", "B2C", "Mobile Design", "Payments"],
            link: "/projects/homily", // your project page route
            bg: "from-green-100 to-green-500",
        },
        {
            id: 4,
            title: "CRM",
            subtitle: "CRM UI/UX Case Study.",
            image: "/Mac Studio.png", // replace with your image path
            year: "2025",
            tags: ["UI/UX", "Mobile Design", "Web Design"],
            link: "/projects/crm",
            bg: "from-black to-gray-900",
        },
    ];

    return (
        <section id="projects" className="bg-[#0d0d0d] text-white py-20 px-6 md:px-12 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-10">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="rounded-2xl bg-[#1a1a1a] overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                        onClick={() => router.push(project.link)}
                    >
                        <div className="relative w-full aspect-[16/9] group">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:opacity-90 transition-opacity duration-300"
                            />
                        </div>

                        {/* Info Section */}
                        <div className="flex items-center justify-between mt-4 px-4">
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <span className="text-sm text-gray-400">{project.year}</span>
                        </div>

                        <div className="px-4 pb-6 mt-2">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-sm bg-[#222] text-gray-300 px-3 py-1 rounded-full border border-gray-700"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
