
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";


interface Idata {
  title: string,
  price: number,
  priceWithoutDiscount: null,
  badge: null,
  imageUrl: string,
  category: {
    title: string,
    _id: string,
  },
  _id: string,
  slug:string,
}

const FeaturedProducts = async () => {

  const sanityData: Idata[] = await client.fetch(`*[_type == "products" && "featured" in tags]{
  _id,
  title,
  price,
  priceWithoutDiscount,
  badge,
  "slug":slug.current,
  "imageUrl":image.asset->url,
  category->{
    title,
    _id,
  }
}`);
console.log(sanityData)

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8 px-4 mb-40"> 
      <h1 className="font-inter text-[32px] leading-[35.2px] font-semibold mt-8 text-[#272343] text-center lg:text-start">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {
          sanityData.map((item: Idata, index:number)=>{
            return(
              <div className="bg-white rounded-lg p-4 shadow-sm" key={index}>
          <div className="relative">
            <div className={`absolute top-4 left-3 z-10 text-white px-3 py-1 rounded-md text-sm ${
            item.badge === "New" ? "bg-green-500" : item.badge === "Sales" ? "bg-[#F5813F]" : ""
            }`}>
            {item.badge}
            </div>
            <div className="aspect-square relative w-full">
              <Link href={`/shop/${item.slug}`}>
                <Image
                  src={item.imageUrl}
                  alt="pink sofa"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-[#272343] text-sm md:text-base">
                {item.title}
              </p>
              <div className="flex gap-2 items-center">
                <p className="text-[#272343] font-medium text-lg">${item.price}</p>
                <p className="text-[#9A9CAA] line-through text-sm">${item.priceWithoutDiscount}</p>
              </div>
            </div>
            <Link href={`/shop/${item.slug}`}>
            <button className="p-2 md:p-3 bg-gray-300 hover:bg-[#076068] rounded-lg">
              <ShoppingCart className="w-5 h-5 text-[#272343]"/>
            </button>
            </Link>
          </div>
        </div>
            )
          })
        }
        
      </div>
    </div>
  );
};

export default FeaturedProducts;
