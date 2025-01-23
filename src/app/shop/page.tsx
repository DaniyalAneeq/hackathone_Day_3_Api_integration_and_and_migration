import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface ICatData {
    _id: string,    
    title: string,
    price:null,
    imageUrl:string,
    products:number,
    slug:string,
    category: {
        _id: string;
        title: string;
        slug: string;
      };
}

const Categories = async () => {

const categoryData:ICatData[] = await client.fetch(`*[_type == "products"]{
  _id,
  title,
  "imageUrl": image.asset->url,
   category->{
      _id,
      title,
      "slug": slug.current
    },
  "slug": slug.current
}
`) 
const filteredData = [categoryData[5], categoryData[8], categoryData[14]];
  return (
    <div className="mx-auto max-w-7xl flex flex-col gap-10 mb-40">
        <h1 className="font-inter text-[32px] leading-[35.2px] pl-5 md:pl-0 text-center lg:text-start font-bold">
            Top categories
        </h1>
        <div className="flex gap-4 flex-wrap xl:flex-nowrap justify-center lg:justify-normal">
            {
                filteredData.map((data:ICatData, index:number)=>{
                    return(
                        <div className="relative overflow-hidden group" key={index}>
                        <Image src={data.imageUrl} alt="pic1" 
                        width={424}
                        height={424}/>
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4">
                        <h3 className="text-lg font-semibold">{data.title}</h3>
                        <p className="text-sm">{data.products}</p>
                        </div>
                        <div className="absolute bottom-[-100%] left-0 right-0 bg-black/50 text-white p-4 transition-all duration-300 group-hover:bottom-[50%] translate-y-1/2 flex flex-col items-center gap-4">
                        <h3 className="text-xl font-semibold">{data.title}</h3>
                        <Link href={`/category/${data.category.slug}`} className="px-6 py-2 bg-white text-black rounded-md hover:bg-gray-400 transition-colors">
                            Shop Now
                        </Link>
                </div>
            </div>
                    )
                })

            }
            
        </div>
    </div>
  )
}

export default Categories