import Image from "next/image";
import { lexend_800 } from "@/app/ui/fonts";

export default function Logo() {

    return (
        <div className="absolute top-4 left-4">
            <Image
                src="./astrix-branding.svg"
                alt=""
                width={75}
                height={75}
            />
            <div className={`logo absolute top-2 left-24 ${lexend_800.className} text-5xl leading-[64px] tracking-[-0.25px] text-[#FFCA5F]`}>
                Astrix.
            </div>
        </div>
    )
}