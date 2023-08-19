// import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react'

export default function Blog () {

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const onPublishHandler = async () => {
    const res = await fetch("/data/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        desc
      }),
    });

    console.log(res);
  }

  return (
            <div className=" w-[900px] ml-[-400px] h-[2o%] ">
                <div className=" w-[100%] p-[30px] bg-white rounded-md shadow-md">
                <div className="w-full mb-[20px]">
                    <input type="text" name='title' onChange={(e) => {setTitle(e.target.value)}}
                        className="w-full pt-[4px] pb-[4px] pl-[10px] pr-[10px] rounded-md ring-1 ring-inset ring-[#9747ff]"
                        placeholder="Title"
                    />
                </div>
                <div className="w-full mb-[15px] ">
                    <textarea rows="5" name="desc" id="desc" onChange={(e) => {setDesc(e.target.value)}}
                        className="border w-full rounded-md pt-[8px] pb-[4px] pl-[10px] pr-[10px] " 
                        placeholder="What is your in mind">

                    </textarea>
                </div>
                <div className='W-[30px] w-[900px] ml-[-380px] '>
                    <button onClick={onPublishHandler} type='submit' className="bg-[orange] p-2 rounded-md text-white">
                        Publish Blog
                    </button>
                </div>
              
                </div>  
    
            <div> <h1 className=" text-[50px] ml-[-400px] mb-[60px] mt-[50px]"> Welcome to Reader's ! </h1></div>
                
                <div className=' w-[500px] ml-[-170px] h-[400px] mt[20px]'>
                    <div className='rounded-[0.5rem] w-[56.0625rem] h-[26.625rem] bg-white ml-[10.38rem] mt-[1.81rem] shadow-2xl flex flex-col gap-[] pl-[1.5rem]'>

                        <div className='w-[100%] mt-5 '>

                            <div className='flex w-[80%] justify-between gap-4'>
                                <div><img src="./profile 3.JPG" alt="" className='w-[15rem]' /></div>
                                <div>
                                    <h2 className='text-[1.1rem] font-semibold'>

                                        Introducing ChatGPT</h2>
                                    <p className='text-[#888]  '>Elon Musk - November 23rd, 2022</p>
                                </div>
                            </div>
                            <br />
                            <p className='text-[1rem] text-[#888] '>We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests. <br />
                                We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests. 
                                <Link href=""className='text-[blue]' >Read More</Link>
                            </p>
                        </div>

                        

                    </div>
                </div>

      <div className=' w-[500px] ml-[-170px] h-[400px] mt-[40px]'>
                    <div className='rounded-[0.5rem] w-[56.0625rem] h-[26.625rem] bg-white ml-[10.38rem] mt-[1.81rem] shadow-2xl flex flex-col gap-[] pl-[1.5rem]'>

                        <div className='w-[100%] mt-5 '>

                            <div className='flex w-[40%] justify-between gap-4'>
                                <div><img src="profile 4.JPG" alt="" className='w-[15rem]' /></div>
                                <div>
                                    <h2 className='text-[1.1rem] font-semibold'>

                                        Introducing ChatGPT</h2>
                                    <p className='text-[#888]  '>Elon Musk - November 23rd, 2022</p>
                                </div>
                            </div>
                            <br />
                            <p className='text-[1rem] text-[#888] '>We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests. <br />
                                We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests. 
                                 thanks for watching
                            </p>
                            <Link href=""className='text-[blue]' >Read More</Link>
                        </div>

                        

                    </div>
                </div>

     

      <div className=' w-[500px] ml-[-170px] h-[400px] mt-[40px]'>
                    <div className='rounded-[0.5rem] w-[56.0625rem] h-[26.625rem] bg-white ml-[10.38rem] mt-[1.81rem] shadow-2xl flex flex-col gap-[] pl-[1.5rem]'>

                        <div className='w-[100%] mt-5 '>

                            <div className='flex w-[40%] justify-between gap-4'>
                                <div><img src="./MY PROFILE.JPG" alt="" className='w-[15rem]' /></div>
                                <div>
                                    <h2 className='text-[1.1rem] font-semibold'>

                                        Introducing ChatGPT</h2>
                                    <p className='text-[#888]  '>Elon Musk - November 23rd, 2022</p>
                                </div>
                            </div>
                            <br />
                            <p className='text-[1rem] text-[#888] '>We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests. <br />
                                We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests. 
                                 thanks for watching
                            </p>

                            <Link href=""className='text-[blue]' >Read More</Link>
                        </div>

                        

                    </div>
                </div>
      

      <div className=' w-[500px] ml-[-170px] h-[400px] mt-[40px]'>
                    <div className='rounded-[0.5rem] w-[56.0625rem] h-[26.625rem] bg-white ml-[10.38rem] mt-[1.81rem] shadow-2xl flex flex-col gap-[] pl-[1.5rem]'>

                        <div className='w-[100%] mt-5 '>

                            <div className='flex w-[40%] justify-between gap-4'>
                                <div><img src="./MY PROFILE.JPG" alt="" className='w-[15rem]' /></div>
                                <div>
                                    <h2 className='text-[1.1rem] font-semibold'>

                                        Introducing ChatGPT</h2>
                                    <p className='text-[#888]  '>Elon Musk - November 23rd, 2022</p>
                                </div>
                            </div>
                            <br />
                            <p className='text-[1rem] text-[#888] '>We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests. <br />
                                We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests. 
                                 thanks for watching
                            </p>
                            <Link href=""className='text-[blue]' >Read More</Link>
                        </div>

                        

                    </div>
                </div>

                
            </div> 
            

            
            )
}