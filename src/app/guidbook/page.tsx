import Link from "next/link";

export default function guidbook() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-black to-gray-800">
            <div className="w-full max-w-4xl p-8 space-y-8 bg-white rounded-lg shadow-md">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight  mb-6">
                        Anonymous Messages User Guid
                    </h1>
                </div>

                <div className="p-6 font-sans">

                    <h2 className="text-xl font-bold mb-6 text-center border-b-2 border-gray-300 pb-2">Overview</h2>
                    <p className="mb-8">
                        <strong>Anonymous Messages</strong> allows you to send and receive anonymous feedback or messages.
                        You can send messages without needing to create an account, but the recipient must have their
                        <strong> message acceptance</strong> active to receive your message.
                    </p>

                    <h2 className="text-xl font-bold mb-6 text-center border-b-2 border-gray-300 pb-2">Getting Started</h2>

                    <h3 className="text-lg font-semibold mb-2">1. Accessing the Website</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>Open your web browser and go to the <strong>Anonymous Messages</strong> website.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2">2. Logging In</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>
                            If you wish to generate your profile link to receive messages, <strong>log in</strong> to your account.
                        </li>
                        <li>
                            If you don’t have an account, sign up by providing the necessary details.
                        </li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2">3. Generating Your Profile Link</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>
                            Once logged in, navigate to your <strong>dashboard</strong>.
                        </li>
                        <li>
                            You’ll find your <strong>profile link</strong> . This link is unique to you and allows others to send you anonymous messages.
                        </li>
                        <li>
                            Share this link with anyone from whom you want to receive messages.
                        </li>
                    </ul>

                    <h2 className="text-xl font-bold mb-6 text-center border-b-2 border-gray-300 pb-2">Sending an Anonymous Message</h2>

                    <h3 className="text-lg font-semibold mb-2">1. Getting the Recipient's Profile Link</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>To send a message, obtain the recipient's <strong>profile link</strong>. This link must be provided to you by the recipient.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2">2. Sending the Message</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>Copy the recipient's profile link and paste it into your web browser's address bar.</li>
                        <li>You will be directed to the <strong>message window</strong> for that specific user.</li>
                        <li>Type your message in the provided text box.</li>
                        <li>Click the <strong>“Send”</strong> button to submit your message.</li>
                        <li>There’s no need to create an account to send a message.</li>
                    </ul>

                    <h2 className="text-xl font-bold mb-6 text-center border-b-2 border-gray-300 pb-2">Receiving and Viewing Messages</h2>

                    <h3 className="text-lg font-semibold mb-2">1. Message Acceptance</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>Ensure that your <strong>message acceptance</strong> is active. You can manage this setting from your dashboard.</li>
                        <li>If your message acceptance is turned off, you will not receive any anonymous messages.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2">2. Viewing Messages</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>Log in to your account.</li>
                        <li>Navigate to your <strong>dashboard</strong> to see all the anonymous messages sent to you.</li>
                    </ul>
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