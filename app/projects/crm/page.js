import Image from "next/image";

export default function Paylo() {
    return (
        <div className="w-full  mx-auto py-12 ">
            <Image
                src="/1920w light.png"
                alt="CRM Case Study"
                width={1920}
                height={5000}
                className="w-full h-auto"
                priority
            />
        </div>
    );
}
