import Link from "next/link";

export default function guidbook() {
    return(
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-black to-gray-800">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight  mb-6">
                    Anonymous Messages
                </h1>
                <p className="mb-4">Sign In to start your anonymous adventure</p>
            </div>

            <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quos modi quae voluptatum impedit aperiam ipsam quasi, sunt accusantium maiores autem voluptas cum quia placeat, commodi nemo alias, repellendus animi adipisci. Quia, quaerat sed! Harum quos adipisci doloribus, architecto optio accusamus. Veritatis ullam fuga nostrum, amet corporis laudantium quas delectus.
            </div>

            <div className="text-center mt-4">
                <p>
                    Not a member?{' '}
                    <Link href="/sign-up" className="text-blue-600 hover:text-blue-800">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    </div>
    )
}