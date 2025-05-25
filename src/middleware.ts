import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const isPublicPaths = path === '/login' || path === '/signup'

    const token = request.cookies.get('token')?.value || ''

    if(isPublicPaths && token){
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    if(!isPublicPaths && !token){
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}
export const config = {
  matcher: ["/login", "/signup"],
};
