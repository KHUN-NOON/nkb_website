import { useRouter } from "next/router"

const Custom404 = () => {
    const router = useRouter()

    return (
        <div className="flex h-screen justify-center items-center flex-col gap-4">
            <p>404 Not Found</p>
            <button type="button" className="p-3 border border-color-white border-solid" onClick={router.back}>
                Go Back
            </button>
        </div>
    )
}

export default Custom404