import { SignUp } from "@clerk/nextjs";

const Page = () => {
    return(
        <div className="sm:w-svw sm:h-svh bg-purple w-full h-full flex items-center justify-center">
            <SignUp />
        </div>
    )
}

export default Page;