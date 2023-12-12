import { NextFetchEvent, NextRequest } from "next/server"
import { MiddlewareFactory } from "./stackMiddlewares"

export const withTest: MiddlewareFactory = (next) => {
    return (req: NextRequest, _next: NextFetchEvent) => {
        return next(req, _next)
    }
}

