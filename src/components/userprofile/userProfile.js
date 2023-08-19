export default function UserProfile () {
    return (
        <div className=" w-[45%] p-[30px] bg-white rounded-md shadow-md ml-[65px] mt-[80px] mb-[80px]  ">
           <div>
            <div className="w-[200px] rounded-xl">
                <img src="/MY PROFILE.jpg"></img>
            </div>
            <div className="mb-[5px] mt-[5px]">
                <span className="font-bold ">Muhammad Sagheer</span>
            </div>
            <div>
                <div className="mb-[10px]">
                <span className="font-bold">
                    Password
                </span>
                </div>
                <div>
                    <input className="pt-[5px] pb-[5px] pl-[10px] pr-[10px] text-xs rounded-md border-0 px-3 py-1.5 text-orange-900 shadow-sm ring-1 ring-inset ring-[#9747ff] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-[10px]" 
                        placeholder="Old Password"
                    />
                </div>
                <div>
                    <input className="pt-[5px] pb-[5px] pl-[10px] pr-[10px] text-xs rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#9747ff] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-[10px]" 
                        placeholder="New Password"
                    />
                </div>
                <div>
                    <input className="pt-[5px] pb-[5px] pl-[10px] pr-[10px] text-xs rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#9747ff] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-[10px]" 
                        placeholder="Repeat Password"
                    />
                </div>
                <div>
                   <button className="bg-[#9747ff] pt-[5px] pb-[5px] pl-[8px] pr-[8px] rounded-lg text-sm text-white">Update Password</button>
                </div>
            </div>
           </div>
        </div>
    )
}