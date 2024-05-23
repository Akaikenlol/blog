import React from "react";
import { getEachData } from "@/lib/actions/data.actions";
import { PostsProps } from "@/types";

const Page = async ({ params }: PostsProps) => {
	const { id } = params;
	const data = await getEachData(id);
	return (
		<main className="px-7 text-center">
			<div className="mx-auto max-w-5xl px-6 lg:px-8">
				<div className="mt-16 flow-root sm:mt-24">
					<div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
						<div className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10">
							<h1 className="text-5xl font-semibold mb-7">{data.title}</h1>
							<p className="max-w-[700px] mx-auto">{data.body}</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Page;
