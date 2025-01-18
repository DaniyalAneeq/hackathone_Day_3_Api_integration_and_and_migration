"use client"
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Define the shape of the fetched gallery data
interface IGalleryData {
    _id: string;
    imageUrl: string;
    title: string;
    slug: string;
}

const PopularStyles = () => {
    const [galleryData, setGalleryData] = useState<IGalleryData[]>([]);

    useEffect(() => {
        const fetchGalleryData = async () => {
            const data: IGalleryData[] = await client.fetch(
                `*[_type == "products" && "gallery" in tags]{
                    _id,
                    "imageUrl": image.asset->url,
                    title,
                    "slug": slug.current
                }`
            );
            setGalleryData(data);
        };

        fetchGalleryData();
    }, []);

    return (
        <div className="mx-auto max-w-7xl mb-20 flex pl-4">
            <h1
                style={{ writingMode: 'vertical-rl' }}
                className="font-roboto font-normal text-[34px] leading-[39.84px] mb-20 md:pl-0 rotate-180 hidden lg:block"
            >
                EXPLORE NEW AND POPULAR STYLES
            </h1>
            <h1
                style={{ writingMode: 'vertical-rl' }}
                className="font-roboto font-normal text-[34px] leading-[39.84px] mb-20 md:pl-0 block lg:hidden"
            >
                EXPLORE NEW AND POPULAR STYLES
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {galleryData.length > 0 ? (
                    galleryData.map((item, index) => (
                        <Link key={item._id} href={`/shop/${item.slug}`}>
                            <div className={`transition duration-300 hover:scale-105 ${index === 0 ? "sm:row-span-2" : ""}`}>
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl"
                                    width={500}
                                    height={500}
                                    unoptimized
                                />
                            </div>
                        </Link>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
};

export default PopularStyles;
