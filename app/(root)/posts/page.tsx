import Header from "@/components/Header";
import { getData } from "@/lib/actions/data.actions";
import Link from "next/link";
import React from "react";

const Posts = async () => {
	const response = await getData();
	return (
		<div>
			<Header
				title="All Posts"
				subTitle="Welcome to my posts page. Here you can find all my posts."
			/>
			<ul className="text-center px-5 pt-6">
				{response?.map((post: any) => (
					<li key={post.id} className="mb-12">
						<Link href={`posts/${post.id}`} className="lg:text-2xl sm:text-lg">
							<div className="mx-auto max-w-2xl px-6 lg:px-3">
								<div className="mt-10 flow-root sm:mt-20">
									<div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
										<div className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10">
											{post.title}
										</div>
									</div>
								</div>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Posts;
