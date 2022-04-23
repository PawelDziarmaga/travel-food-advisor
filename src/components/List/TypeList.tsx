export type PropsType = {
	places: {
		name: string;
		photo: { images: { original: { url: string } } };
		phone: string;
		open_now_text: string;
		rating: string;
		website: string;
	}[];
};
