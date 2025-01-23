// import { cookies } from "next/headers";
// import { NextRequest, NextResponse } from "next/server";

// export const middleware = async (request: NextRequest) => {
//     const cookiesStore = await cookies(); // Use await to resolve the Promise
//     const isLoggedIn = cookiesStore.get("isLoggedIn");
//     console.log(isLoggedIn?.value);

//     if (isLoggedIn?.value === "0") {
//         return NextResponse.redirect(new URL('/login', request.url));
//     }
//     if (isLoggedIn?.value === "1" && request.nextUrl.pathname==="/login") {
//         return NextResponse.redirect(new URL('/', request.url));
//     }



//     return NextResponse.next();
// };

// export const config = {
//     matcher: ['/', '/login'], // Ensure paths start with "/"
import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
