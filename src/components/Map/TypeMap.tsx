export type PropsType = {
	setCoordinates: React.Dispatch<
		React.SetStateAction<{
			lat: number;
			lng: number;
		}>
	>;
	setBounds: React.Dispatch<
		React.SetStateAction<{
			ne: {
				lat: number;
				lng: number;
			};
			sw: {
				lat: number;
				lng: number;
			};
		}>
	>;
	coordinates: { lat: number; lng: number };
	places: {
		latitude: number;
	}[];
};
