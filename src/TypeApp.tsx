export type PlacesType = {
	name: string;
	photo: { images: { original: { url: string } } };
	phone: string;
	open_now_text: string;
	rating: string;
	website: string;
	latitude: number;
}[];
export type CoordinatesType = { lat: number; lng: number };
export type BoundsType = {
	ne: {
		lat: number;
		lng: number;
	};
	sw: {
		lat: number;
		lng: number;
	};
};
