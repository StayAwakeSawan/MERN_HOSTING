import React from "react";

function TailwindPractice() {
  return (
    <div>
      <div className="font-mono">Font Mono</div>
      <div className="font-serif">Serif</div>
      <div className="font-sans">Sans</div>
      <div className="text-xs">text-xs</div>
      <div className="text-sm">text small</div>
      <div className="text-md">text smd </div>
      <div className="text-lg">text lg </div>
      <div className="text-xl">text xl </div>
      {/* <div className="text-9xl">text 9xl</div> */}
      <div className="text-[34px]"></div>
      <div className="font-bold">bold</div>
      <div className="font-semibold">bold</div>
      <div className="font-[100]">bold</div>
      <div>extra bold</div>
      <hr />
      <hr />
      <hr />
      <hr />
      <div className="text-[#235609]">Red color</div>
      <div className="text-blue-900">Blue</div>
      {/* decoration */}
      <div className="underline">Underline</div>
      Now available in <div className="line-through"> $100 </div>$50
      <div className="capitalize">uppercase</div>
      <div className=" m-4 border-2 p-2 border-red-400   bg-green-100">
        <div className="bg-red-100">Box Model</div>
      </div>
      <div className="capitalize">uppercase</div>
      {/* positions */}
      <br />
      <hr />
      <br />
      {/* static relative absolute sticky */}
      <div className="flex flex-col items-center justify-center h-[150px]   bg-green-500 gap-2   ">
        <div>1st Item </div>
        <div>2nd Item </div>
        <div>3rd Item</div>
      </div>
      {/* basis */}
      <div className="flex flex-wrap ">
        <div className="basis-1/4 min-w-[200px] bg-red-300">1st Item </div>
        <div className="basis-2/4 min-w-[400px] bg-red-100">2nd Item </div>
        <div className="basis-1/4 min-w-[200px] bg-red-300">3rd Item</div>
      </div>
      <br />
      <hr />
      <br />
      <div className=" grid  grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-2 bg-red-100">
        <div className="bg-green-100">1st Item</div>
        <div className="bg-blue-100 col-span-2 lg:col-span-3 ">2nd Item </div>
        <div className="bg-yellow-100">3rd Item </div>
        <div className="bg-pink-100">4th Item </div>
        <div className="bg-red-300">5th Item </div>
        <div className="bg-blue-400">6th Item</div>
      </div>
      <br />
    </div>
  );
}

export default TailwindPractice;
