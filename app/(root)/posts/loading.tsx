import Header from "@/components/Header";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
	return (
		<div>
			<Header
				title="All Posts"
				subTitle="Welcome to my posts page. Here you can find all my posts."
			/>
			<div className="mx-auto max-w-2xl px-6 lg:px-3">
				<div className="mt-10 flow-root sm:mt-20">
					<Skeleton className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 h-[250px]" />
				</div>
			</div>
		</div>
	);
};

export default Loading;
