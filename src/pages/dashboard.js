import Blog from "@/components/blog ";
import { getSession } from "next-auth/react"

export default function  () {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
             
           <div>
       <h1 className=" text-[50px] ml-[-1000px] mb-[20px]">  Dashboard </h1> 
       <div>
        <Blog />

        
        </div> 
{/* 
       <h1 className="">   Welcome to Reader's</h1> 
        <img className="w [10]" src="./MY PROFILE.jpg">
        </img> */}

        
        
           </div>
          </h2>
        </div>
        </div>
    )
};

<div> my karachix</div>

export async function getServerSideProps ({req}) {
    const session = await getSession({req});
    if(!session) {
      return {
        redirect: {
          destination: "",
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







