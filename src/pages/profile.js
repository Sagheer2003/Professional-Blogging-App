import UserProfile from "@/components/userprofile/userProfile";
import { getSession } from "next-auth/react"

export default function Profile() {
    return (
        <div className="flex min-h-full flex-col bg-gray-100">
          <div className=" w-full flex">
            <h2 className="text-2xl font-bold ml-16 mt-6 mb-6 text-gray-900">
              Profile
            </h2>
          </div>
          <div className="border border-gray-300 "></div>
          <div className="w-full min-h-full bg-gray-100">
           <UserProfile />
          </div>
        </div>
    )
}

export async function getServerSideProps ({req}) {
    const session = await getSession({req});
    if(!session) {
      return {
        redirect: {
          destination: "/",
          permanent: false
          }
      }
    }
     return {
      props: {
           session
      }
     } 
}