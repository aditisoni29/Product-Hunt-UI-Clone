"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
   <main className="w-[100%] min-h-[100vh] flex flex-col items-center justify-center">
    <button onClick={() => {
      setIsModalOpen(true)
    }}
     className="bg-[#FF6154] px-[30px] py-[24px] rounded-md text-[#f1f1f1] font-semibold
    flex flex-row gap-3 items-center justify-center">
      <Image src="/arr.png" width={30} height={30} alt="arrow" className=" rotate-[270deg]"/> <h4>Upvote 160</h4>
    </button>
    {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-[#626262] bg-opacity-50 backdrop-blur-sm">
            <div className="relative w-fit max-w-[540px] bg-[#f1f1f1] p-8 rounded-lg ">              
              <button onClick={() => {
              setIsModalOpen(false)
            }} className="absolute top-2 right-4 text-2xl font-bold text-gray-500 hover:text-gray-600">
                &times;
              </button>
              <div className=" flex flex-col gap-3 items-center justify-center text-center ">
                <Image src="/kittycat.jpeg" width={90} height={90} alt="kitty"/>
                <h2 className="font-medium text-[24px]">Sign up to vote</h2>
                <h3 className="font-light tracking-wide text-[15px] text-[#4B587C]">Join our community of friendly folks discovering and sharing the latest products in tech.</h3>
                <div className="w-fit flex flex-col gap-[6px]">
                <button className=" hover:bg-[#cecece]
                border-[1.5px] border-[#D8E1EC] rounded-md px-[39px] py-[9px] flex flex-row gap-3 items-center justify-center">
                  <Image src="/google.svg" width={24} height={24} alt="google"/> <h4 className=" font-medium">Sign in with Google</h4></button>
                <div className="w-full flex flex-row gap-[6px]">
                  <div className="border-[1.5px] border-[#D8E1EC] hover:bg-[#cecece] hover:cursor-pointer rounded-md py-[6px] w-full flex flex-row gap-3 items-center justify-center">
                  <Image src="/twitter.svg" width={24} height={24} alt="twitter"/>
                  </div>
                  <div className="border-[1.5px] border-[#D8E1EC] hover:bg-[#cecece] hover:cursor-pointer rounded-md py-[6px] w-full flex flex-row gap-3 items-center justify-center">
                  <Image src="/facebook.svg" width={24} height={24} alt="facebook"/>
                  </div>
                  <div className="border-[1.5px] border-[#D8E1EC] hover:bg-[#cecece] hover:cursor-pointer rounded-md py-[6px] w-full flex flex-row gap-3 items-center justify-center">
                  <Image src="/apple.svg" width={24} height={24} alt="apple"/>
                  </div>
                  <div className="border-[1.5px] border-[#D8E1EC] hover:bg-[#cecece] hover:cursor-pointer rounded-md py-[6px] w-full flex flex-row gap-3 items-center justify-center">
                  <Image src="/linkedin.svg" width={24} height={24} alt="linkedin"/>
                  </div>
                </div>

                </div>
                <h3 className="font-light tracking-wide text-[12px] text-[#4B587C]">We'll never post to any of your accounts without your permission.
                </h3>
              </div></div></div>
)}   </main> 
  );
}
