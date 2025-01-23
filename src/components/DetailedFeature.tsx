import { client } from "@/sanity/lib/client"
import Image from "next/image";
import Link from "next/link";


interface IData {
    _id:string;
  title:string;
  imageUrl:string;
  slug:string;
  price:number;
}

const DetailedFeature = async () => {

    const deatailedPage:IData[] = await client.fetch(`*[_type == "products"][0...5]{
    _id,
    title,
    "imageUrl": image.asset->url,
    "slug": slug.current,
    price
    }
`)

  return (
    <div><div className="flex flex-col gap-8 mb-16 sm:mb-20 lg:mb-28">
    <div className="flex justify-between items-center">
    <h1 className="font-inter font-bold text-2xl md:text-[28px] leading-tight tracking-[20%] text-[#000000]">
      Featured Products
    </h1>
      <Link href="/product" className="font-inter font-bold text-[18px] leading-[21.78px] text-[#000000] underline hover:scale-110">View All</Link>
    </div>
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
    {deatailedPage.map((item: IData, index: number) => (
  <div className="flex flex-col gap-2" key={index}>
    <div className="relative aspect-square w-full">
      {item.imageUrl ? (
        <Link href={`/shop/${item.slug}`} >
        <Image 
          src={item.imageUrl} 
          alt={item.title} 
          fill 
          className="object-cover rounded-lg" 
        />
        </Link>
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
          <span>No Image</span>
        </div>
      )}
    </div>
    <div className="flex justify-between items-center">
      <p className="font-inter font-normal text-base leading-[20.8px] text-[#272343]">{item.title}</p>
      <p className="font-inter font-bold text-sm leading-[16.94px] text-[#000000]">${item.price}</p>
    </div>
  </div>
))}
    </div>
  </div>
  </div>
  )
}

export default DetailedFeature