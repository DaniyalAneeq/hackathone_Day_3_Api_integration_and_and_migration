import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

interface IProduct {
  _id: string;
  title: string;
  imageUrl: string;
  price:number;
  priceWithoutDiscount:number;
  category: {
    _id: string;
    title: string;
    slug: string;
  };
  slug: string;
}

interface ICategoryPageProps {
  params: {
    slug: string;
  };
}

export default async function CategoryPage({ params }: ICategoryPageProps) {
  const { slug } = params;

  // Fetch products for the specific category
  const products: IProduct[] = await client.fetch(
    `*[_type == "products" && category->slug.current == $categorySlug] {
      _id,
      title,
      price,
       priceWithoutDiscount,
       badge,
      "imageUrl": image.asset->url,
      category->{
        _id,
        title,
        "slug": slug.current
      },
      "slug": slug.current
    }`,
    { categorySlug: slug }
  );

  return (
    <div className="mx-auto max-w-7xl p-5">
      <h1 className="text-3xl font-bold mb-8 italic text-center">
        Products in Category: {products[0]?.category?.title}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border rounded-lg overflow-hidden shadow-lg">
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-gray-600">{product.category.title}</p>
              <div className="flex justify-between items-center">
              <Link
                href={`/shop/${product.slug}`}
                className="mt-4 inline-block px-4 py-2 bg-[#007580] text-white rounded-md hover:bg-gray-300 hover:text-black transition-colors"
              >
                View Product
              </Link>
              <div className="flex gap-1">
                <p>${product.price}</p>
                <p className="text-gray-400 line-through">${product.priceWithoutDiscount}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}