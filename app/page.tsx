import { lexend_bold, lexend_extrabold } from "@/app/ui/fonts";
import Image from "next/image";
import Gallery from "./ui/collections-gallery";

export default function Page() {

    return (
        <>
            <div className="logo absolute top-[15px] left-[15.24px]">
                <Image
                    src=" /astrix-branding.svg"
                    alt=""
                    width={75}
                    height={75}
                />
                <div className={`absolute top-2 left-[89.3px] ${lexend_extrabold.className} text-[40px] leading-[64px] tracking-[-0.25px] text-[#FFCA5F]`}>
                    Astrix.
                </div>
            </div>
            <div className={`banner absolute w-[361px] top-40 left-9 ${lexend_bold.className} text-9xl leading-[118px] text-white opacity-20 text-wrap break-words`}>
                ASTRIX
                <br /><br />
                COLLECTIBLE
            </div>
            <Gallery />
        </>
    );
}