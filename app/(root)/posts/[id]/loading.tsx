import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
	return (
		<div className="flex flex-col gap-6 items-center max-w-7xl">
			<div className="max-w-7xl mt-16 flow-root sm:mt-24 ">
				<Skeleton className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 h-[350px] w-[950px]" />
			</div>
			<div className="rounded-full p-1  z-40 items-center justify-center my-6 max-w-[45px] lg:flex hidden cursor-pointer object-contain">
				<Skeleton className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 h-[25px]" />
			</div>
		</div>
	);
};

export default Loading;
