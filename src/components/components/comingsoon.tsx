import { useState } from 'react';

export default function ComingSoon() {
	return (
		<div className="fixed inset-0 w-screen z-[100] h-screen bg-[#000000aa] flex justify-center">
			 <div className="w-[400px] bg-white h-fit mt-16 rounded-[8px] p-4">
				<div className="h-[8rem] w-full flex items-center justify-center">
					image here
				</div>			 	
				<button className="w-full py-1.5 text-white bg-active font-[500] rounded-[8px] ">
					close
				</button>
			 </div>
		</div>
	);
}