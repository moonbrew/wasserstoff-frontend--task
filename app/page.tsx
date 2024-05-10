import { lexend_700, lexend_800 } from "@/app/ui/fonts";
import Image from "next/image";


export default function Page() {

    return (
        <>
            <div className="logo absolute top-4 left-4">
                <Image
                    src="./astrix-branding.svg"
                    alt=""
                    width={75}
                    height={75}
                />
                <div className={` absolute top-2 left-24 ${lexend_800.className} text-5xl leading-[64px] tracking-[-0.25px] text-[#FFCA5F]`}>
                    Astrix.
                </div>
            </div>
            <div className={`banner absolute w-96 top-40 left-9 ${lexend_700.className} text-9xl leading-[118px] text-white opacity-20 text-wrap break-words`}>
                ASTRIX
                <br /><br />
                EVENTS
            </div>
        </>
    );
}