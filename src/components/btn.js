import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
export default function Btn () {
    const { data: session } = useSession()
    if(session) {
        return (
            <div>
                <button onClick={signOut} class="text-gray-800 dark:text-white hover:bg-indigo-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-indigo-500 focus:outline-none ">Log out</button>
                <Link href="/dashboard" class="text-gray-800 dark:text-white hover:bg-indigo-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-indigo-500 focus:outline-none ">Dashboard</Link>
                <Link href="/profile" class="text-gray-800 dark:text-white hover:bg-indigo-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-indigo-500 focus:outline-none ">Profile</Link>
            </div>
        )
    }
    return (
        <div>
            <button className="hover:bg-indigo-500 rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-indigo-500 focus:outline-none ">
            <Link href="/" class="text-gray-800 dark:text-white font-medium text-sm focus:outline-none ">Home</Link>
            </button>
            <button className="hover:bg-indigo-500 rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-indigo-500 focus:outline-none ">
            <Link href="/auth/login" class="text-gray-800 dark:text-white font-medium text-sm focus:outline-none ">Log in</Link>
            </button>
        </div>
    )
}