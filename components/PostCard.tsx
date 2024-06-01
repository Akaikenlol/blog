import React from "react";
import { getData } from "@/lib/actions/data.actions";
import Link from "next/link";
import Image from "next/image";
import { StepBack } from "lucide-react";
import prisma from "@/lib/db";

const PostCard = async () => {
	const posts = await prisma.post.findMany();
	return (
		<div className="flex flex-col">
			<ul className="text-center px-5 pt-6">
				{posts?.map((post: any) => (
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

export default PostCard;
