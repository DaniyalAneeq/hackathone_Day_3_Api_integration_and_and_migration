import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface IInstadata {
    _id:string;
    imageUrl:string;
}



const Instagram = async ()=>{
    const instaimg: IInstadata[] = await client.fetch(`*[_type == "products"][0...6]{
    _id,
    "imageUrl":image.asset->url,
    }`)

    return(
      <div className="max-w-full bg-[#1E28320D] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 px-4 sm:px-6 lg:px-8 relative top-24 md:top-0">
        <h1 className="font-roboto font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight sm:leading-[58.59px] text-[#000000] pt-10 sm:pt-20 text-center px-2">
          Or Subscribe To The Newsletter
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 justify-between items-center w-full max-w-[643px] px-2">
          <div className="flex flex-col w-full sm:w-[80%]">
            <input
              className="font-roboto font-semibold text-base leading-[18.75px] h-10 text-[#1E283280]"
              placeholder=" Email address..."
            />
            <div className="w-full h-[2px] bg-[#000000]" />
          </div>
          <button className="font-sans font-normal text-base leading-[21.79px] text-[#1E2832] border-b-2 border-[#000000] cursor-pointer whitespace-nowrap">
            SUBMIT
          </button>
        </div>
        <div className="flex flex-col items-center w-full px-2 gap-y-8">
          <h1 className="font-roboto font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight sm:leading-[58.59px] text-[#000000] pt-6 sm:pt-10 text-center">
            Follow products and discounts on Instagram
          </h1>
          <div className="my-4 w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 place-items-center">
            {instaimg.map(
              (image, index) => (
                <div
                  key={index}
                  className="relative max-w-[186px] max-h-[186px] flex-shrink-0"
                >
                  <Image
                    src={image.imageUrl}
                    alt={`product-${index}`}
                    width={186}
                    height={186}
                    className="object-cover max-w-[200px] max-h-[200px]"
                    layout="responsive"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
    )
  }

export default Instagram;