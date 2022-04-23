import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

import { getPlacesData } from "./api/index";

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Comfortaa';
		font-weight: 300;

	}
`;
const Div = styled.div`
	display: flex;
`;
const App = () => {
	const [places, setPlaces] = useState<
		{
			name: string;
			photo: { images: { original: { url: string } } };
			phone: string;
			open_now_text: string;
			rating: string;
			website: string;
			latitude: number;
		}[]
	>([]);
	console.log(places);
	const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
	const [bounds, setBounds] = useState({
		ne: { lat: 0, lng: 0 },
		sw: { lat: 0, lng: 0 },
	});
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				setCoordinates({ lat: latitude, lng: longitude });
			}
		);
	}, []);

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
