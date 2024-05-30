"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { formSchema } from "@/lib/utils";
import { z } from "zod";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

const CreateForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
			body: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8 flex flex-col"
			>
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-base font-semibold text-gray-700">
								Title
							</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter your title"
									{...field}
									type="text"
									className="border-2 border-gray-300 text-gray-900 placeholder:text-gray-500 p-4 rounded-xl shadow-lg"
								/>
							</FormControl>
							<FormMessage className="text-xs text-red-500 mt-2" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="body"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-base font-semibold text-gray-700">
								Body
							</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Enter your body text"
									{...field}
									className="border-gray-300 border-2 text-gray-900 placeholder:text-gray-500 p-4 rounded-xl shadow-lg"
								/>
							</FormControl>
							<FormMessage className="text-xs text-red-500 mt-2" />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					variant={"outline"}
					className="flex gap-6 border-none bg-slate-800 text-white hover:bg-slate-300 ease-in-out duration-500 shadow-lg py-4 text-sm rounded-xl border"
				>
					Submit
				</Button>
			</form>
		</Form>
	);
};

export default CreateForm;
