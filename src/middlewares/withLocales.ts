import { NextFetchEvent, NextRequest } from "next/server"
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

        return next(req, _next)
    }
}