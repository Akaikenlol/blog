"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Eye, ThumbsDown, ThumbsUp, User } from "lucide-react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { RenterTagProps } from "@/types";

const RenderTag = ({ data }: RenterTagProps) => {
	const [upvoteCount, setUpvoteCount] = useState(data.reactions.likes);

	const handleUpvoute = () => {
		setUpvoteCount(upvoteCount + 1);
	};

	return (
		<div className="flex justify-between my-5 cursor-pointer">
			<div className="flex items-center justify-center gap-3">
				<Eye />
				<p>{data.views}</p>
			</div>
			<div className="flex items-center justify-center gap-3">
				<User />
				<p>{data?.userdata}</p>
			</div>
			<div className="flex items-center justify-center gap-3">
				<ThumbsUp />
				<p>{data.reactions.likes}</p>
				<Button onClick={handleUpvoute} />
			</div>
			<div className="flex items-center justify-center gap-3">
				<ThumbsDown />
				<p>{data.reactions.dislikes}</p>
			</div>
		</div>
	);
};

export default RenderTag;
