import PostDetailCard from "@/components/PostDetailCard";
import React from "react";
import { PostsProps } from "@/types";
import { getEachData } from "@/lib/actions/data.actions";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

const Page = async ({ params }: PostsProps) => {
	const { id } = params;
	const post = await prisma.post.findUnique({
		where: {
			id: id.toString(),
		},
	});

	if (!post) {
		notFound();
	}

	return (
		<main className="px-7 text-center">
			{/* <PostDetailCard params={post} /> */}
			<PostDetailCard params={{ ...post, id: post.id.toString() }} />
		</main>
	);
};

export default Page;
