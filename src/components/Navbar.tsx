import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Logo Icon.png";
import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-7xl sticky top-0 z-50 backdrop-blur-md">
      <div className="flex justify-between items-center h-[74px]">
        <div className="md:flex gap-4 font-inter font-medium text-lg leading-[15.4px] items-center hidden md:ml-6 xl:ml-0">
          <Link
            href="/"
            className="text-[#007580] hover:scale-110 hover:underline"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-[#636270] hover:scale-110 hover:underline"
          >
            Shop
          </Link>
          <Link
            href="/product"
            className="text-[#636270] hover:scale-110 hover:underline"
          >
            Product
          </Link>
          <Link
            href="/pages"
            className="text-[#636270] hover:scale-110 hover:underline"
          >
            Pages
          </Link>
          <Link
            href="/about"
            className="text-[#636270] hover:scale-110 hover:underline"
          >
            About
          </Link>
        </div>
        <div className="flex gap-2 items-center md:mr-6 ">
          <Link
            href="/contact"
            className="text-[#636270] font-inter font-normal text-sm leading-[15.4px] hover:scale-110 hover:underline hidden md:inline-block"
          >
            Contact:
          </Link>
          <Link
            href="/contact"
            className="font-inter text-[#272343] font-medium text-sm leading-[15.4px] hidden md:inline-block"
          >
            (808) 555-0111
          </Link>

          <Sheet>
            <SheetTrigger>
              <Menu className="ml-4 md:hidden" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <div className="flex justify-center items-center gap-2">
                    <Image
                      src={Logo}
                      alt="Logo"
                      width={40}
                      height={40}
                      className="w-8 sm:w-10 h-auto"
                    />
                    <Link
                      href="/"
                      className="font-inter font-medium text-xl sm:text-2xl lg:text-[26px] text-[#272343]"
                    >
                      Comforty
                    </Link>
                  </div>
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-8 font-inter font-medium text-sm leading-[15.4px] items-center mt-4">
                    <Link
                      href="/"
                      className="text-[#007580] hover:scale-110 hover:underline"
                    >
                      Home
                    </Link>
                    <Link
                      href="/shop"
                      className="text-[#636270] hover:scale-110 hover:underline"
                    >
                      Shop
                    </Link>
                    <Link
                      href="/product"
                      className="text-[#636270] hover:scale-110 hover:underline"
                    >
                      Product
                    </Link>
                    <Link
                      href="/pages"
                      className="text-[#636270] hover:scale-110 hover:underline"
                    >
                      Pages
                    </Link>
                    <Link
                      href="/about"
                      className="text-[#636270] hover:scale-110 hover:underline"
                    >
                      About
                    </Link>

                    <Link
                      href="/contact"
                      className="text-[#636270] font-inter font-normal text-sm leading-[15.4px] hover:scale-110 hover:underline"
                    >
                      Contact
                    </Link>
                    <div className="flex items-center gap-2">
                    <ShoppingCart className="w-4 sm:w-5 h-auto"/>
                    <Link href="/cart" className="font-inter font-medium text-xs sm:text-sm text-[#272343]">
                     Cart
                    </Link>
                    <div className="w-4 sm:w-5 h-4 sm:h-5 bg-[#007580] rounded-full flex items-center justify-center">
                    <p className="font-medium text-[10px] text-white">2</p>
                    </div>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
