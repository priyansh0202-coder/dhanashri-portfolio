import Image from "next/image";

export default function Paylo() {
    return (
        <div className="w-full">
            <Image
                src="/Paylo casestudy_Dhanashri Shitole.png"
                alt="Paylo Case Study"
                width={1920}
                height={5000}
                className="w-full h-auto"
                priority
            />
        </div>
    );
}
