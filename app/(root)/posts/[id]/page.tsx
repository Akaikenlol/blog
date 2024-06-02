import PostDetailCard from "@/components/PostDetailCard";
import React from "react";
import { PostsProps } from "@/types";
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
			<PostDetailCard
				postData={post}
				params={{
					id: post.id,
				}}
			/>
		</main>
	);
};

export default Page;
