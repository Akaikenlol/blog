import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import React from "react";
const Posts = async () => {
	return (
		<div>
			<Header
				title="All Posts"
				subTitle="Welcome to my posts page. Here you can find all my posts."
			/>
			<PostCard />
		</div>
	);
};

export default Posts;
