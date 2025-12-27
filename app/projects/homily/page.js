import Image from "next/image";

export default function Paylo() {
    return (
        <div className="w-full">
            <Image
                src="/homily.png"
                alt="Homily Case Study"
                width={1920}
                height={5000}
                className="w-full h-auto"
                priority
            />
        </div>
    );
}
