"use server";

import prisma from "../db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createPostProps } from "@/constants";

export const getData = async () => {
	try {
		const response = await fetch("https://dummyjson.com/posts?limit=10", {
			cache: "no-store",
		});
		const data = await response.json();

		return data.posts;
	} catch (error) {
		console.log(error);
	}
};

export const getEachData = async (id: any) => {
	try {
		const response = await fetch(`https://dummyjson.com/posts/${id}`, {
			cache: "no-store",
		});

		if (!response) {
			throw new Error("Failed to fetch data");
		}
		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
	}
};

export const createPost = async ({ title, body }: createPostProps) => {
	const newPost = await prisma.post.create({
		data: {
			title,
			body,
		},
	});

	revalidatePath("/posts");

	return newPost;
};

export const getPostData = async (id: any) => {
	const post = await prisma.post.findUnique({
		where: {
			id: id.toString(),
		},
	});

	if (!post) {
		redirect("/404");
	}

	return post;
};
