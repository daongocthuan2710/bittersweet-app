import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
  //   Getting cookies from the request using the `RequestCookies` API
  //   let user = request.cookies.get(CONSTANT.COOKIE_AUTH)?.value;
  //   console.log('user middleware', user);
  //   if (!user) {
  //     return NextResponse.redirect(new URL('/login', request.url));
  //   }
  // Setting cookies on the response using the `ResponseCookies` API
  const response = NextResponse.next();

  return response;
}
