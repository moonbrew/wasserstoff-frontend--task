'use client'
import { animated, useSpring } from '@react-spring/web';
import Image from "next/image";

export default function Gallery() {
    const images = [//should be read from database later
        { id: 1, url: "/collections/1.png" },
        { id: 2, url: "/collections/2.png" },
        { id: 3, url: "/collections/3.png" },
        { id: 4, url: "/collections/4.png" },
    ];
    //const max = Array.from({length: images.length - 2}, (_, i) => i + 1);//[1,2,3]
    //max.map((n) => ());
    const start = 256;
    let left = start;
    const springs = useSpring({
        config: {
            mass: 1,
            friction: 15,
            tension: 100,
        },
        from: {
            x: left = start,
        },
        to: [
            {x: left -= 440, delay: 800},
            {x: left -= 440, delay: 800},
            {x: left -= 440, delay: 800},
            {x: left = start, delay: 800},
        ],
        loop: true,
    });



    return (
        <div className="window absolute top-36 h-full w-[868px] overflow-hidden">
            <animated.div
                style={{
                    ...springs,
                }}
                className="roll flex gap-7 absolute left-64">

                {images.map((image) => {
                    return (
                        <div key={image.id} className="shrink-0">
                            <div>
                                Lunar Palace:(ft. Kanye west)
                            </div>
                            <Image
                                src={image.url}
                                alt=""
                                width={412}
                                height={630}
                            />
                        </div>
                    )})}
            </animated.div>
        </div>
    )
}