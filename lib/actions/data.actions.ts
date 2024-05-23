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
