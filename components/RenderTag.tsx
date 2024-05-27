"use client";

import { ThumbsDown, ThumbsUp } from "lucide-react";
import { RenterTagProps } from "@/types";
import { Button } from "./ui/button";
import { useState } from "react";

const RenderTag = ({ data }: RenterTagProps) => {
	const [upvoteCount, setUpvoteCount] = useState(0);
	const [downvoteCount, setDownvoteCount] = useState(0);

	const handleUpvote = () => {
		if (upvoteCount > 0) {
			setUpvoteCount(upvoteCount + 1);
		}
	};

	const handleDownvote = () => {
		if (upvoteCount > 0) {
			setDownvoteCount(downvoteCount + 1);
		}
	};

	return (
		<div className="flex justify-between my-5 cursor-pointer gap-6">
			<div className="flex items-center justify-center gap-3">
				{/* <p>{data.reactions.likes}</p> */}
				<p>{upvoteCount}</p>
				<Button
					variant="ghost"
					// onClick={handleUpvote}
				>
					<ThumbsUp />
				</Button>
			</div>
			<div className="flex items-center justify-center gap-3">
				{/* <p>{data.reactions.dislikes}</p> */}
				<p>{downvoteCount}</p>
				<Button
					variant="ghost"
					// onClick={handleDownvote}
				>
					<ThumbsDown />
				</Button>
			</div>
		</div>
	);
};

export default RenderTag;
