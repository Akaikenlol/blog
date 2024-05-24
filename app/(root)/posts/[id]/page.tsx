import PostDetailCard from "@/components/PostDetailCard";
import React from "react";
import { PostsProps } from "@/types";
import { getEachData } from "@/lib/actions/data.actions";

const Page = async ({ params }: PostsProps) => {
	const { id } = params;
	const data = await getEachData(id);

	return (
		<main className="px-7 text-center">
			<PostDetailCard params={data} />
		</main>
	);
};

export default Page;
