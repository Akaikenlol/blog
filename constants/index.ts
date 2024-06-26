export const navBarLinks = [
	{
		route: "/",
		label: "Home",
	},
	{
		route: "/posts",
		label: "Posts",
	},

	{
		route: "/create-post",
		label: "Create Post",
	},
];

export interface createPostProps {
	title: string;
	body: string;
}
