//Import hooks
import React, { useState, useEffect } from "react";
//Import components
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
//Import api
import { getPlacesData } from "./api/index";
//Import types
import { PlacesType, CoordinatesType, BoundsType } from "./TypeApp";
//Import style
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyleApp";
//Define style
const Div = styled.div`
	display: flex;
`;

const App = () => {
	//Define State
	const [places, setPlaces] = useState<PlacesType>([]);
	const [coordinates, setCoordinates] = useState<CoordinatesType>({
		lat: 0,
		lng: 0,
	});
	const [bounds, setBounds] = useState<BoundsType>({
		ne: { lat: 0, lng: 0 },
		sw: { lat: 0, lng: 0 },
	});
	//Load first coordinates
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				setCoordinates({ lat: latitude, lng: longitude });
			}
		);
	}, []);
	//Import data from api, update places
	useEffect(() => {
		getPlacesData(bounds).then((data) => {
			setPlaces(data);
		});
	}, [coordinates, bounds]);
	return (
		<React.Fragment>
			<Header />
			<Div>
				<List places={places} />
				<Map
					setCoordinates={setCoordinates}
					setBounds={setBounds}
					coordinates={coordinates}
					places={places}
				/>
			</Div>

			<GlobalStyle />
		</React.Fragment>
	);
};

export default App;
