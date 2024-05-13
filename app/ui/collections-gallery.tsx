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
    const max = (images.length - 1) * 440;
    const start = 256;
    let left = start;
    const [springs, api] = useSpring(() => ({
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
    }), []);

    const handleRightClick = () => {//will be hooked to buttons later
        api.start({
            to: {
                x: left = left > start - max ? left - 440 : start,
            },
        });
        //console.log(`Move Right: ${left}`);
    }
    const handleLeftClick = () => {//will be hooked to buttons later
        api.start({
            to: {
                x: left = left < start ? left + 440 : start - max,
            },
        });
        console.log(`Move Left: ${left}`);
    }

    return (
        <div className="window absolute top-36 h-full w-[868px] overflow-hidden">
            <animated.div
                onClick={handleLeftClick}
                style={{
                    ...springs
                }}
                className="roll flex gap-7 absolute left-64">

                {images.map((image) => {
                    return (
                        <div key={image.id} className="shrink-0 rounded-lg">
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
                    )
                })}

            </animated.div>

        </div>
    )
}