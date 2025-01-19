import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import DetailedFeature from "@/components/DetailedFeature";

interface IProduct {
  _id:string;
  slug:string;
  description: string;
  imageUrl: string;
  title: string;
  price: number;
}



const Productpage = async ({params}:{params:{slug:string}}) => {
  const { slug } = params;

const data: IProduct[]  | null = await client.fetch(
  `*[_type == "products" && slug.current == $slug]{
     _id,
     title,
     "imageUrl": image.asset->url,
     "slug": slug.current,
     description,
     price
  }`,
  { slug }
);
console.log(data)

if (!data) {
  return <div>Product not found</div>;
}

  return (
    
    <div className="container mx-auto px-4 max-w-7xl flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-2 lg:mb-28">
        <div className="w-full lg:w-1/2">
        {data[0].imageUrl ? (
  <Image 
    src={data[0].imageUrl} 
    alt={data[0].title} 
    width={675} 
    height={607} 
    className="w-full h-auto object-contain"
  />
) : (
  <div className="w-full h-60 bg-gray-200 flex items-center justify-center">
    <span>No Image Available</span>
  </div>
)}
        </div>
        <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-1/2">
        <h1 className="font-inter font-bold text-3xl md:text-4xl lg:text-[60px] leading-tight text-[#272343]">
       {data[0].title}
        </h1>
          <div className="w-36 h-12 rounded-[100px] flex items-center justify-center bg-[#029FAE] hover:bg-[#01656e]">
            <button className="text-[#FFFFFF] font-inter font-semibold text-xl leading-[22px]">
              ${data[0].price} USD
            </button>
          </div>
          <div className="w-full h-[2px] bg-[#D9D9D9]"/>
          <p className="font-inter font-normal text-lg md:text-[22px] leading-relaxed text-[#272343] max-w-[521px]">
           {data[0].description}
          </p>
          <div className="w-full sm:w-[212px] h-[63px] rounded-[8px] px-2 py-[14px] bg-[#029FAE] flex items-center justify-center hover:scale-105 hover:bg-[#0e5f66]">
            <Link href="/cart" className="flex text-[#FFFFFF] font-inter font-semibold text-xl leading-[22px] items-center justify-center">
              <ShoppingCart width={40} height={22}/>
              <span className="text-xl">Add To cart</span>
            </Link>
          </div>
        </div>
      </div>
      <DetailedFeature/>
    </div>
  )
}

export default Productpage