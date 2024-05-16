'use client'
import { SpringValue, animated, useSpring, useSpringValue } from '@react-spring/web';
import { lexend_bold } from "@/app/ui/fonts";
import Image from "next/image";

export default function Gallery() {
    const images = [//should be read from database later
        { id: 1, url: "/collections/1.png" },
        { id: 2, url: "/collections/2.png" },
        { id: 3, url: "/collections/3.png" },
        { id: 4, url: "/collections/4.png" },
    ];
    const start = 262;
    const next = 440;

    const opacities = Array.from({ length: images.length - 4 }, () => { return useSpring({ from: { opacity: 0.4 } }) })
    opacities.unshift(useSpring({
        config: {
            mass: 1,
            friction: 15,
            tension: 100,
        },
        from: { opacity: 0.4 },
        to: [
            { opacity: 0, delay: 800 * 5 },
            { opacity: 0.4, delay: 800 },
        ],
        loop: true,
    }));
    opacities.unshift(useSpring({
        config: {
            mass: 1,
            friction: 15,
            tension: 100,
        },
        from: { opacity: 0.4 },
        to: [
            { opacity: 0, delay: 800 * 3 },
            { opacity: 0.4, delay: 800 },
            { opacity: 0.4, delay: 800 * 2},
        ],
        loop: true,
    }));
    opacities.unshift(useSpring({
        config: {
            mass: 1,
            friction: 15,
            tension: 100,
        },
        from: { opacity: 0.4 },
        to: [
            { opacity: 0, delay: 800 },
            { opacity: 0.4, delay: 800 },
            { opacity: 0.4, delay: 800 * 4 },
        ],
        loop: true,
    }));
    opacities.unshift(useSpring({
        config: {
            mass: 1,
            friction: 15,
            tension: 100,
        },
        from: { opacity: 0 },
        to: [
            { opacity: 0.4, delay: 800 },
            { opacity: 0, delay: 800 * (3 + 2) },
        ],
        loop: true,
    }));


    const toArray = Array.from({ length: images.length - 1 }, (_, i) => i + 1).map((n) => ({
        x: start - next * n,
        delay: 800,
    }));
    toArray.push({ x: start, delay: 800 });

    const active = () => -(rollSpring.x.goal - start) / next;
    const nextActive = () => active() + 1 > images.length - 1 ? 0 : active() + 1;

    let a = {};
    const rollSpring = useSpring({
        config: {
            mass: 1,
            friction: 15,
            tension: 100,
        },
        from: {
            x: start,
        },
        to: toArray,
        loop: true,
        onChange: () => {
            //if (rollSpring.x.idle) {
            //hook to active
            //opacities[1]  = opacityUpSpring;
            //hook to deactivated
            //opacities[0].opacity.set(opacityUpSpring.opacity.get());
            //opacities[1].opacity.set(opacityDownSpring.opacity.get());
            //console.log(rollSpring.x.goal);
            //}
        },
    });

    const opacityDownSpring = useSpring({
        config: {
            mass: 1,
            friction: 15,
            tension: 100,
        },
        from: {
            opacity: 0.4,
        },
        to: {
            opacity: 0,
        },
        loop: true,
        delay: 800,
    });
    const opacityUpSpring = useSpring({
        config: {
            mass: 1,
            friction: 15,
            tension: 100,
        },
        from: {
            opacity: 0.4,
        },
        to: {
            opacity: 0,
        },
        loop: true,
        delay: 800,
    });

    return (
        <div className="window absolute top-36 h-full w-[830px] ">
            <animated.div
                style={rollSpring}
                className="roll flex gap-7">

                {images.map((image) => {
                    return (
                        <div key={image.id} className="shrink-0">
                            <div className={`${lexend_bold.className} text-white text-[32px] leading-8`}>
                                Lunar Palace:
                                <div className='text-2xl'>(ft. Kanye west)</div>
                            </div>
                            <div>
                                <animated.div style={opacities[image.id - 1]}
                                    className='overtint absolute bg-black w-[412px] h-[630px]'>
                                </animated.div>
                                <Image
                                    src={image.url}
                                    alt=""
                                    width={412}
                                    height={630}
                                />
                            </div>
                        </div>
                    )
                })}
            </animated.div >
        </div >
    )
}