interface HeaderProps {
	title: string;
	subTitle: string;
}

export interface PostsProps {
	params: {
		id: string;
	};
	postData: any;
}

export interface RenterTagProps {
	data: any;
	// onUpvote: () => void;
}
