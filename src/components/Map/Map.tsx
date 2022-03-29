import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";

const Div = styled.div`
	flex-grow: 2;
	height: 94vh;
`;
const Map = () => {
	const coordinates = { lat: 0, lng: 0 };
	return (
		<Div>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: "AIzaSyAx3CFD_0ijjbmksnD7mJ3bcOLuU87iQ_s",
				}}
				defaultCenter={coordinates}
				center={coordinates}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				/*{options={}*/
				/*onChange={}*/
				/*onChildClick={}*/
			></GoogleMapReact>
		</Div>
	);
};

export default Map;
