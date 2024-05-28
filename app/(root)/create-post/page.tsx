import CreateForm from "@/components/CreateForm";
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
				<div className=" flow-root mt-10 sm:mt-10 lg:mt-14 mb-10">
					<div className="-m-2 rounded-xl bg-gray-900/5 p-4 mt-2 sm:p-4 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
						<div className="rounded-xl bg-white p-8 lg:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10">
							<CreateForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreatePosts;
