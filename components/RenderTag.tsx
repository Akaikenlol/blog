"use client";

import { ThumbsDown, ThumbsUp } from "lucide-react";
import { RenterTagProps } from "@/types";

const RenderTag = ({ data }: RenterTagProps) => {
	return (
		<div className="flex justify-between my-5 cursor-pointer gap-6">
			<div className="flex items-center justify-center gap-3">
				<ThumbsUp />
				<p>{data.reactions.likes}</p>
			</div>
			<div className="flex items-center justify-center gap-3">
				<ThumbsDown />
				<p>{data.reactions.dislikes}</p>
			</div>
		</div>
	);
};

export default RenderTag;
