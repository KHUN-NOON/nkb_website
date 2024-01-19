import { NextFetchEvent, NextRequest, NextResponse } from "next/server"
import { MiddlewareFactory } from "./stackMiddlewares"

const PUBLIC_FILE = /\.(.*)$/

export const withLocales: MiddlewareFactory = (next) => {
    return async (req: NextRequest, _next: NextFetchEvent) => {
        if (
            req.nextUrl.pathname.startsWith('/_next') ||
            req.nextUrl.pathname.includes('/api/') ||
            PUBLIC_FILE.test(req.nextUrl.pathname)
        ) {
            return next(req, _next)
        }

        const localeCookie = req.cookies.get("NEXT_LOCALE")

        if ( localeCookie !== undefined && req.nextUrl.locale !== localeCookie.value ) {
            return NextResponse.redirect(new URL(`${localeCookie.value}${req.nextUrl.pathname}`, req.nextUrl.origin))
        }

        return next(req, _next)
    }
}