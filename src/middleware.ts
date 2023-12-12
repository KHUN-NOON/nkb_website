import { stackMiddlewares } from "./middlewares/stackMiddlewares"
import { withLocales } from "./middlewares/withLocales"
import { withTest } from "./middlewares/withTest"

const middlewares = [
    withLocales,
    withTest
]

export default stackMiddlewares(middlewares)