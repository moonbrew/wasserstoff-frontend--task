import Image from "next/image";

export default function Gallery() {
    const images = [{ id: 1, url: "/collections/1.png" }, { id: 2, url: "/collections/2.png" }, { id: 3, url: "/collections/3.png" }];
    return (
        <div className="absolute top-36 left-64 flex overflow-clip shrink-0 min-w-[1511px]">

            {images.map((image) => {
                return (
                    <div key={image.id}>
                        <div>
                            Lunar Palace:(ft. Kanye west)
                        </div>
                        <Image
                            src={image.url}
                            alt=""
                            //fill
                            className="object-cover"
                            width={412}
                            height={630}
                        />
                    </div>
                )
            })}


        </div>
    )
}