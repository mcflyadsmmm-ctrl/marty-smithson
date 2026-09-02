import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const GHOSTS = new Set(["/approach", "/evidence", "/method"]);

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname.replace(/\/$/, "") || "/";
  if (GHOSTS.has(path)) {
    return NextResponse.redirect(new URL("/", request.url), 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/approach",
    "/approach/:path*",
    "/evidence",
    "/evidence/:path*",
    "/method",
    "/method/:path*",
  ],
};
