import axious from "axios";
//Define URL
const URL =
	"https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

//Define Type
type PropsType = {
	ne: {
		lat: number;
		lng: number;
	};
	sw: {
		lat: number;
		lng: number;
	};
};

export const getPlacesData = async (props: PropsType) => {
	try {
		const {
			data: { data },
		} = await axious.get(URL, {
			params: {
				bl_latitude: props.sw.lat,
				tr_latitude: props.ne.lat,
				bl_longitude: props.sw.lng,
				tr_longitude: props.ne.lat,
			},
			headers: {
				"X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
				"X-RapidAPI-Key":
					"de043ff30amshf4927809baed18cp1b336fjsnc46e18fd14c3",
			},
		});
		return data;
	} catch (error) {
		console.log(error);
	}
};
