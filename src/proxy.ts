import { NextResponse, type NextProxy } from "next/server";

const ALLOWED_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);

export const proxy: NextProxy = (request) => {
  if (!ALLOWED_METHODS.has(request.method)) {
    return new NextResponse(null, {
      status: 405,
      headers: {
        Allow: "GET, HEAD, OPTIONS",
      },
    });
  }

  return NextResponse.next();
};

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
