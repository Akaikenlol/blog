import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createPost } from "@/lib/actions/data.actions";
import React from "react";

const CreatePosts = () => {
	return (
		<div>
			<Header
				title="All Create Posts"
				subTitle="Welcome to my Create posts page. Here you can create a new post."
			/>
			<div className="mx-auto max-w-2xl px-6 lg:px-3">
				<div className="mt-10 flow-root sm:mt-20">
					<div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
						<div className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10">
							<div className="flex flex-col gap-6">
								<Input
									type="text"
									placeholder="Header"
									className="border-none bg-zinc-100 p-4 rounded-xl shadow-lg"
								/>
								<Input
									type="text"
									placeholder="Body"
									className="border-none bg-zinc-100 p-4 rounded-xl shadow-lg"
								/>
								<Button
									asChild
									variant="outline"
									onClick={createPost}
									className="flex gap-6 border-none rounded-xl hover:bg-zinc-100 ease-in-out duration-500 shadow-lg"
								>
									Submit
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreatePosts;
