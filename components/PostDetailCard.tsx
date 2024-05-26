"use client";

import { Eye, StepBack, User } from "lucide-react";
import { getEachData } from "@/lib/actions/data.actions";
import { PostsProps } from "@/types";
import { useRouter } from "next/navigation";
import { Badge } from "./ui/badge";
import RenderTag from "./RenderTag";

const PostDetailCard = async ({ params }: PostsProps) => {
	const router = useRouter();
	const { id } = params;
	const data = await getEachData(id);

	const handleClick = () => {
		return router.push(`/posts/`);
	};

	return (
		<div className="flex flex-col gap-6 items-center">
			<div className="mx-auto max-w-5xl px-6 lg:px-8">
				<div className="mt-16 flow-root sm:mt-24">
					<div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
						<div className="rounded-md bg-white p-2 sm:p-10 md:p-20 shadow-2xl ring-1 ring-gray-900/10">
							<h1 className="lg:text-5xl text-2xl font-semibold mb-7">
								{data.title}
							</h1>
							<p className="max-w-[700px] mx-auto">{data.body}</p>
							<div className="flex justify-between my-5 cursor-pointer">
								<div className="flex items-center justify-center gap-3">
									<Eye />
									<p>{data.views}</p>
								</div>
								<div className="flex items-center justify-center gap-3">
									<User />
									<p>{data.userId}</p>
								</div>
								<RenderTag data={data} />
							</div>
							{data.tags.map((tag: string) => (
								<Badge className="mt-2 text-zinc-400 border border-zinc-300 shadow-2xl px-3 py-1 mx-2 rounded-full cursor-pointer">
									{tag}
								</Badge>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="rounded-full border-4 border-black p-1  z-40 items-center justify-center my-6 max-w-[45px] lg:flex hidden cursor-pointer object-contain">
				<StepBack onClick={handleClick} />
			</div>
		</div>
	);
};

export default PostDetailCard;
