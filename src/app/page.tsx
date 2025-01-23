import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import TopCategories from "@/components/TopCategories";
import PopularStyles from "@/components/PopularStyles";
import OurProduct from "@/components/OurProduct";
 
export default async function Home() {
  // const res = await fetch('http://localhost:3000/api/shipengine');
  // const mess = await res.json();
  // console.log(mess); 
  return (
   <div>
      <Hero/>
      <Sponsors/>
      <FeaturedProducts/>
      <TopCategories/>
      <PopularStyles/>
      <OurProduct/>
   </div>
  );
}
