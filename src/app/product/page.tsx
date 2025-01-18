import Image  from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { client } from "@/sanity/lib/client";
import Instagram from "../../components/Instagram";



export interface IProduct {
  _id:string;
  imageUrl:string;
    title:string;
    badge:string;
    price:number;
    priceWithoutDiscount:number;
    slug:string
}

const AllProductpage = async () => {

  const productsData = await client.fetch(`*[_type == "products"]{
  _id,
  "imageUrl":image.asset->url,
    title,
    badge,
    price,
    priceWithoutDiscount,
    "slug":slug.current
}`)
  return (
    <>
        <div className="max-w-7xl mx-auto flex flex-col gap-4 pb-52">
      <h1 className="font-inter text-[32px] leading-[35.2px] font-semibold mt-8 text-[#272343] text-center lg:text-start">
        All Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {productsData.map((product: IProduct, index: number) => (
           <Link 
           href={`/shop/${product.slug}`} 
           key={product.slug}
           className="group"
         >
          <div key={index} className="w-full max-w-[358px] mx-auto">
            <div className="product-card bg-white rounded-lg p-4">
              <div className="relative">
                <div className={`absolute top-4 left-4 z-10 ${
              product.badge === "New" ? "bg-green-500" : product.badge === "Sales" ? "bg-[#F5813F]" : ""
                }  text-white px-3 py-1 rounded-md text-sm `}>
                  {product.badge}
                </div>
                <div className="aspect-square relative w-full">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-[#007580] text-sm md:text-base">
                    {product.title}
                  </p>
                  <div className="flex gap-2 items-center">
                    <p className="text-[#272343] font-medium text-lg">${product.price}</p>
                    <p className="text-[#9A9CAA] line-through text-sm">${product.priceWithoutDiscount}</p>
                  </div>
                </div>
                <button className="p-2 md:p-3 bg-[#029FAE] hover:bg-[#076068] rounded-lg">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
      <Instagram/>
    </div>
    </>
  );
};

export default AllProductpage;


















     
   
