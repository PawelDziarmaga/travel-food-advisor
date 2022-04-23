import React from "react";
//Import style
import styled from "styled-components";
//Import components
import GoogleMapReact from "google-map-react";
/*import { parentPort } from "worker_threads";*/
//Import types
import { PropsType } from "./TypeMap";
//Define style
const Div = styled.div`
	flex-grow: 2;
	height: 94vh;
`;

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
