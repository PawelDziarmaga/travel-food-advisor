import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import { parentPort } from "worker_threads";

const Div = styled.div`
	flex-grow: 2;
	height: 94vh;
`;

type PropsType = {
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
const Map = (props: PropsType) => {
	return (
		<Div>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: "AIzaSyAx3CFD_0ijjbmksnD7mJ3bcOLuU87iQ_s",
				}}
				defaultCenter={props.coordinates}
				center={props.coordinates}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				/*{options={}*/
				onChange={(e) => {
					props.setCoordinates({
						lat: e.center.lat,
						lng: e.center.lng,
					});

					props.setBounds({
						ne: e.marginBounds.ne,
						sw: e.marginBounds.sw,
					});
				}}
				/*onChildClick={}*/
			></GoogleMapReact>
		</Div>
	);
};

export default Map;
